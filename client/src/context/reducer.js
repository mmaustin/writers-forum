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
    SET_EDIT_EVENT,                     
} from './actions';

import {initialState} from './appContext';

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
          ...state,
          showAlert: true,
          alertType: 'danger',
          alertText: 'Please provide all values!',
        }
    }

    if (action.type === CLEAR_ALERT) {
        return {
          ...state,
          showAlert: false,
          alertType: '',
          alertText: '',
        }
    }

    if(action.type === REGISTER_USER_BEGIN){
      return {...state, isLoading: true};
    }
    if(action.type === REGISTER_USER_SUCCESS){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        user: action.payload.user,
        token: action.payload.token,
        alertType: 'success',
        alertText: 'User Created, redirecting . . . '
      }
    }
    if(action.type === REGISTER_USER_ERROR){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertText: action.payload.msg
      };
    }
    if(action.type === LOGIN_USER_BEGIN){
      return {...state, isLoading: true};
    }
    if(action.type === LOGIN_USER_SUCCESS){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        user: action.payload.user,
        token: action.payload.token,
        alertType: 'success',
        alertText: 'User logged in, redirecting . . . '
      }
    }
    if(action.type === LOGIN_USER_ERROR){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg
      };
    }
    if (action.type === TOGGLE_SIDEBAR) {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      }
    }      
    
    if(action.type === LOGOUT_USER){
      return {...initialState, user: null, token: null}
    }

    if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true }
    }
    if (action.type === UPDATE_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        showAlert: true,
        alertType: 'success',
        alertText: 'User Profile Updated!',
      }
    }
    if (action.type === UPDATE_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
    
    if(action.type === GRAB_USERS_BEGIN){
      return {...state, isLoading: true};
    }
    if(action.type === GRAB_USERS_SUCCESS){
      return {
        ...state,
        isLoading: false,
        allUsers: action.payload.allUsers
      }
    }
    if(action.type === GRAB_USERS_ERROR){
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg
      };
    }
    if (action.type === HANDLE_CHANGE) {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    }
    
    if (action.type === CLEAR_VALUES) {
      const initialState = {
        isEditing: false,
        title: '',
        genre: '',
        content: '',
        contributions: 0,
      }
  
      return {
        ...state,
        ...initialState,
      }
    }
    
    if (action.type === CREATE_WORK_BEGIN) {
      return { ...state, isLoading: true }
    }    

    if (action.type === CREATE_WORK_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Work Created!',
      }
    }
    if (action.type === CREATE_WORK_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
    if (action.type === GET_WORKS_BEGIN) {
      return { ...state, isLoading: true, showAlert: false }
    }
    if (action.type === GET_WORKS_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        works: action.payload.allWorks,
        totalWorks: action.payload.totalWorks,
      }
    }
    
    if (action.type === SET_EDIT_EVENT) {
      const work = state.works.find((work) => work._id === action.payload.id)
      const { _id, title, genre, content, contributions } = work
      return {
        ...state,
        isEditing: true,
        editEventId: _id,
        title,
        genre,
        content,
        contributions
      }
    }

    if (action.type === DELETE_WORK_BEGIN) {
      return { ...state, isLoading: true }
    }

    if (action.type === EDIT_WORK_BEGIN) {
      return {
        ...state,
        isLoading: true,
      }
    }
    if (action.type === EDIT_WORK_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Work Updated!',
      }
    }
    if (action.type === EDIT_WORK_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }     

    throw new Error(`no such action: ${action.type}`);
}

export default reducer;