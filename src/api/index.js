import axios from 'axios';

export const GET_CUSTOMER_DATA_START = 'GET_CUSTOMER_DATA_START';
export const GET_CUSTOMER_DATA_SUCCESS = 'GET_CUSTOMER_DATA_SUCCESS';
export const GET_CUSTOMER_DATA_FAILURE = 'GET_CUSTOMER_DATA_FAILURE';

export const GET_GROOMER_DATA_START = 'GET_GROOMER_DATA_START';
export const GET_GROOMER_DATA_SUCCESS = 'GET_GROOMER_DATA_SUCCESS';
export const GET_GROOMER_DATA_FAILURE = 'GET_GROOMER_DATA_FAILURE';

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

const getCustomerData = id => dispatch => {
  dispatch({ type: GET_CUSTOMER_DATA_START });

  axios
    .get(`${process.env.REACT_APP_API_URI}customers/${id}`)
    .then(res => {
      dispatch({ type: GET_CUSTOMER_DATA_SUCCESS, payload: res.body });
    })
    .catch(err => {
      dispatch({ type: GET_CUSTOMER_DATA_FAILURE, payload: err.message });
    });
};

const getGroomerData = id => dispatch => {
  dispatch({ type: GET_GROOMER_DATA_START });

  axios
    .get(`${process.env.REACT_APP_API_URI}groomers/${id}`)
    .then(res => {
      dispatch({ type: GET_GROOMER_DATA_SUCCESS, payload: res.body });
    })
    .catch(err => {
      dispatch({ type: GET_GROOMER_DATA_FAILURE, payload: err.message });
    });
};

export {
  sleep,
  getExampleData,
  getProfileData,
  getDSData,
  getCustomerData,
  getGroomerData,
};
