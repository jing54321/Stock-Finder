import ResultContext from "./ResultContext";
import ResultReducer from "./ResultReducer";
import { useReducer } from "react";
import {SHOW_RESULT,REMOVE_RESULT} from "../types";

const ResultState = props => {
    const initialState = {
        result : null
    }

    const [state, dispatch] = useReducer(ResultReducer,initialState);

    
    const showResult = (msg, type) => {
        dispatch({type:SHOW_RESULT, payload:{msg,type}})
        setTimeout(() =>{removeResult()},3000)
    }

    const removeResult = () => dispatch({type:REMOVE_RESULT});

    return <ResultContext.Provider value={{
        
        result:state.result,
        showResult,
        removeResult
    }}>
    {props.children}
    </ResultContext.Provider>
}

export default ResultState
