import { MouseEvent as ReactMouseEvent, useEffect, useMemo, VFC } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { getPokeTypeDataType } from "@store/searchType/getPokeTypeData/reducers";
import { createAndPokeArray } from "@utils/createAndPokeArray";
import { createOrPokeArray } from "@utils/createOrPokeArray";
import { PokeIconList } from "@components/atoms/PokeIconList";
import { createStyles, makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		pokeList: {
			listStyle: "none",
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center"
		}
	})
);

type StateProps = {
	switchState: boolean;
	pokeTypeData: getPokeTypeDataType;
	pokeData: normalizedPokeDataType;
};

type DispatchProps = {
	fetchPokeData: (no: number) => void;
	fetchPokeSpecies: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const WrappedIconListArea: VFC<Props> = ({
	switchState,
	pokeTypeData,
	pokeData,
	fetchPokeData,
	fetchPokeSpecies
}) => {
	/** define for React Router Hooks */
	const H = useHistory();
	const useQuery = (): URLSearchParams =>
		new URLSearchParams(useLocation().search);
	const query = useQuery();

	useEffect(() => {
		const pokemon = query.get("pokemon");

		/** add Query Strings if store have searchType State */
		if (pokemon) {
			fetchPokeData(Number(pokemon));
			fetchPokeSpecies(Number(pokemon));
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
		fetchPokeData(Number(value));
		fetchPokeSpecies(Number(value));

		H.replace(
			`/type?switch=${switchState}&type1=${pokeTypeData.type1.type}&type2=${
				pokeTypeData.type2.type
			}&pokemon=${Number(value)}`
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

	const classes = useStyles();

	return orPokeList.length !== 0 ? (
		<Box className={classes.pokeList}>
			{(switchState ? orPokeList : andPokeList).map((item) => {
				return (
					<PokeIconList
						key={item.no}
						item={item}
						pokeId={pokeData.id}
						onClick={showPokeData}
					/>
				);
			})}
		</Box>
	) : null;
};

/** container */
const mapStateToProps = (state: AppState): StateProps => ({
	switchState: state.searchType.switchState.switchState,
	pokeTypeData: state.searchType.pokeTypeData,
	pokeData: state.searchType.pokeData
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		fetchPokeData: async (no: number): Promise<void> => {
			await searchType.getPokeDataDispatcher(dispatch)(no);
		},
		fetchPokeSpecies: async (no: number): Promise<void> => {
			await searchType.getPokeSpeciesDispatcher(dispatch)(no);
		}
	};
};

export const IconListArea = connect(
	mapStateToProps,
	mapDispatchToProps
)(WrappedIconListArea);
