import { DECREASE_ADULTS, DECREASE_CHILDREN, DECREASE_INFANTS, INCREASE_ADULTS, INCREASE_CHILDREN, INCREASE_INFANTS, RESET_CATEGORY, RESET_GUESTS, SET_CATEGORY, SET_GUESTS, SET_LOCATION } from "../types/dataActionTypes";

const initialState = {
	location: '',
	category: '',
	guests: {adults:0,children:0,infants:0},
		
}
export const dataReducer = (state = initialState,action) => {
	const { adults, children, infants } = state.guests;
	switch (action.type) {
		case SET_LOCATION:
			return {
					...state,
					location:action.payload
			}

		case SET_CATEGORY:
			return {
				...state,
				category:action.payload
			}
		case RESET_CATEGORY:
			return { 
				...state, 
				category: initialState.category 
			}; 

		case SET_GUESTS:
			return {
				...state,
				guests:action.payload
			}
		
		case RESET_GUESTS:
			return { 
				...state, 
				guests: initialState.guests 
			}; 
		
		case INCREASE_ADULTS:
			if(adults >= 10) return state;
			return {
				...state,
				guests:{
					...state.guests,
					adults:adults + 1
				}
			}    
		
		case INCREASE_CHILDREN:
			if(children >= 5) return state;
			if (adults <= 0) {
				return {
					...state,
					guests:{
						...state.guests,
						adults:adults + 1,                   
						children:children + 1
					}
				}
			}
			return {
				...state,
				guests:{
					...state.guests,
					children:children + 1
				}
			}
		case INCREASE_INFANTS:
			if(infants >= 5) return state;
			if (adults <= 0) {
				return {
					...state,
					guests:{
						...state.guests,
						adults:adults + 1,                   
						infants:infants + 1
					}
				}
			}
			return {
				...state,
				guests:{
					...state.guests,
					infants:infants + 1
				}
			} 
		case DECREASE_ADULTS:
			if (adults <= 0) return state;
			if (adults <= 1 && (children >= 1 || infants >= 1)) return state;
			
			return{
				...state,
				guests:{
					...state.guests,
					adults:adults - 1
				}
			}

		case DECREASE_CHILDREN:
			if (children <= 0) return state;
			
			return{
				...state,
				guests:{
					...state.guests,
					children:children - 1
				}
			} 
				
		case DECREASE_INFANTS:
			if (infants <= 0) return state;
			
			return{
				...state,
				guests:{
					...state.guests,
					infants:infants - 1
				}
			}    
		default:
			return state;
	}
}




