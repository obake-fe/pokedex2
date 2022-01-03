import { VFC } from "react";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { DescType } from "@utils/createDescArray";
import { DescriptionList } from "@components/atoms/DescriptionList";
import { StatsRadarChart } from "@components/atoms/StatsRadarChart";
import { EnhancedPokeImg } from "@containers/atoms/PokeImg";
import {
	Paper,
	createStyles,
	makeStyles,
	Box,
	Container,
	CircularProgress
} from "@material-ui/core";
import classNames from "classnames";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			maxWidth: 800,
			minHeight: 428,
			position: "relative",
			margin: "auto",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
			backgroundRepeat: "repeat"
		},
		box: {
			position: "relative",
			maxWidth: 800,
			minHeight: 428,
			padding: "12px 40px 0",
			backgroundImage: `url(${process.env.PUBLIC_URL}/images/brickwall.png)`,
			backgroundRepeat: "repeat"
		},
		dataContainer: {
			display: "flex"
		},
		descFlex: {
			marginTop: "20px"
		},
		ListWrapper: {
			width: 440
		},
		simpleWrapper: {
			width: "100%"
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
	statsArray: number[];
	graph: boolean;
	simple: boolean;
	children?: JSX.Element;
};

export const DataCard: VFC<Props> = ({
	pokeData,
	loadingUI,
	DescArray,
	statsArray,
	graph,
	simple,
	children
}) => {
	const classes = useStyles();

	const DataComponent = pokeData.name ? (
		<>
			{children}
			<EnhancedPokeImg no={pokeData.id} />
			<Box
				className={classNames(
					classes.dataContainer,
					simple && classes.descFlex
				)}
			>
				<Container
					className={classNames(
						classes.ListWrapper,
						simple && classes.simpleWrapper
					)}
				>
					<DescriptionList data={DescArray} testId={`descId-${pokeData.id}`} />
				</Container>
				{graph && <StatsRadarChart data={statsArray} />}
			</Box>
		</>
	) : null;

	return (
		<Paper className={classes.paper}>
			<Box id="target-component" className={classes.box}>
				{DataComponent}
				{loadingUI.state && (
					<Box className={classes.circular}>
						<CircularProgress size={80} />
					</Box>
				)}
			</Box>
		</Paper>
	);
};
