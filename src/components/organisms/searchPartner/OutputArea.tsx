import { VFC } from "react";
import { setInputNameState } from "@store/searchPartner/setInputName/reducer";
import { normalizedPokeDataType } from "@store/common/getPokeData/reducers";
import { normalizedPokeSpeciesType } from "@store/common/getPokeSpecies/reducers";
import { DataCard } from "@components/molecules/DataCard";
import { Box, Typography, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		bold: {
			fontWeight: "bold",
			padding: "0 4px"
		}
	})
);

type StateProps = {
	inputName: setInputNameState;
	pokeData: normalizedPokeDataType;
	pokeSpecies: normalizedPokeSpeciesType;
};

type Props = StateProps;

export const OutputArea: VFC<Props> = ({
	inputName,
	pokeData,
	pokeSpecies
}) => {
	const classes = useStyles();
	return (
		<Box mt={10}>
			<DataCard pokeData={pokeData} pokeSpecies={pokeSpecies}>
				<Typography variant="subtitle1">
					<span className={classes.bold}>{inputName.inputName}</span>は
					<span className={classes.bold}>{pokeSpecies.name.ja}</span>
					にきめた！
				</Typography>
			</DataCard>
		</Box>
	);
};
