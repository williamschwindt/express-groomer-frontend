import axios from 'axios';

import {
  GET_GROOMER_DATA_START,
  GET_GROOMER_DATA_SUCCESS,
  GET_GROOMER_DATA_FAILURE,
} from '../types';

export const getGroomerData = id => dispatch => {
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
