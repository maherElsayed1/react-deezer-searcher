import axios from "axios";
import { ActionType } from "../action-types";

export const getAlbums = (artist) => {
    return async (dispatch) => {
        dispatch(getAlbumsRequest());
        try {
            const { data } = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artist}/albums`);
            console.log("albums =>", data.data);
            dispatch(getAlbumsSuccess(data.data));
        } catch (error) {
            dispatch(getAlbumsError(error.message));
        }
    };
};

export const getAlbumsRequest = () => {
    return {
        type: ActionType.GET_ALBUMS_REQUEST,
    };
};

export const getAlbumsSuccess = (data) => {
    return {
        type: ActionType.GET_ALBUMS_SUCCESS,
        payload: data,
    };
};

export const getAlbumsError = (error) => {
    return {
        type: ActionType.GET_ALBUMS_ERROR,
        payload: error,
    };
};
