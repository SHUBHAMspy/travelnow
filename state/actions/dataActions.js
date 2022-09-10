import { DECREASE_ADULTS, DECREASE_CHILDREN, DECREASE_INFANTS, INCREASE_ADULTS, INCREASE_CHILDREN, INCREASE_INFANTS, RESET_CATEGORY, RESET_GUESTS, SET_CATEGORY, SET_GUESTS, SET_LOCATION } from "../types/dataActionTypes"

export const typeLocation = (location) => {
	return {
			type: SET_LOCATION,
			payload: location
	}
}

export const chooseCategory = (category) => {
	return {
			type: SET_CATEGORY,
			payload: category
	}
}

/* export const choosenKing = () => {
	return {
			type: CHOOSEN_KING,
			payload: 'King'
	}
}

export const choosenQueen = () => {
	return {
			type: CHOOSEN_QUEEN,
			payload: 'Queen'
	}
}
export const choosenTwin = () => {
	return {
			type: CHOOSEN_TWIN,
			payload: 'Twin'
	}
} */



export const selectGuests = (location) => {
	return {
			type: SET_GUESTS,
			payload: location
	}
}

export const increaseAdults = () => {
	return {
			type: INCREASE_ADULTS,
	}
}

export const increaseChildren = () => {
    return {
        type: INCREASE_CHILDREN,
    }
}

export const increaseInfants = () => {
    return {
        type: INCREASE_INFANTS,
    }
}

export const decreaseAdults = () => {
    return {
        type: DECREASE_ADULTS,
    }
}

export const decreaseChildren = () => {
    return {
        type: DECREASE_CHILDREN,
    }
}

export const decreaseInfants = () => {
    return {
        type: DECREASE_INFANTS,
    }
}

export const resetGuests = () => {
    return {
        type: RESET_GUESTS,
    }
}

export const resetCategory = () => {
    return {
        type: RESET_CATEGORY,
    }
}