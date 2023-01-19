import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';

import { 
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,  
} from './actions';

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    token: null,
}

const AppContext = React.createContext();


const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({type: DISPLAY_ALERT});
    clearAlert();
  }

  const clearAlert = () => {
    setTimeout(()=> {
      dispatch({type: CLEAR_ALERT})
    }, 3000);
  }

  const registerUser = async (currentUser) => {
    dispatch({type: REGISTER_USER_BEGIN});
    try {
        const {data} = await axios.post('/api/v1/auth/register', currentUser)
        const {user, token} = data;
        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: {user, token}
        });
        //addUserToLocalStorage({ user, token })           
    } catch (error) {
        dispatch({
            type: REGISTER_USER_ERROR,
            payload: {msg: error.response.data.msg}
        });
    }
  clearAlert();
  }


  return(
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
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