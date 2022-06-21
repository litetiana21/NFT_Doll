import {
    LOAD_POINTS_BEGIN,
    LOAD_POINTS_SUCCESS,
    LOAD_POINTS_FAILURE,
    EDIT_POINT_STATE,
    REMOVE_POINT_SUCCESS,
    SAVE_POINT_SUCCESS
  } from '../actions/PointActions';
  
  const initialState = {
    points: [],
    loading: false,
    error: null,
    cart: [],
  };

function updateState(points, id, value){
  let index = points.findIndex(ele => ele.id == id);
  points[index].editState = !points[index].editState;
  if (!points[index].editState) {
      points[index].point = value
  }
  return points;
}  
  export default function pointReducer(state = initialState, action) {
    
    switch(action.type) {
      case LOAD_POINTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case LOAD_POINTS_SUCCESS: 
      return {
          ...state,
          cart: [],
          loading: false,
          points: action.payload.points
        };
  
      case LOAD_POINTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
          
        };
      case SAVE_POINT_SUCCESS: 
        return {
            ...state,
            cart: [],
            loading: false,
            points: action.payload.points
          };
      case REMOVE_POINT_SUCCESS: 
        return {
            ...state,
            cart: [],
            loading: false,
            points: action.payload.points
          };
      case EDIT_POINT_STATE:
        return {
          ...state,
          points: updateState(state.points, action.payload.id)
        };
      default:
        return state;
    }
  }