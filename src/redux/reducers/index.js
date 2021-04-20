import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import albumsReducer from "./albumsReducer";

const reducers = combineReducers({
    search: searchReducer,
    albums: albumsReducer,
});

export default reducers;
