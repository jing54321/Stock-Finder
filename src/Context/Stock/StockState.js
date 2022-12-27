import StockContext from "./StockContext";
import StockReducer from "./StockReducer";
import { useReducer } from "react";
import { SEARCH_STOCKS, CLEAR_STOCKS, GET_PROFILE, SET_LOADING } from "../types";

const StockState = props => {
    const initialState = {
        stocks : [],
        profile : {},
        loading : false
    }

    const [state, dispatch] = useReducer(StockReducer,initialState);

    // Get Stock List
    const searchStocks = text => {
        setLoading();
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
    const getProfile = ticker => {
        setLoading();
        const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=c2a3bjiad3i83r33r7fg`;

        fetch(url,{
            method:'GET',
            headers: {"Content-Type":"application/x-www-form-urlencoded"}
        })
        .then(res => res.text())
        .then(res => {
            let obj = JSON.parse(res)
            dispatch({type:GET_PROFILE, payload:obj})
        })
    }

    const clearUser = () => dispatch({type:CLEAR_STOCKS});

    const setLoading = () => dispatch({type:SET_LOADING});

    return <StockContext.Provider value={{
        stocks:state.stocks,
        profile:state.profile,
        loading:state.loading,
        searchStocks,
        clearUser,
        getProfile,
        
    }}>
    {props.children}
    </StockContext.Provider>
}

export default StockState
