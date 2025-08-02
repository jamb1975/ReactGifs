

export const todoReducer = (initialState = [], action= {}) => {

    switch( action.type) {
        case 'Add todo': 
          
            return [ ...initialState, action.payload];
        case 'Remove todo':
            return initialState.filter(t => t.id != action.payload) 
        case 'Toggle todo': 
         {
            const newState = initialState.map(t => {
                 console.log('id todo=>',t.id);
                if(t.id === action.payload){
                    
                    return  {
                        ...t,
                        done: !t.done
                     }

                    }
                return t;
                
            });
            console.log("Toggle=>",newState)
            return newState 
        }
        default:  
            return initialState;
    }

}