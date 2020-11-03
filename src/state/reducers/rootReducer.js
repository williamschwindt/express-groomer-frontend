import { combineReducers } from 'redux';

import { groomerReducer } from './groomerReducers/groomerReducer';
import { customerReducer } from './customerReducers/customerReducer';

export const rootReducer = combineReducers({
  groomerReducer,
  customerReducer,
});
