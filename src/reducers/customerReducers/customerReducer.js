import {
  GET_CUSTOMER_DATA_START,
  GET_CUSTOMER_DATA_SUCCESS,
  GET_CUSTOMER_DATA_FAILURE,
} from '../../actions/types';

const initialState = {
  customer: {},
  isFetching: false,
  error: '',
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMER_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CUSTOMER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        customer: action.payload,
      };
    case GET_CUSTOMER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
