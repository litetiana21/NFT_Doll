import axios from "axios";
// import { returnStatus } from "./statusActions";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_SUCCESS,
  IS_LOADING,
  LOAD_USERS,
  LOAD_USERS_FAIL
} from "./types";

//Uncomment below for local testing
axios.defaults.baseURL = "http://localhost:8000/api";

//uncomment and set url to your own for prod
//axios.defaults.baseURL = "https://demos.shawndsilva.com/sessions-auth-app"

//Check if user is already logged in
export const isAuth = () => (dispatch) => {

    axios
    .get("/api/users/authchecker",{withCredentials:true})
    .then((res) =>
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data
      })
    )
    .catch((err) => {
      dispatch({
        type: AUTH_FAIL
      });
    });

}

//Register New User
export const register = ({ name, email, password }) => (dispatch) => {
  const body = { name, email, password };

  axios
    .post("/users/register", body)
    .then((res) =>{
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data        
      });

      // dispatch(returnStatus(res.data, res.status, 'REGISTER_SUCCESS'));
    })
    .catch((err) => {
    //   dispatch(returnStatus(err.response.data, err.response.status, 'REGISTER_FAIL'))
      dispatch({
        type: REGISTER_FAIL
      });
      dispatch({ type: IS_LOADING })
    });
};

//Login User
// export const login = ({ email, password }) => (dispatch) => {
//   // Headers
//   const headers = {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   };

//   // Request body
//   const body = JSON.stringify({ email, password });

//   axios
//     .post("/api/users/login", body, headers)
//     .then((res) => {
//       console.log("CGI login", res);
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data
//       });
//       dispatch({ type: IS_LOADING });
//     }
//     )
//     .catch((err) => {
//       console.log("CGI login", err);
//     //   dispatch(returnStatus(err.response.data, err.response.status, 'LOGIN_FAIL'))
//       // dispatch({
//       //   type: LOGIN_FAIL
//       // });
//       // dispatch({ type: IS_LOADING })
//     });
// };

//Logout User and Destroy session
export const logout = () => (dispatch) => {

    // axios
    // .delete("/api/users/logout", { withCredentials: true })
    // .then((res) =>
    //   dispatch({
    //     type: LOGOUT_SUCCESS,
    //   })
    // )
    // .catch((err) => {
    //   console.log(err);
    // });

    dispatch({
      type: LOGOUT_SUCCESS
    })
}


// by CGI Login User

// const serverURL = "http://localhost:8000/api";

// export function login(userData) {
//   return dispatch => {
//     return axios.post(serverURL + "/users/login", userData)
//       .then(res => res)
//       .then(data => {
//         console.log("CGI login", data);
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: data
//         });
//           // return <Redirect to='/'/>;
//         return data;
//       })
//       .catch((err) => {
//         console.log("CGI login", err);
//         dispatch({
//           type: LOGIN_FAIL
//         });
//       });
//     };
// }

export const login = (userData) => (dispatch) => {

  axios
    .post("/users/login", userData)
    .then(res => res.data)
    .then(data => {
      // console.log("CGI login", data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data
      });
      // getUsers();
      return data;
    }
    )
    .catch((err) => {
      // console.log("CGI login", err);
    //   dispatch(returnStatus(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      });
      // dispatch({ type: IS_LOADING })
    });
};

export function getUsers() {
  // console.log("CGI getUsers");
    return dispatch => {
      return axios.get('/users/load')
        .then(res => res.data)
        .then(data => {
          console.log("CGI fetchLoadUsers ", data);
          dispatch(fetchLoadUsers(data));
          return data;
        })
        .catch(error => dispatch(fetchLoadUsersFailure(error)));
    };
  }

export const fetchLoadUsers = (users) => ({
  type: LOAD_USERS,
  payload: users
});

export const fetchLoadUsersFailure = (users) => ({
  type: LOAD_USERS_FAIL,
  payload: users
});
