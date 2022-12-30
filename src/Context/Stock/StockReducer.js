import { SEARCH_STOCKS, GET_PROFILE, CLEAR_STOCKS, SET_LOADING, GET_COMPANY_NEWS, CLEAR_PROFILE} from "../types";

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
        case GET_COMPANY_NEWS:
            return {
                ...state,
                companyNews:action.payload,
                loading:false
            }
        case CLEAR_STOCKS:
            return {
                ...state,
                stocks:[]
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile:{}
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
