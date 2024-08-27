import {combineReducers} from '@reduxjs/toolkit';
import userReducers from '../reducers/userReducers';

const reducer = combineReducers({
  user: userReducers,
});

export default reducer;
