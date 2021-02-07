import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { PokeIconList } from "@components/atoms/PokeIconList";
import { AppState } from "@store/reducer";
import { dispatches } from "@store/dispatches";
import { formattedPokeDataType } from "@store/common/getPokeData/reducers";
import { getPokeTypeDataType } from "@store/searchType/getPokeTypeData/reducers";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() =>
	createStyles({
		pokeList: {
			listStyle: "none",
			display: "flex",
			flexWrap: "wrap"
		}
	})
);

type StateProps = {
	pokeTypeData: getPokeTypeDataType;
	pokeData: formattedPokeDataType;
};

type DispatchProps = {
	fetchPokeData: (no: number) => void;
};

type Props = StateProps & DispatchProps;

const IconListArea = ({
	pokeTypeData,
	pokeData,
	fetchPokeData
}: Props): JSX.Element | null => {
	const classes = useStyles();

	const showPokeData = (
		event: React.MouseEvent<HTMLInputElement, MouseEvent>
	): void => {
		// eventTargetの型解決
		const { value } = event.target as HTMLInputElement;
		fetchPokeData(Number(value));
	};

	const pokemonList = pokeTypeData.type1.pokemon.filter((type1Pokemon) => {
		if (pokeTypeData.type2.type === "") {
			return true;
		}
		return pokeTypeData.type2.pokemon.some(
			(type2pokemon) => type2pokemon.name.ja === type1Pokemon.name.ja
		);
	});

	// console.log(pokemonList);

	const nodes = pokemonList.map((item) => {
		return (
			<PokeIconList
				key={item.no}
				item={item}
				pokeId={pokeData.id}
				onClick={showPokeData}
			/>
		);
	});

	return pokemonList.length !== 0 ? (
		<Container className={classes.pokeList}>{nodes}</Container>
	) : null;
};

// container
const mapStateToProps = (state: AppState): StateProps => ({
	pokeTypeData: state.searchType.pokeTypeData,
	pokeData: state.searchType.pokeData
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
	const { searchType } = dispatches;

	return {
		fetchPokeData: async (no: number): Promise<void> => {
			await searchType.getPokeDataDispatcher(dispatch)(no);
		}
	};
};

export const IconListAreaComp = connect(
	mapStateToProps,
	mapDispatchToProps
)(IconListArea);
