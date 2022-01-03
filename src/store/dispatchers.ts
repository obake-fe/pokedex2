import {
	searchPartnerGetPokeDataDispatcher,
	searchNameGetPokeDataDispatcher,
	searchTypeGetPokeDataDispatcher
} from "@store/getPokeData/dispatchers";
import {
	searchPartnerGetPokeSpeciesDispatcher,
	searchTypeGetPokeSpeciesDispatcher,
	searchNameGetPokeSpeciesDispatcher
} from "@store/getPokeSpecies/dispatchers";
import {
	searchNameSetSelectedOptionDispatcher,
	searchTypeSetSelectedOptionDispatcher
} from "@store/setSelectedOption/dispatcher";
import { setSwitchStateDispatcher } from "@store/setSwitchState/dispatcher";
import { searchTypeGetPokeTypeDataDispatcher } from "@store/getPokeTypeData/dispatcher";
import { setPartnerInfoDispatcher } from "@store/setPartnerInfo/dispatcher";
import { setLoadingUIDispatcher } from "@store/setLoadingUI/dispatcher";

export const dispatchers = {
	searchName: {
		setSelectedOptionDispatcher: searchNameSetSelectedOptionDispatcher,
		getPokeDataDispatcher: searchNameGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchNameGetPokeSpeciesDispatcher
	},
	searchType: {
		setSwitchStateDispatcher,
		setSelectedOptionDispatcher: searchTypeSetSelectedOptionDispatcher,
		getPokeDataDispatcher: searchTypeGetPokeDataDispatcher,
		getPokeSpeciesDispatcher: searchTypeGetPokeSpeciesDispatcher,
		getPokeTypeDataDispatcher: searchTypeGetPokeTypeDataDispatcher
	},
	searchPartner: {
		setPartnerInfoDispatcher,
		searchPartnerGetPokeDataDispatcher,
		searchPartnerGetPokeSpeciesDispatcher
	},
	setLoadingUIDispatcher
};
