import axios from 'axios';

import {
  GET_CUSTOMER_DATA_START,
  GET_CUSTOMER_DATA_SUCCESS,
  GET_CUSTOMER_DATA_FAILURE,
} from '../types';

export const getCustomerData = id => dispatch => {
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
