import { Reducer } from "redux";
import { Chemical } from "../../models/chemical";
import { Link } from "../../models/link";
import ChemicalActionTypes from "../constants/chemicalTypes";

type ActionType = {
	type: string;
	payload: any;
};

type ChemicalsState = {
	isLoading: boolean;
	error: any;
	chemicals: Chemical[];
	count: number;
	total: number;
	links: Link[];
	limit: number;
	offset: number;
};

const initialState: ChemicalsState = {
	isLoading: false,
	error: null,
	chemicals: [],
	count: 0,
	total: 0,
	links: [],
	limit: 10,
	offset: 0,
};

export const chemicalsReducer: Reducer<ChemicalsState, ActionType> = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case ChemicalActionTypes.GET_CHEMICALS_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case ChemicalActionTypes.GET_CHEMICALS_SUCCESS:
			return {
				...state,
				isLoading: false,
				error: null,
				chemicals: action.payload.chemicals,
				count: action.payload.count,
				total: action.payload.total,
				links: action.payload.links,
			};
		case ChemicalActionTypes.GET_CHEMICALS_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
				chemicals: [],
			};

		case ChemicalActionTypes.CREATE_CHEMICAL_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case ChemicalActionTypes.CREATE_CHEMICAL_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case ChemicalActionTypes.CREATE_CHEMICAL_FAIL:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case ChemicalActionTypes.SET_PAGINATION:
			return {
				...state,
				limit: action.payload.limit,
				offset: action.payload.offset,
			}
		default:
			return state;
	}
};