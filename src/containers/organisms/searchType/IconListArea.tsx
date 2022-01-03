import { MouseEvent as ReactMouseEvent, useEffect, useMemo, VFC } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducers";
import { dispatchers } from "@store/dispatchers";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { GetPokeTypeDataType } from "@store/getPokeTypeData/reducers";
import { setLoadingUIDispatcher } from "@store/setLoadingUI/dispatcher";
import { createAndPokeArray } from "@utils/createAndPokeArray";
import { createOrPokeArray } from "@utils/createOrPokeArray";
import { IconListArea } from "@components/organisms/searchType/IconListArea";

export const EnhancedIconListArea: VFC = () => {
	/** state */
	const switchState = useSelector<AppState, boolean>(
		(state) => state.searchType.switchState.switchState
	);
	const pokeTypeData = useSelector<AppState, GetPokeTypeDataType>(
		(state) => state.searchType.pokeTypeData,
		shallowEqual
	);
	const pokeData = useSelector<AppState, NormalizedPokeDataType>(
		(state) => state.searchType.pokeData,
		shallowEqual
	);

	/** dispatchers */
	const dispatch = useDispatch();
	const { searchType } = dispatchers;
	const fetchPokeData = (no: number): void => {
		searchType.getPokeDataDispatcher(dispatch)(no);
	};
	const fetchPokeSpecies = (no: number): void => {
		searchType.getPokeSpeciesDispatcher(dispatch)(no);
	};
	const setLoadingUI = (state: boolean): void => {
		setLoadingUIDispatcher(dispatch)(state);
	};

	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const pokemon = query.get("pokemon");

		/** add Query Strings if store have searchType State */
		if (pokemon) {
			fetchPokeData(+pokemon);
			fetchPokeSpecies(+pokemon);
		}
	}, []);

	/**
	 * fire this function when you click Pokemon Icon
	 * @param event event object
	 */
	const showPokeData = (
		event: ReactMouseEvent<HTMLInputElement, MouseEvent>
	): void => {
		const { value } = event.target as HTMLInputElement;

		/** stop the processing if you select same pokemon */
		if (+value === pokeData.id) return;

		setLoadingUI(true);
		fetchPokeData(+value);
		fetchPokeSpecies(+value);

		H.replace(
			`/type?switch=${switchState}&type1=${pokeTypeData.type1.no}&type2=${
				pokeTypeData.type2.no
			}&pokemon=${+value}`
		);
	};

	/** create Pokemon list for AND Search */
	const andPokeList = useMemo(() => createAndPokeArray(pokeTypeData), [
		pokeTypeData
	]);

	/** create Pokemon list for OR Search */
	const orPokeList = useMemo(() => createOrPokeArray(pokeTypeData), [
		pokeTypeData
	]);

	return (
		<IconListArea
			{...{
				orPokeList,
				andPokeList,
				switchState,
				pokeTypeData,
				pokeData,
				showPokeData
			}}
		/>
	);
};
