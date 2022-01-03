import { useEffect, useMemo, VFC } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AppState } from "@store/reducers";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { setLoadingUIDispatcher } from "@store/setLoadingUI/dispatcher";
import { createDescArray } from "@utils/createDescArray";
import { OutputArea } from "@components/organisms/searchType/OutputArea";

export const EnhancedOutputArea: VFC = () => {
	/** state */
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchType.pokeData,
		shallowEqual
	);
	const pokeSpecies = useSelector<AppState, NormalizedPokeSpeciesType>(
		(state) => state.searchType.pokeSpecies,
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

	const DescArray = useMemo(() => createDescArray(pokeData, pokeSpecies), [
		pokeData,
		pokeSpecies
	]);

	return <OutputArea {...{ pokeData, loadingUI, DescArray }} />;
};
