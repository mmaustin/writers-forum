import React, { useReducer, useContext } from 'react';

const testState = {
    number: 0,
    array: [],
}

const AppContext = React.createContext();

const ADD_TO_ARRAY ='ADD_TO_ARRAY';
const ADD_TO_NUMBER ='ADD_TO_NUMBER';
const CLEAR_NUMBER ='CLEAR_NUMBER';


const reducer = (state,action)=>{
    if(action.type === ADD_TO_ARRAY){
        return{
            ...state,
            array: [...state.array, action.payload],
        }
    }
    if(action.type === ADD_TO_NUMBER){
        return{
            ...state,
            number: state.number === 0 ? state.number + action.payload : state.number * action.payload,
        }
    }
    if(action.type === CLEAR_NUMBER){
        return{
            ...state,
            number: state.number = 0,
        }
    }
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, testState)

    const arrayChange = addition => {
        dispatch({type: ADD_TO_ARRAY, payload: addition})
    }

    const numberChange = num => {
        dispatch({type: ADD_TO_NUMBER, payload: num})
    }

    const clearNumber = () => {
        dispatch({type: CLEAR_NUMBER})
    }

    return(
        <AppContext.Provider
        value={{
          ...state,
          arrayChange,
          numberChange,
          clearNumber
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }

  
  const useAppContext = () => {
    return useContext(AppContext)
  }
  
  export { AppProvider, useAppContext }        