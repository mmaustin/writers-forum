import React, { useReducer, useContext } from 'react';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
}

const AppContext = React.createContext();


const reducer = (state,action)=>{

}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <AppContext.Provider
        value={{
          ...state,
        }}
      >
        {children}
      </AppContext.Provider>
    )
  }

  
  const useAppContext = () => {
    return useContext(AppContext)
  }
  
  export { AppProvider, useAppContext, initialState }        