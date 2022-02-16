import { bindActionCreators } from "redux"
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions"

const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        default:
            return state
    }

}

export default reducer