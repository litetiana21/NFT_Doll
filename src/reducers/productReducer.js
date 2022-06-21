import {
    FETCH_PRODUCTS_BEGIN,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    CREATE_PRODUCT_BEGIN,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    SAVE_PRODUCT_BEGIN,
    SAVE_PRODUCT_SUCCESS,
    SAVE_PRODUCT_FAILURE,
    REMOVE_PRODUCT_BEGIN,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAILURE,
    ADD_CART,
    NOTHING,
    REMOVE_CART,
    INCREMENT, 
    DECREMENT,
    CLEAR_CART

  } from '../actions/productActions';
  
  import React from 'react';
  import { Redirect } from 'react-router'

  const initialState = {
    products: [],
    loading: false,
    error: null,
    cart: [],
    id: 0,
  };
  
  export default function productReducer(state = initialState, action) {
    
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };

      case FETCH_PRODUCTS_SUCCESS: 
      return {
          ...state,
          cart: [],
          loading: false,
          products: action.payload.products
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
          
        };

      case SAVE_PRODUCT_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };

      case SAVE_PRODUCT_SUCCESS: 
      return {
          ...state,
          cart: [],
          loading: false,
          products: action.payload.products
        };
  
      case SAVE_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
          
        };
  
        case CREATE_PRODUCT_BEGIN:
          return {
            ...state,
            loading: true,
            error: null
          };
  
        case CREATE_PRODUCT_SUCCESS: 
        return {
            ...state,
            cart: [],
            loading: false,
            products: action.payload.products
          };
    
        case CREATE_PRODUCT_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload.error
            
          };
  
        case REMOVE_PRODUCT_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };

      case REMOVE_PRODUCT_SUCCESS: 
        return {
          ...state,
          cart: [],
          loading: false,
          products: action.payload.products,
        };
  
        // case REMOVE_PRODUCT_SUCCESS: 
        // return <Redirect to='/'/>;

        case REMOVE_PRODUCT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
          
        };
        case NOTHING:
        return {
          ...state,
          loading: false,
          error:null
        };
      case ADD_CART:
      if(state.products.find(product => product.id === action.id).inCart === false){
      state.products.find(product => product.id === action.id).inCart = true;
      state.cart.push(state.products.find(product => product.id === action.id));
      }
      
      return {
        ...state,
        loading: false,
        error: null
      };
      case REMOVE_CART:
      state.products.find(product => product.id === action.id).inCart = false;
      state.products.find(product => product.id === action.id).count = 0;
      state.products.find(product => product.id === action.id).total = 0;
      const newCart = state.cart.filter(function(product){
        return product.id != action.id;
    });
      return {
        ...state,
        cart: newCart,
        loading: false,
        error:null
      };
      case INCREMENT:
      state.cart.find(product => product.id === action.id).count +=1;
      state.cart.find(product => product.id === action.id).total += state.cart.find(product => product.id === action.id).price;
      return {
        ...state,
        loading: false,
        error:null
      };
      case DECREMENT:
      state.cart.find(product => product.id === action.id).count --;
      state.cart.find(product => product.id === action.id).total -= state.cart.find(product => product.id === action.id).price;
      if(state.cart.find(product => product.id === action.id).total<0){
        state.cart.find(product => product.id === action.id).total =0;
      }
      if(state.cart.find(product => product.id === action.id).count<0){
        state.cart.find(product => product.id === action.id).count =0;
      }
      return {
        ...state,
        loading: false,
        error:null
      };
      case CLEAR_CART:
      for(var p of state.cart){
        state.products.find(product => product.id === p.id).count =0;  
        state.products.find(product => product.id === p.id).total =0;
        state.products.find(product => product.id === p.id).inCart = false;    
      }
      
      return {
        ...state,
        cart: [],
        loading: false,
        error:null
      };
      default:

        return state;
    }
  }