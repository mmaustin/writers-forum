import React, { useReducer, useContext } from 'react';

const testState = {
    number: 23,
    array: [5,9,2,4,7],
    object: {name: 'McCray', stats: [6.2, 180, 'fine']}
}

const AppContext = React.createContext();

const ADD_TO_ARRAY ='ADD_TO_ARRAY';


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, testState)

    const arrayChange = (a) => {
        dispatch({type: ADD_TO_ARRAY, payload: a})
    }

    return(
        <AppContext.Provider
        value={{
          ...state,
          arrayChange,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }

  const reducer = (state,action)=>{
    if(action.type === ADD_TO_ARRAY){
        return{
            ...state,
            array: [...state.array, action.payload],
        }
    }
}  
  
  const useAppContext = () => {
    return useContext(AppContext)
  }
  
  export { AppProvider, useAppContext }        