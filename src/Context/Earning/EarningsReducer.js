
import { GET_EARNINGS,CLEAR_EARNING,SET_LOADING } from '../types';

const EarningsReducer = (state,action) => {
  switch(action.type) {
    case GET_EARNINGS:
        return {
            ...state,
            companyEarning:action.payload,
            loading:false
        }
    case CLEAR_EARNING:
        return {
            ...state,
            companyEarning:[]
        }
    case SET_LOADING:
        return {
            state,
            loading:true
        }
    default:
        return {
            ...state
        }
    
  }
}

export default EarningsReducer


