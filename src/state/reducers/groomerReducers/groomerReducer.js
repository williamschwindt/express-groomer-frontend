import {
  GET_GROOMER_INFO_START,
  GET_GROOMER_INFO_SUCCESS,
  GET_GROOMER_INFO_FAILURE,
  REGISTER_GROOMER_INFO_START,
  REGISTER_GROOMER_INFO_SUCCESS,
  REGISTER_GROOMER_INFO_FAILURE,
} from '../../../api/types';

const initialState = {
  groomer: {},
  isFetching: false,
  error: '',
};

export const groomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GROOMER_INFO_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_GROOMER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        groomer: action.payload,
      };
    case GET_GROOMER_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case REGISTER_GROOMER_INFO_START:
      return {
        ...state,
        isFetching: true,
      };
    case REGISTER_GROOMER_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        groomer: action.payload,
      };
    case REGISTER_GROOMER_INFO_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
