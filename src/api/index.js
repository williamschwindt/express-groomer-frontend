import axios from 'axios';
import {
  GET_CUSTOMER_INFO_START,
  GET_CUSTOMER_INFO_SUCCESS,
  GET_CUSTOMER_INFO_FAILURE,
  REGISTER_CUSTOMER_INFO_START,
  REGISTER_CUSTOMER_INFO_SUCCESS,
  REGISTER_CUSTOMER_INFO_FAILURE,
  GET_GROOMER_INFO_START,
  GET_GROOMER_INFO_SUCCESS,
  GET_GROOMER_INFO_FAILURE,
  REGISTER_GROOMER_INFO_START,
  REGISTER_GROOMER_INFO_SUCCESS,
  REGISTER_GROOMER_INFO_FAILURE,
} from './types';

let groomersReq = `${process.env.REACT_APP_API_URI}/groomers`;
let customersReq = `${process.env.REACT_APP_API_URI}/customers`;

// we will define a bunch of API calls here.
const apiUrl = `${process.env.REACT_APP_API_URI}/profiles`;

const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const getExampleData = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then(response => response.data);
};

const requestGroomers = axios.get(groomersReq).catch(err => err);
const requestCustomers = axios.get(customersReq).catch(err => err);

const getUserData = () => {
  return axios
    .all([requestGroomers, requestCustomers])
    .then(
      axios.spread((...responses) => {
        console.log(responses);
        let users = {
          groomers: responses[0].data,
          customers: responses[1].data,
        };
        return users;
      })
    )
    .catch(errors => {
      return errors;
    });
};

const getGroomerData = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URI}/groomers`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

const getAuthHeader = authState => {
  if (!authState.isAuthenticated) {
    throw new Error('Not authenticated');
  }
  return { Authorization: `Bearer ${authState.idToken}` };
};

const getDSData = (url, authState) => {
  // here's another way you can compose together your API calls.
  // Note the use of GetAuthHeader here is a little different than in the getProfileData call.
  const headers = getAuthHeader(authState);
  if (!url) {
    throw new Error('No URL provided');
  }
  return axios
    .get(url, { headers })
    .then(res => JSON.parse(res.data))
    .catch(err => err);
};

const apiAuthGet = authHeader => {
  return axios.get(apiUrl, { headers: authHeader });
};

const getProfileData = authState => {
  try {
    return apiAuthGet(getAuthHeader(authState)).then(response => response.data);
  } catch (error) {
    return new Promise(() => {
      console.log(error);
      return [];
    });
  }
};

const getCustomerInfo = id => dispatch => {
  dispatch({ type: GET_CUSTOMER_INFO_START });

  axios
    .get(`${process.env.REACT_APP_API_URI}/customers/${id}`)
    .then(res => {
      dispatch({ type: GET_CUSTOMER_INFO_SUCCESS, payload: res.body });
    })
    .catch(err => {
      dispatch({ type: GET_CUSTOMER_INFO_FAILURE, payload: err.message });
    });
};

const getGroomerInfo = id => dispatch => {
  console.log('get ran');
  dispatch({ type: GET_GROOMER_INFO_START });

  axios
    .get(`${process.env.REACT_APP_API_URI}/groomers/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_GROOMER_INFO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_GROOMER_INFO_FAILURE, payload: err.message });
    });
};

const registerCustomer = (data, props) => dispatch => {
  dispatch({ type: REGISTER_CUSTOMER_INFO_START });

  axios
    .post(`${process.env.REACT_APP_API_URI}/customers`, data)
    .then(res => {
      dispatch({ type: REGISTER_CUSTOMER_INFO_SUCCESS, payload: res.body });
      props.history.push('/customer-dashboard');
    })
    .catch(err => {
      dispatch({ type: REGISTER_CUSTOMER_INFO_FAILURE, payload: err.message });
    });
};

const registerGroomer = (data, props) => dispatch => {
  dispatch({ type: REGISTER_GROOMER_INFO_START });

  axios
    .post(`${process.env.REACT_APP_API_URI}/groomers`, data)
    .then(res => {
      dispatch({ type: REGISTER_GROOMER_INFO_SUCCESS, payload: res.data });
      props.history.push('/groomer-dashboard');
    })
    .catch(err => {
      dispatch({ type: REGISTER_GROOMER_INFO_FAILURE, payload: err.message });
    });
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getCustomerInfo,
  getGroomerInfo,
  getGroomerData,
  getUserData,
  registerCustomer,
  registerGroomer,
};
