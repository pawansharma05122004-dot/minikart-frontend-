import { ADD_TO_CART } from '../constant'

const initalState = {
    cardData: []
}

export default function cardItems(state = initalState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: action.data
            }
        default:
            return state
    }

}