import { useEffect, VFC } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AppState } from "@store/reducers";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchName/OutputArea";
import { setLoadingUIDispatcher } from "@store/setLoadingUI/dispatcher";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";

export const EnhancedOutputArea: VFC = () => {
	/** state */
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchName.pokeData,
		shallowEqual
	);
	const pokeSpecies = useSelector<AppState, NormalizedPokeSpeciesType>(
		(state) => state.searchName.pokeSpecies,
		shallowEqual
	);
	const loadingUI = useSelector<AppState, SetLoadingUIType>(
		(state) => state.loadingUI
	);

	/** dispatchers */
	const dispatch = useDispatch();
	const setLoadingUI = (state: boolean): void => {
		setLoadingUIDispatcher(dispatch)(state);
	};

	useEffect(() => {
		if (pokeData.name && pokeSpecies.name) {
			setLoadingUI(false);
		}
	}, [pokeData, pokeSpecies]);

	return <OutputArea {...{ pokeData, pokeSpecies, loadingUI }} />;
};
