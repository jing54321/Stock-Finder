import { SHOW_RESULT,REMOVE_RESULT} from "../types";

const ResultReducer = (state,action) => {
    switch(action.type) {
        case SHOW_RESULT:
            return {
                ...state,
                result:action.payload
            }
        case REMOVE_RESULT:
            return {
                ...state,
                result:null
            }
        default:
            return {
                ...state,
            }
    }
  
}

export default ResultReducer
