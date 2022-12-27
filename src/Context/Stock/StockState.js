import StockContext from "./StockContext";
import StockReducer from "./StockReducer";
import { useReducer } from "react";
import { SEARCH_STOCKS, CLEAR_STOCKS } from "../types";

const StockState = props => {
    const initialState = {
        stocks : [],
        stock : {}
    }

    const [state, dispatch] = useReducer(StockReducer,initialState);

    // Get Stock List
    const searchStocks = text => {

        const url = `https://finnhub.io/api/v1/search?q=${text}&token=c2a3bjiad3i83r33r7fg`;

        fetch(url,{
            method:'GET',
            headers: {"Content-Type":"application/x-www-form-urlencoded"}
        })
        .then(res => res.text())
        .then(res => {
            let arr = JSON.parse(res).result;
            arr = arr.map((a,index) => {return { 'id':index,...a}});
            dispatch({type:SEARCH_STOCKS, payload:arr})
        })
    }

    const clearUser = () => dispatch({type:CLEAR_STOCKS});

    return <StockContext.Provider value={{
        stocks:state.stocks,
        stock:state.stock,
        searchStocks,
        clearUser
    }}>
    {props.children}
    </StockContext.Provider>
}

export default StockState
