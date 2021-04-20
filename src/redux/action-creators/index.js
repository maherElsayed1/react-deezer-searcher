import axios from "axios";
import { ActionType } from "../action-types";

export const searchDeezer = (query, cancel) => {
    return async (dispatch) => {
        dispatch(searchRequest());
        try {
            const { data } = await axios.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/", {
                cancelToken: cancel,
                params: {
                    q: query,
                },
            });
            console.log(data.data);
            dispatch(searchSuccess(data.data));
        } catch (error) {
            dispatch(searchError(error.message));
        }
    };
};

export const searchRequest = () => {
    return {
        type: ActionType.SEARCH_REQUEST,
    };
};

export const searchSuccess = (data) => {
    return {
        type: ActionType.SEARCH_SUCCESS,
        payload: data,
    };
};

export const searchError = (error) => {
    return {
        type: ActionType.SEARCH_ERROR,
        payload: error,
    };
};
