import { combineReducers } from "redux";
import { dataReducer } from "./dataReducers";
import { allRoomsReducer } from "./roomsReducer";

export const reducers = combineReducers({
    data: dataReducer,
    allRooms: allRoomsReducer

})