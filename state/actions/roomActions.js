import axios from "axios";
import absoluteUrl from "next-absolute-url";
import { formatGuests } from "../../utils/guestUtils";
import { ALL_ROOMS_FAIL, ALL_ROOMS_SUCCESS } from "../types/roomAtionTypes";

export const getRooms = (req,location = '',category,guests,currentPage = 1) => async(dispatch) => {
  
  try {
    const {origin} = absoluteUrl(req);

    let link = `${origin}/api/?page=${currentPage}&location=${location}`;
    if(category) link = link.concat(`&category=${category}`) ;
    if(guests) {
      const noOfGuests = formatGuests(JSON.parse(guests.toString()),{noInfants:true},true)
      console.log(noOfGuests);
      link = link.concat(`&guests=${noOfGuests}`) ;
    }
    
    console.log(link);
    let {data} = await axios.get(link);
    console.log(data);
  
    dispatch({
      type:ALL_ROOMS_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    dispatch({
      type:ALL_ROOMS_FAIL,
      payload: error.response.data.message
    })
    
  }
}

  
