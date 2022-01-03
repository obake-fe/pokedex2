import { useEffect, useMemo, VFC } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducers";
import { dispatchers } from "@store/dispatchers";
import { OptionType } from "@store/setSelectedOption/reducer";
import { setLoadingUIDispatcher } from "@store/setLoadingUI/dispatcher";
import { createSuggestArray } from "@utils/createSuggestArray";
import { InputArea } from "@components/organisms/searchName/InputArea";
import pokeDataArray from "@constants/pokemon_data.json";

export const EnhancedInputArea: VFC = () => {
	/** state */
	const option = useSelector<AppState, OptionType>(
		(state) => state.searchName.selectedOption,
		shallowEqual
	);

	/** dispatchers */
	const dispatch = useDispatch();
	const { searchName } = dispatchers;
	const setSelectedOption = (optionArg: OptionType): void => {
		searchName.setSelectedOptionDispatcher(dispatch)(optionArg);
	};
	const fetchPokeData = (no: number): void => {
		searchName.getPokeDataDispatcher(dispatch)(no);
	};
	const fetchPokeSpecies = (no: number): void => {
		searchName.getPokeSpeciesDispatcher(dispatch)(no);
	};
	const setLoadingUI = (state: boolean): void => {
		setLoadingUIDispatcher(dispatch)(state);
	};

	/** create list for suggest */
	const suggestArray = useMemo(() => {
		return createSuggestArray(pokeDataArray.map((data) => data.name.japanese));
	}, [pokeDataArray]);

	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const id = query.get("id");

		/** add params if you have used searchName once */
		if (option.no && !id) {
			H.replace(`/pokemon?id=${option.no}`);
			return;
		}
		/** show search result if URL has params */
		if (id) {
			setSelectedOption(suggestArray[+id - 1]);
			fetchPokeData(+id);
			fetchPokeSpecies(+id);
		}
	}, []);

	/**
	 * fire this function when you change inputValue
	 * @param event event object don't use
	 * @param selectedOption OptionType you select
	 */
	const searchNamePoke = (
		event: unknown,
		selectedOption: OptionType | null
	): void => {
		/** stop the processing if inputValue is empty */
		if (selectedOption === null) return;
		/** stop the processing if you select same value */
		if (option.value === selectedOption.value) return;

		setLoadingUI(true);
		setSelectedOption(selectedOption);
		fetchPokeData(selectedOption.no);
		fetchPokeSpecies(selectedOption.no);
		H.replace(`/pokemon?id=${selectedOption.no}`);
	};

	return (
		<InputArea
			suggestList={suggestArray}
			option={option}
			searchName={searchNamePoke}
		/>
	);
};
