import { VFC } from "react";
import { SetPartnerInfoState } from "@store/setPartnerInfo/reducer";
import { NormalizedPokeDataType } from "@store/getPokeData/reducers";
import { NormalizedPokeSpeciesType } from "@store/getPokeSpecies/reducers";
import { SetLoadingUIType } from "@store/setLoadingUI/reducer";
import { EnhancedDataCard } from "@containers/molecules/DataCard";
import { Box, Typography, createStyles, makeStyles } from "@material-ui/core";
import { theme } from "@styles/theme";

const useStyles = makeStyles(() =>
	createStyles({
		bold: {
			fontWeight: "bold",
			padding: "0 4px"
		},
		subTitle: {
			position: "absolute",
			whiteSpace: "pre-line",
			fontSize: "1.1rem",
			textAlign: "right",
			right: "calc(50% + 60px)",
			top: "100px"
		},
		pokeInfo: {
			display: "inline-block",
			position: "relative",
			margin: "0 10px 0 0",
			padding: "8px",
			maxWidth: "250px",
			borderRadius: "12px",
			background: theme.palette.primary.light,
			fontSize: "15px",
			fontWeight: "bold",
			"&::after": {
				content: '""',
				position: "absolute",
				top: "3px",
				right: "-19px",
				border: "8px solid transparent",
				borderLeft: `18px solid ${theme.palette.primary.light}`,
				transform: "rotate(-35deg)"
			}
		}
	})
);

type Props = {
	partnerInfo: SetPartnerInfoState;
	pokeData: NormalizedPokeDataType;
	pokeSpecies: NormalizedPokeSpeciesType;
	loadingUI: SetLoadingUIType;
};

export const OutputArea: VFC<Props> = ({
	partnerInfo,
	pokeData,
	pokeSpecies,
	loadingUI
}) => {
	const classes = useStyles();
	return (
		<Box mt={8}>
			<EnhancedDataCard
				pokeData={pokeData}
				pokeSpecies={pokeSpecies}
				loadingUI={loadingUI}
				graph={false}
				simple
			>
				<>
					<Typography variant="subtitle1" data-testid="searchPartner-text">
						<span className={classes.bold}>{partnerInfo.inputName}</span>は
						<span className={classes.bold}>{pokeSpecies.name.ja}</span>
						にきめた！
					</Typography>
					<Typography className={classes.subTitle} variant="subtitle2">
						<p className={classes.pokeInfo}>
							{partnerInfo.natureNo.ja === "おとなしい" ||
							partnerInfo.natureNo.ja === "ずぶとい"
								? `${partnerInfo.natureNo.ja}性格\n${partnerInfo.charNo.ja}`
								: `${partnerInfo.natureNo.ja}な性格\n${partnerInfo.charNo.ja}`}
						</p>
					</Typography>
				</>
			</EnhancedDataCard>
		</Box>
	);
};
