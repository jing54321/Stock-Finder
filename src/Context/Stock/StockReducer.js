import { SEARCH_STOCKS, GET_PROFILE, CLEAR_STOCKS, SET_LOADING } from "../types";

const StockReducer = (state,action) => {
    switch(action.type) {
        case SEARCH_STOCKS:
            return {
                ...state,
                stocks:action.payload,
                loading:false
            }
        case GET_PROFILE:
            return {
                ...state,
                profile:action.payload,
                loading:false
            }
        case CLEAR_STOCKS:
            return {
                ...state,
                stocks:[]
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return {
                ...state,
            }
    }
  
}

export default StockReducer
