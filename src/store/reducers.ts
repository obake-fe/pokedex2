import { combineReducers } from "redux";
import {
	searchNameGetPokeDataReducer,
	searchTypeGetPokeDataReducer,
	searchPartnerGetPokeDataReducer
} from "@store/getPokeData/reducers";
import {
	searchNameGetPokeSpeciesReducer,
	searchTypeGetPokeSpeciesReducer,
	searchPartnerGetPokeSpeciesReducer
} from "@store/getPokeSpecies/reducers";
import {
	searchNameSetSelectedOptionReducer,
	searchTypeSetSelectedOptionReducer
} from "@store/setSelectedOption/reducer";
import { setSwitchStateReducer } from "@store/setSwitchState/reducer";
import { searchTypeGetPokeTypeDataReducer } from "@store/getPokeTypeData/reducers";
import { setPartnerInfoReducer } from "@store/setPartnerInfo/reducer";
import { setLoadingUIReducer } from "@store/setLoadingUI/reducer";

const rootReducer = combineReducers({
	searchName: combineReducers({
		selectedOption: searchNameSetSelectedOptionReducer,
		pokeData: searchNameGetPokeDataReducer,
		pokeSpecies: searchNameGetPokeSpeciesReducer
	}),
	searchType: combineReducers({
		switchState: setSwitchStateReducer,
		selectedOption: searchTypeSetSelectedOptionReducer,
		pokeData: searchTypeGetPokeDataReducer,
		pokeSpecies: searchTypeGetPokeSpeciesReducer,
		pokeTypeData: searchTypeGetPokeTypeDataReducer
	}),
	searchPartner: combineReducers({
		partnerInfo: setPartnerInfoReducer,
		pokeData: searchPartnerGetPokeDataReducer,
		pokeSpecies: searchPartnerGetPokeSpeciesReducer
	}),
	loadingUI: setLoadingUIReducer
});

export default rootReducer;

// rootReducerの返り値を型に持つAppStateを作る
export type AppState = ReturnType<typeof rootReducer>;
