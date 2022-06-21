import axios from 'axios'

// begin by CGI
export const CREATE_POINT_BEGIN = 'CREATE_POINT_BEGIN'
export const CREATE_POINT_SUCCESS = 'CREATE_POINT_SUCCESS'
export const CREATE_POINT_FAILURE = 'CREATE_POINT_FAILURE'

export const SAVE_POINT_BEGIN = 'SAVE_POINT_BEGIN'
export const SAVE_POINT_SUCCESS = 'SAVE_POINT_SUCCESS'
export const SAVE_POINT_FAILURE = 'SAVE_POINT_FAILURE'

export const REMOVE_POINT_BEGIN = 'REMOVE_POINT_BEGIN'
export const REMOVE_POINT_SUCCESS = 'REMOVE_POINT_SUCCESS'
export const REMOVE_POINT_FAILURE = 'REMOVE_POINT_FAILURE'

export const LOAD_POINTS_BEGIN = 'LOAD_POINTS_BEGIN'
export const LOAD_POINTS_SUCCESS = 'LOAD_POINTS_SUCCESS'
export const LOAD_POINTS_FAILURE = 'LOAD_POINTS_FAILURE'

export const EDIT_POINT_STATE = 'EDIT_POINT_STATE'

// end by CGI

const serverURL = "http://localhost:8000/api";

function remakePoints(arr){
  let i, n = arr.length;
  var res = [];
  for(i = 0; i < n; i++){
      res.push({
          id: arr[i].id,
          name: arr[i].name,
          point: arr[i].point,
          editState: false,
          user_id: arr[i].user_id,
          product_id: arr[i].product_id
      });
  }
  console.log("CGI remakePoints", res);
  return res;
}

export function fetchPoints(product_id) {
  console.log("CGI pointAction");
    return dispatch => {
      dispatch(fetchPointsBegin());
      return axios.get(serverURL + "/point/product/" + product_id)
        .then(res => res.data)
        .then(data => {
          console.log("CGI pointAction ", data);
          dispatch(fetchPointsSuccess(data));
          return remakePoints(data);
        })
        .catch(error => dispatch(fetchPointsFailure(error)));
    };
  }

  export function createPoint(user_id, product_id) {
    let pointData = {
      user_id: parseInt(user_id),
      product_id: parseInt(product_id),
      point: 0
    };
    console.log("CGI createpoint action", serverURL + "/point", pointData);
    return dispatch => {
      return axios.post(serverURL + "/point", pointData)
        .then(res => res.data)
        .then(data => {
          console.log("CGI Createpoint success", data);
          return remakePoints(data);
          // return data;
        })
        .catch(error => dispatch(fetchCreatePointFailure(error)));
    };
  }

  export function savePoint(id, product_id, pointData) {
    console.log("CGI savePoint action", id, product_id, pointData);
    return dispatch => {
      dispatch(fetchSavePointBegin());
      return axios.put(serverURL + "/point/" + id + "/product/" + product_id, pointData)
        .then(res => res.data)
        .then(data => {
          console.log("CGI savePoint success", data);
          dispatch(fetchSavePointSuccess(data));
          return remakePoints(data);
        })
        .catch(error => dispatch(fetchSavePointFailure(error)));
    };
  }

  export function removePoint(id, product_id) {
    console.log("CGI removeAction", id);
    return dispatch => {
      dispatch(fetchRemovePointBegin());
      return axios.delete(serverURL + "/point/" + id + "/product/" + product_id)
        .then(res => res.data)
        .then(data => {
          console.log("CGI Action", data);
          dispatch(fetchRemovePointSuccess(data));
          // return <Redirect to='/'/>;
          return remakePoints(data);
        })
        .catch(error => dispatch(fetchRemovePointFailure(error)));
    };
  }

//  export function fetchProducts() {
//     return dispatch => {
//     dispatch(fetchProductsSuccess(storeProducts));
//       return storeProducts;       
//     };
//   }


export const updateEditState = (id, value) => ({
  type: EDIT_POINT_STATE,
  payload: { 
    id: id,
    value: value
   }
});

export const fetchPointsBegin = () => ({
  type: LOAD_POINTS_BEGIN
});

export const fetchPointsSuccess = points => ({
  type: LOAD_POINTS_SUCCESS,
  payload: { points }
});

export const fetchPointsFailure = error => ({
  type: LOAD_POINTS_FAILURE,
  payload: { error }
});

export const fetchCreatePointSuccess = points => ({
  type: CREATE_POINT_SUCCESS,
  payload: { points }
});

export const fetchCreatePointFailure = error => ({
  type: CREATE_POINT_FAILURE,
  payload: { error }
});

export const fetchCreatePointBegin = () => ({
  type: CREATE_POINT_BEGIN
});

export const fetchSavePointBegin = () => ({
  type: SAVE_POINT_BEGIN
});

export const fetchSavePointSuccess = points => ({
  type: SAVE_POINT_SUCCESS,
  payload: { points }
});

export const fetchSavePointFailure = error => ({
  type: SAVE_POINT_FAILURE,
  payload: { error }
});

export const fetchRemovePointBegin = () => ({
  type: REMOVE_POINT_BEGIN
});

export const fetchRemovePointSuccess = points => ({
  type: REMOVE_POINT_SUCCESS,
  payload: { points }
});

export const fetchRemovePointFailure = error => ({
  type: REMOVE_POINT_FAILURE,
  payload: { error }
});

