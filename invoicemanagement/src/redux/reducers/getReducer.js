const initialState = {
    
    dateDetail: [],
    
   
}

export const getReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'FETCH_USERS_SUCCESS' :
            return {
                
                dateDetail:action.payload,
                
            } 
        
        default:
            return state        

        }
    }
