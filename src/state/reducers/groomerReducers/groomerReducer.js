import {
  GET_GROOMER_DATA_START,
  GET_GROOMER_DATA_SUCCESS,
  GET_GROOMER_DATA_FAILURE,
} from '../../../api/index';

const initialState = {
  groomer: {},
  isFetching: false,
  error: '',
};

export const groomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROOMER_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_GROOMER_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        groomer: action.payload,
      };
    case GET_GROOMER_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
