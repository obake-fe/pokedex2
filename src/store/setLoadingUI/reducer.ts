import * as types from "./types";
import * as actions from "./actions";

export type SetLoadingUIType = {
	state: boolean;
};

const initialState = {
	state: false
};

export const setLoadingUIReducer = (
	state = initialState,
	action: actions.ActionTypes
): SetLoadingUIType => {
	switch (action.type) {
		case types.SET_LOADING_UI:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};
