import { Dispatch } from "react";
import { ActionTypes, setLoadingUI } from "./actions";

export const setLoadingUIDispatcher = (dispatch: Dispatch<ActionTypes>) => (
	state: boolean
): void => {
	dispatch(setLoadingUI(state));
};
