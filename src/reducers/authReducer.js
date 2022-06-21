import {
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOAD_USERS
  } from "../actions/types";
  
  
  const initialState = {
    isAuthenticated: null,
    isLoggedIn: null,
    user: null,
    users: null
  };
  
  export default function (state = initialState, action) {
    console.log("CGI Reducer", action.payload);
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload
        };
  
      case LOGIN_SUCCESS:
      case AUTH_SUCCESS:
        return {
          ...state,
          isAuthenticated: action.payload.role == 'admin' ? true : false,
          isLoggedIn: true,
          user: action.payload
        };
  
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
      case AUTH_FAIL:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          isLoggedIn: false
        }
      case LOAD_USERS:
        return {
          ...state,
          users: action.payload
        };    
      default:
          return state;
    }
  
  }