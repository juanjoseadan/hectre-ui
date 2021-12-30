import HttpClient from "../../HttpClient";
import ChemicalActionTypes from "../constants/chemicalTypes";

export const getChemicalsRequest = () => {
	return {
		type: ChemicalActionTypes.GET_CHEMICALS_REQUEST,
	};
};

export const getChemicals = (limit: number = 10, offset: number = 0) => {
	return (dispatch: any) => {
		dispatch(getChemicalsRequest());

		const getChemicalsAsync = async () => {
			try {
				const url = `api/v1/chemicals?limit=${limit}&offset=${offset}`;
				const result = await HttpClient.get(url);

				dispatch({
					type: ChemicalActionTypes.GET_CHEMICALS_SUCCESS,
					payload: result,
				});
			} catch (error) {
				dispatch({
					type: ChemicalActionTypes.GET_CHEMICALS_FAIL,
					payload: error,
				});
			}
		};

		return getChemicalsAsync();
	};
};

export const createChemicalRequest = () => {
	return {
		type: ChemicalActionTypes.CREATE_CHEMICAL_REQUEST,
	};
};

export const createChemical = (request: any) => {
	return (dispatch: any) => {
		dispatch(createChemicalRequest());

		const createChemicalAsync = async () => {
			try	{
				const url = `http://localhost:5000/api/v1/chemicals`;
				const result = await HttpClient.post(url, request);

				dispatch({
					type: ChemicalActionTypes.CREATE_CHEMICAL_SUCCESS,
					payload: result,
				});
			} catch (error) {
				dispatch({
					type: ChemicalActionTypes.CREATE_CHEMICAL_FAIL,
					payload: error,
				});
			}
		};

		return createChemicalAsync();
	};
};

export const changePageSize = (pageSize: number) => {
	return {
		type: ChemicalActionTypes.CHANGE_PAGE_SIZE,
		payload: pageSize,
	};
};