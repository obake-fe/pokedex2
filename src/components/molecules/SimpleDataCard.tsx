import { VFC } from "react";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { DescType } from "@utils/createDescArray";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { EnhancedPokeImg } from "@containers/atoms/PokeImg";
import {
	Box,
	CircularProgress,
	createStyles,
	makeStyles,
	Paper
} from "@material-ui/core";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			position: "relative",
			height: "100%",
			margin: "auto",
			padding: "20px 32px",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
			backgroundRepeat: "repeat"
		},
		circular: {
			position: "absolute",
			top: "calc(50% - 40px)",
			left: "calc(50% - 40px)"
		}
	})
);

export type Props = {
	pokeData: NormalizedPokeDataType;
	loadingUI: SetLoadingUIType;
	DescArray: DescType[];
};

export const SimpleDataCard: VFC<Props> = ({
	pokeData,
	loadingUI,
	DescArray
}) => {
	const classes = useStyles();

	const DataComponent = pokeData.name ? (
		<>
			<EnhancedPokeImg no={pokeData.id} />
			<DescriptionList data={DescArray} testId={`descId-${pokeData.id}`} />
		</>
	) : null;

	return (
		<Paper className={classes.paper}>
			{DataComponent}
			{loadingUI.state && (
				<Box className={classes.circular}>
					<CircularProgress size={80} />
				</Box>
			)}
		</Paper>
	);
};
