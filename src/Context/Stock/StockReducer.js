import { SEARCH_STOCKS, GET_STOCK, CLEAR_STOCKS } from "../types";

const StockReducer = (state,action) => {
    switch(action.type) {
        case SEARCH_STOCKS:
            return {
                ...state,
                stocks:action.payload
            }
        case GET_STOCK:
            return {
                ...state,
                stock:action.payload
            }
        case CLEAR_STOCKS:
            return {
                ...state,
                stocks:[]
            }
        default:
            return {
                ...state,
            }
    }
  
}

export default StockReducer
