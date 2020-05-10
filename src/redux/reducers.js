import { ADD_FAVORITE, GET_FAVORITE, DELETE_FAVORITE, LOADED_FAV, LOADING_FAV, SET_STATUS, RESET_STATUS } from "./actionTypes"


const initialState = {
    favorites: [],
    loadingFavorites: false,
    foundDog:null
};
export const dogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {...state, favorites:[...state.favorites,action.payload]}
        case DELETE_FAVORITE:
            return {...state,favorites: state.favorites.filter((dog) => dog.id !== action.payload)}
        case GET_FAVORITE:
            return {...state, favorites: action.payload}
        default:
            return state
    }
}

export const statusReducer = (state = { loadingId: '', loadingFavorites: false }, action) => {
    switch (action.type) {
        case SET_STATUS:
            return { ...state, loadingId: action.payload }
        case RESET_STATUS:
            return { ...state, loadingId: '', loadingFavorites: false }
        case LOADING_FAV:
            return { ...state, loadingFavorites: true }
        case LOADED_FAV:
            return { ...state, loadingFavorites: false }
        default:
            return state
    }
}