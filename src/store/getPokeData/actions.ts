import { NormalizedPokeDataType } from "./reducers";
import * as types from "./types";

/** searchName */
export const searchNameFetchStarted = (no: number) =>
	({ type: types.SEARCH_NAME_STARTED, payload: { id: no } } as const);
export const searchNameFetchSuccess = (res: NormalizedPokeDataType) =>
	({ type: types.SEARCH_NAME_SUCCESS, payload: res } as const);
export const searchNameFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_NAME_FAILED, error: err.response } as const);

export type SearchNameActionTypes =
	| ReturnType<typeof searchNameFetchStarted>
	| ReturnType<typeof searchNameFetchSuccess>
	| ReturnType<typeof searchNameFetchFailed>;

/** searchType */
export const searchTypeFetchStarted = (no: number) =>
	({ type: types.SEARCH_TYPE_STARTED, payload: { id: no } } as const);
export const searchTypeFetchSuccess = (res: NormalizedPokeDataType) =>
	({ type: types.SEARCH_TYPE_SUCCESS, payload: res } as const);
export const searchTypeFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_TYPE_FAILED, error: err.response } as const);
export const searchTypeDataReset = () =>
	({ type: types.SEARCH_TYPE_RESET } as const);

export type SearchTypeActionTypes =
	| ReturnType<typeof searchTypeFetchStarted>
	| ReturnType<typeof searchTypeFetchSuccess>
	| ReturnType<typeof searchTypeFetchFailed>
	| ReturnType<typeof searchTypeDataReset>;

/** searchPartner */
export const searchPartnerFetchStarted = (no: number) =>
	({ type: types.SEARCH_PARTNER_STARTED, payload: { id: no } } as const);
export const searchPartnerFetchSuccess = (res: NormalizedPokeDataType) =>
	({ type: types.SEARCH_PARTNER_SUCCESS, payload: res } as const);
export const searchPartnerFetchFailed = (err: Record<string, unknown>) =>
	({ type: types.SEARCH_PARTNER_FAILED, error: err.response } as const);

export type SearchPartnerActionTypes =
	| ReturnType<typeof searchPartnerFetchStarted>
	| ReturnType<typeof searchPartnerFetchSuccess>
	| ReturnType<typeof searchPartnerFetchFailed>;
