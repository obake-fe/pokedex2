import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pokeImg: {
			width: 100,
			height: 100,
			margin: "auto",
			backgroundSize: "contain",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat"
		},
		pokeImg1: (no) => ({
			backgroundImage: `url(./images/00${no}_0.png)`
		}),
		pokeImg2: (no) => ({
			backgroundImage: `url(./images/0${no}_0.png)`
		}),
		pokeImg3: (no) => ({
			backgroundImage: `url(./images/${no}_0.png)`
		})
	})
);

type OwnProps = {
	no: number;
};

type Props = OwnProps;

export const PokeImg = ({ no }: Props): JSX.Element => {
	const classes = useStyles(no);

	return (
		<>
			{no < 10 && <Box className={`${classes.pokeImg} ${classes.pokeImg1}`} />}
			{no > 9 && no < 100 && (
				<Box className={`${classes.pokeImg} ${classes.pokeImg2}`} />
			)}
			{no < 803 && <Box className={`${classes.pokeImg} ${classes.pokeImg3}`} />}
		</>
	);
};