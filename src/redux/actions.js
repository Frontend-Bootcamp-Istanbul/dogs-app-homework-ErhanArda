import { ADD_FAVORITE, GET_FAVORITE, DELETE_FAVORITE, LOADED_FAV, LOADING_FAV, SET_STATUS, RESET_STATUS } from "./actionTypes"
import axios from "axios";

const apiHost = "https://5ea56a222d86f00016b45ccd.mockapi.io"



export const getFavorite = () => {
    return dispatch => {
        dispatch({
            type: LOADING_FAV,
        })

        axios.get(`${apiHost}/favorites`).then((result) => {
            dispatch({
                type: GET_FAVORITE,
                payload: result.data
            })
        })
        dispatch(
            {
                type: LOADED_FAV,
            }
        )
    }
}
export const addFavorite = (dogId) => {
    return dispatch => {
        dispatch({
            type: SET_STATUS,
            payload: dogId
        }
        )

        axios.post(`${apiHost}/favorites`, { dogId }).then((result) => {
            const addedFavorite = result.data
            dispatch({
                type: ADD_FAVORITE,
                payload: addedFavorite
            })

            dispatch({
                type: RESET_STATUS,
                payload: dogId
            })
        }
        )
    }
}
export const deleteFavorite = (id, dogId) => {
    return dispatch => {
        dispatch({
            type: SET_STATUS,
            payload: dogId
        }
        )
        
        axios.delete(`${apiHost}/favorites/${id}`).then((result) => {
            dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
        })
        dispatch({
            type: RESET_STATUS,
            payload: dogId
        })
    }
}

export const showStatus = (dogId) => {
    return {
        type: SET_STATUS,
        payload: dogId
    }
}