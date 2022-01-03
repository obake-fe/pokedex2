import { VFC } from "react";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { EnhancedDataCard } from "@containers/molecules/DataCard";
import { Box } from "@material-ui/core";

type Props = {
	pokeData: NormalizedPokeDataType;
	pokeSpecies: NormalizedPokeSpeciesType;
	loadingUI: SetLoadingUIType;
};

export const OutputArea: VFC<Props> = ({
	pokeData,
	pokeSpecies,
	loadingUI
}) => {
	return (
		<Box mt={8}>
			<EnhancedDataCard {...{ pokeData, pokeSpecies, loadingUI }} />
		</Box>
	);
};
