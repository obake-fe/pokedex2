import { VFC } from "react";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { DescType } from "@utils/createDescArray";
import { EnhancedIconListArea } from "@containers/organisms/searchType/IconListArea";
import { SimpleDataCard } from "@components/molecules/SimpleDataCard";
import { createStyles, makeStyles, Grid } from "@material-ui/core";
import { theme } from "@styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		gridRoot: {
			marginTop: 23
		},
		iconList: {
			height: 428,
			borderRadius: 20
		},
		dataCard: {
			height: 428,
			marginLeft: theme.spacing(8)
		}
	})
);

type Props = {
	pokeData: NormalizedPokeDataType;
	loadingUI: SetLoadingUIType;
	DescArray: DescType[];
};

export const OutputArea: VFC<Props> = ({ pokeData, loadingUI, DescArray }) => {
	const classes = useStyles();

	return (
		<Grid container classes={{ root: classes.gridRoot }}>
			<Grid item xs classes={{ item: classes.iconList }}>
				<EnhancedIconListArea />
			</Grid>
			<Grid item xs classes={{ item: classes.dataCard }}>
				<SimpleDataCard {...{ pokeData, loadingUI, DescArray }} />
			</Grid>
		</Grid>
	);
};
