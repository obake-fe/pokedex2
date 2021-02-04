import { PokeTypeDataType } from "@api/requests/getPokeTypeData";
import pokeData from "@data/pokemon_data2.json";
import { formattedPokeTypeDataType } from "./reducers";

export const normalizePokeData = (
	typeData: PokeTypeDataType
): formattedPokeTypeDataType => {
	const typePokemonArray = [] as formattedPokeTypeDataType["pokemon"];

	typeData.pokemon.forEach((data) => {
		const pokeNo = +data.pokemon.url.split("/")[6];
		// Noが810以上のポケモンはいないので、その場合は処理を止める
		if (pokeNo >= 809) {
			return;
		}

		const obj = {
			name: {
				ja: pokeData[pokeNo].name.japanese,
				en: pokeData[pokeNo].name.english
			},
			no: pokeNo
		};

		typePokemonArray.push(obj);
	});

	return {
		type: typeData.name,
		pokemon: typePokemonArray
	};
};
