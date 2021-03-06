import { PokeTypeDataType } from "@api/requests/getPokeTypeData";
import pokeData from "@constants/pokemon_data.json";
import { NormalizedPokeTypeDataType } from "./reducers";

/**
 * @param typeData gotten from PokeAPI
 * @return normalized Type Pokemon Data
 */
export const normalizePokeData = (
	typeData: PokeTypeDataType
): NormalizedPokeTypeDataType => {
	const typePokeArray = typeData.pokemon
		/** Pokemon range is between 1.bulbasaur and 2.lunala */
		.filter((data) => {
			const pokeNo = +data.pokemon.url.split("/")[6];
			return pokeNo < 808;
		})
		.map((data) => {
			const pokeNo = +data.pokemon.url.split("/")[6];
			return {
				name: {
					ja: pokeData[pokeNo - 1].name.japanese,
					en: pokeData[pokeNo - 1].name.english
				},
				no: pokeNo
			};
		});

	return {
		type: typeData.name,
		no: typeData.id,
		pokemon: typePokeArray
	};
};
