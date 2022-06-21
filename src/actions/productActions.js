import axios from 'axios'
// import {storeProducts} from '../data'
import {storeProducts} from '../testData'
import { storePoints } from '../testDataPoints';


export const FETCH_PRODUCTS_BEGIN   = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';


export const ADD_CART = 'ADD_CART'
export const NOTHING = 'NOTHING'
export const REMOVE_CART = 'REMOVE_CART'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CLEAR_CART = 'CLEAR_CART'

// begin by CGI
export const CREATE_PRODUCT_BEGIN = 'CREATE_PRODUCT_BEGIN'
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS'
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE'

export const SAVE_PRODUCT_BEGIN = 'SAVE_PRODUCT_BEGIN'
export const SAVE_PRODUCT_SUCCESS = 'SAVE_PRODUCT_SUCCESS'
export const SAVE_PRODUCT_FAILURE = 'SAVE_PRODUCT_FAILURE'

export const REMOVE_PRODUCT_BEGIN = 'REMOVE_PRODUCT_BEGIN'
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS'
export const REMOVE_PRODUCT_FAILURE = 'REMOVE_PRODUCT_FAILURE'
// export const REMOVE_PRODUCT_REDIRECT = 'REMOVE_PRODUCT_REDIRECT'

// end by CGI

const serverURL = "http://localhost:8000/api";


export function fetchProducts() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return axios.get(serverURL + "/product")
        .then(res => res.data)
        .then(data => {
          console.log("CGI Action", data);
          dispatch(fetchProductsSuccess(data));
          return data;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  export function createProduct(productData) {
    productData.count = parseInt(productData.count);
    productData.price = parseInt(productData.price);
    console.log("CGI createProduct action", productData);
    return dispatch => {
      dispatch(fetchCreateProductsBegin());
      return axios.post(serverURL + "/product", productData)
        .then(res => res.data)
        .then(data => {
          console.log("CGI CreateProduct success", data);
          dispatch(fetchCreateProductsSuccess(data));
          return data;
        })
        .catch(error => dispatch(fetchCreateProductsFailure(error)));
    };
  }

  export function saveProduct(id, productData) {
    console.log("CGI saveProduct action", id, productData);
    return dispatch => {
      dispatch(fetchSaveProductsBegin());
      return axios.put(serverURL + "/product/" + id, productData)
        .then(res => res.data)
        .then(data => {
          console.log("CGI saveProduct success", data);
          dispatch(fetchSaveProductsSuccess(data));
          return data;
        })
        .catch(error => dispatch(fetchSaveProductsFailure(error)));
    };
  }

  export function removeProduct(id) {
    console.log("CGI removeAction", id);
    return dispatch => {
      dispatch(fetchRemoveProductsBegin());
      return axios.delete(serverURL + "/product/" + id)
        .then(res => res.data)
        .then(data => {
          console.log("CGI Action", data);
          dispatch(fetchRemoveProductsSuccess(data));
          // return <Redirect to='/'/>;
          return data;
        })
        .catch(error => dispatch(fetchRemoveProductsFailure(error)));
    };
  }


//  export function fetchProducts() {
//     return dispatch => {
//     dispatch(fetchProductsSuccess(storeProducts));
//       return storeProducts;       
//     };
//   }

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const fetchCreateProductsSuccess = products => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: { products }
});

export const fetchCreateProductsFailure = error => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: { error }
});

export const fetchCreateProductsBegin = () => ({
  type: CREATE_PRODUCT_BEGIN
});

export const fetchSaveProductsBegin = () => ({
  type: SAVE_PRODUCT_BEGIN
});

export const fetchSaveProductsSuccess = products => ({
  type: SAVE_PRODUCT_SUCCESS,
  payload: { products }
});

export const fetchSaveProductsFailure = error => ({
  type: SAVE_PRODUCT_FAILURE,
  payload: { error }
});

export const fetchRemoveProductsBegin = () => ({
  type: REMOVE_PRODUCT_BEGIN
});

export const fetchRemoveProductsSuccess = products => ({
  type: REMOVE_PRODUCT_SUCCESS,
  payload: { products }
});

// export const fetchRemoveProductsRedirect = () => ({
//   type: REMOVE_PRODUCT_REDIRECT,
// });

export const fetchRemoveProductsFailure = error => ({
  type: REMOVE_PRODUCT_FAILURE,
  payload: { error }
});

