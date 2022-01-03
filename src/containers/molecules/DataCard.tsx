import { VFC } from "react";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { DataCard } from "@components/molecules/DataCard";
import { createDescArray } from "@utils/createDescArray";

type Props = {
	pokeData: NormalizedPokeDataType;
	pokeSpecies: NormalizedPokeSpeciesType;
	loadingUI: SetLoadingUIType;
	graph?: boolean;
	simple?: boolean;
	children?: JSX.Element;
};

export const EnhancedDataCard: VFC<Props> = ({
	pokeData,
	pokeSpecies,
	loadingUI,
	graph = true,
	simple = false,
	children
}) => {
	const DescArray = createDescArray(pokeData, pokeSpecies);

	/** create base stats Array */
	const statsArray = [...Array(6).keys()].map(
		(num) => pokeData.stats[num].base_stat
	);

	return (
		<DataCard
			{...{ pokeData, loadingUI, DescArray, statsArray, graph, simple }}
		>
			{children}
		</DataCard>
	);
};
