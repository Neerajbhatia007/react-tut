const reducer = (state, action) => {
    switch (action.type) {
        case  "SET_LOADING":
            return {
                ...state,
                isLoading : true,
            };
        case "GET_STORIES":
            return {
                ...state,
                isLoading : false,
                hits : action.payload.hits,
                nbPages : action.payload.nbPages
            };
        case "SEARCH_QUERY":
            return {
                ...state,
                query : action.payload,

                // hits : action.payload.hits,
                // nbPages : action.payload.nbPages
            };
        case "NEXT_PAGE":
            let pagein = state.page + 1;
            if(pagein >= state.nbPages){
                pagein = 0
            }
            return {
                ...state,
                page : pagein,
            };
        case "PREV_PAGE":
            let pageNum = state.page - 1;
            if(pageNum <= 0){
                pageNum = 0;
            }
           
            return {
                ...state,
                page : pageNum,
            };
    }
    return state
};

export default reducer