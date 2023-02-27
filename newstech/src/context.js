import React, {createContext, useContext , useReducer, useEffect} from 'react'
import reducer from './reducer'

const API = "https://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading: true,
    query : "html",
    nbPages : 0,
    page : 0,
    hits : [],
}

const appContext = createContext()
const Appprovider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)


  const fetchApiData = async (url) => {
    dispatch({type : "SET_LOADING"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        //extra info share krne ke lia reducer func ko we use payload
        payload : {
            hits : data.hits,
            nbPages : data.nbPages,
        }
    })
    } catch (error) {
      console.log(error);
    }
  };

  //search
  const searchPost = (querysearch) => {
    dispatch({ type : "SEARCH_QUERY",
    payload : querysearch,
});

  }

  //pagination
  const getNextPage = () => {
    dispatch({
        type : "NEXT_PAGE"
    })
  }
  const getPrevPage = () => {
    dispatch({
        type : "PREV_PAGE"
    })
  }

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <appContext.Provider value={{...state, searchPost, getNextPage, getPrevPage}}>{children}</appContext.Provider>
  )
}

// use custom hook
const useGlobalContext = () => {
    return useContext(appContext)
}

export {Appprovider, appContext, useGlobalContext}