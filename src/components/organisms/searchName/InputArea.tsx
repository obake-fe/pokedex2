import { useEffect, useMemo, useCallback, VFC } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useHistory, useLocation } from "react-router-dom";
import { SuggestTextField } from "@components/atoms/SuggestTextField";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { OptionType } from "@store/common/setSelectedOption/reducer";
import { createSuggestArray } from "@utils/createSuggestArray";
import { Container, Typography } from "@material-ui/core";

type StateProps = {
	option: OptionType;
};

type DispatchProps = {
	setSelectedOption: (option: OptionType) => void;
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const WrappedInputArea: VFC<Props> = ({
	option,
	setSelectedOption,
	fetchPokeData,
	fetchPokeSpecies
}) => {
	/** create list for suggest */
	const suggestArray = useMemo(() => createSuggestArray(), []);

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
	 */
	const searchName = useCallback(
		(e: unknown, selectedOption: OptionType | null): void => {
			/** stop the processing if inputValue is empty */
			if (selectedOption === null) return;

			setSelectedOption(selectedOption);
			fetchPokeData(selectedOption.no);
			fetchPokeSpecies(selectedOption.no);
			H.replace(`/pokemon?id=${selectedOption.no}`);
		},
		[setSelectedOption, fetchPokeData, fetchPokeSpecies]
	);

	return (
		<Container>
			<Typography variant="h2">1. 名前検索</Typography>
			<SuggestTextField
				suggestList={suggestArray}
				option={option}
				onChange={searchName}
			/>
		</Container>
	);
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	option: state.searchName.selectedOption
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchName } = dispatches;

	return {
		setSelectedOption: (option: OptionType): void => {
			searchName.setSelectedOptionDispatcher(dispatch)(option);
		},
		fetchPokeData: async (no: number): Promise<void> => {
			await searchName.getPokeDataDispatcher(dispatch)(no);
		},
		fetchPokeSpecies: async (no: number): Promise<void> => {
			await searchName.getPokeSpeciesDispatcher(dispatch)(no);
		}
	};
};

export const InputArea = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedInputArea);