import { useEffect, VFC } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { AppState } from "@store/reducers";
import { SetPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { OutputArea } from "@components/organisms/searchPartner/OutputArea";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { setLoadingUIDispatcher } from "@store/setLoadingUI/dispatcher";

export const EnhancedOutputArea: VFC = () => {
	/** state */
	const partnerInfo = useSelector<AppState, SetPartnerInfoState>(
		(state) => state.searchPartner.partnerInfo,
		shallowEqual
	);
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchPartner.pokeData,
		shallowEqual
	);
	const pokeSpecies = useSelector<AppState, NormalizedPokeSpeciesType>(
		(state) => state.searchPartner.pokeSpecies,
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

	return <OutputArea {...{ partnerInfo, pokeData, pokeSpecies, loadingUI }} />;
};
