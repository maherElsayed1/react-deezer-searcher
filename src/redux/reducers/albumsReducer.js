import { ActionType } from "../action-types";

const initialState = {
    albumsLoading: false,
    albumsError: null,
    albums: [],
};

const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_ALBUMS_REQUEST:
            return { albumsLoading: true, albumsError: null, albums: [] };
        case ActionType.GET_ALBUMS_SUCCESS:
            return { albumsLoading: false, albumsError: null, albums: action.payload };
        case ActionType.GET_ALBUMS_ERROR:
            return { albumsLoading: false, albumsError: action.payload, albums: [] };
        default:
            return state;
    }
};

export default albumsReducer;
