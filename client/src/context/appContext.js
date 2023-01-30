import React, { useReducer, useContext} from 'react';
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
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  GRAB_USERS_BEGIN,
  GRAB_USERS_SUCCESS,
  GRAB_USERS_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_WORK_BEGIN,
  CREATE_WORK_SUCCESS,
  CREATE_WORK_ERROR,
  GET_WORKS_BEGIN,
  GET_WORKS_SUCCESS,
  GET_WORK_BEGIN,
  GET_WORK_SUCCESS,  
  SET_EDIT_WORK,
  EDIT_WORK_BEGIN,
  EDIT_WORK_SUCCESS,
  EDIT_WORK_ERROR,
  DELETE_WORK_BEGIN         
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
    allUsers: [],
    title: '',
    genre: '',
    content: '',
    contributions: 0,
    works: [],
    work: [],
    totalWorks: 0,
    isEditing: false,
    editWorkId: '',
}

const AppContext = React.createContext();


const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const authFetch = axios.create({
    baseURL: '/api/v1',
  })
  // request

  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  // response

  authFetch.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser()
      }
      return Promise.reject(error)
    }
  )  

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

  const fetchUsers = async () => {
    dispatch({type: GRAB_USERS_BEGIN})
    try {
      const {data} = await axios('/api/v1/auth/allUsers');
      const {allUsers} = data;
      dispatch({
        type: GRAB_USERS_SUCCESS,
        payload: {allUsers}
      });
    } catch (error) {
      dispatch({
        type: GRAB_USERS_ERROR,
        payload: {msg: error.response.data.msg}
      })
    }
  }
  
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR })
  }    

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER })
    removeUserFromLocalStorage()
  }

  const updateUser = async(currentUser) => {
    dispatch({type: UPDATE_USER_BEGIN})
    try {
        const {data} = await authFetch.patch('/auth/updateUser', currentUser);
        const {user, token} = data;
        dispatch({type: UPDATE_USER_SUCCESS, payload: {user, token}})
        addUserToLocalStorage({ user, token });
    } catch (error) {
        if (error.response.status !== 401) {
            dispatch({
              type: UPDATE_USER_ERROR,
              payload: { msg: error.response.data.msg },
            })
        }            
    }
    clearAlert();
  }

  const handleChange =({name, value}) =>{
    dispatch({
        type: HANDLE_CHANGE,
        payload: {name, value}
    });
  }

  const clearValues = () => {
      dispatch({type: CLEAR_VALUES})
  }

  const createWork = async () => {
      dispatch({ type: CREATE_WORK_BEGIN })
      try {
        const { title, genre, content, contributions} = state
        await authFetch.post('/works', {
          title,
          genre,
          content,
          contributions
        })
        dispatch({ type: CREATE_WORK_SUCCESS })
        dispatch({ type: CLEAR_VALUES })
      } catch (error) {
        if (error.response.status === 401) return
        dispatch({
          type: CREATE_WORK_ERROR,
          payload: { msg: error.response.data.msg },
        })
      }
      clearAlert()       
  }
  
  const getWorks = async() => {
    let url = `/works`;
    dispatch({type: GET_WORKS_BEGIN});
    try {
        const {data} = await authFetch(url);
        const {allWorks, totalWorks} = data;
        dispatch({
            type: GET_WORKS_SUCCESS,
            payload: {allWorks, totalWorks}
        })
    } catch (error) {
        logoutUser();
    }
    clearAlert();
  }

  const getWork = async (workId) => {
    dispatch({type: GET_WORK_BEGIN});
    try {
      const {data} = await authFetch(`/works/${workId}`);
      const {work} = data;
      console.log(work);
      dispatch({
        type: GET_WORK_SUCCESS,
        payload: {work}
      })
    } catch (error) {
        logoutUser();
    }
  }

    const setEditWork = (id) => {
        dispatch({type: SET_EDIT_WORK, payload: {id} });
    }

    const editWork = async () => {
        dispatch({ type: EDIT_WORK_BEGIN })

        try {
          const { title, genre, content, contributions} = state
          await authFetch.patch(`/works/${state.editWorkId}`, {
            title,
            genre,
            content,
            contributions
          })
          dispatch({ type: EDIT_WORK_SUCCESS })
          dispatch({ type: CLEAR_VALUES })
        } catch (error) {
          if (error.response.status === 401) return
          dispatch({
            type: EDIT_WORK_ERROR,
            payload: { msg: error.response.data.msg },
          })
        }
        clearAlert()
    }

    const deleteWork = async (workId) => {
        dispatch({ type: DELETE_WORK_BEGIN })
        try {
          await authFetch.delete(`/works/${workId}`)
          getWorks()
        } catch (error) {
          logoutUser()
        }
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
        updateUser,
        fetchUsers,
        handleChange,
        clearValues,
        createWork,
        getWorks,
        setEditWork,
        editWork,
        deleteWork,
        getWork,
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