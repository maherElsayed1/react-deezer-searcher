import { ActionType } from "../action-types";

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SEARCH_REQUEST:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default searchReducer;
