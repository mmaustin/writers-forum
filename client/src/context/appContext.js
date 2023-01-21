import React, { useReducer, useContext } from 'react';
import reducer from './reducer';
import axios from 'axios';

import { 
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,      
} from './actions';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token,
}

const AppContext = React.createContext();


const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('token', token)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }  

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
        addUserToLocalStorage({ user, token })           
    } catch (error) {
        dispatch({
            type: REGISTER_USER_ERROR,
            payload: {msg: error.response.data.msg}
        });
    }
  clearAlert();
  }

  const loginUser = async (currentUser) => {
    dispatch({type: LOGIN_USER_BEGIN});
    try {
        const {data} = await axios.post('/api/v1/auth/login', currentUser)
        const {user, token} = data;
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: {user, token}
        });
        addUserToLocalStorage({ user, token })            
    } catch (error) {
        dispatch({
            type: LOGIN_USER_ERROR,
            payload: {msg: error.response.data.msg}
        });
    }
    clearAlert();
  }
  
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }    

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }


  return(
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
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