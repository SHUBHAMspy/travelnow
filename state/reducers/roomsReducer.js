import { ALL_ROOMS_FAIL, ALL_ROOMS_SUCCESS, CLEAR_ERRORS } from "../types/roomAtionTypes";

export const allRoomsReducer = (state = {rooms: []} ,action) => {
  switch (action.type) {
    case ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms,

      }
    case ALL_ROOMS_FAIL:
    

    case CLEAR_ERRORS:
      return{
        ...state,
        error: null
      }
      
  
    default:
      return state;
  }

}