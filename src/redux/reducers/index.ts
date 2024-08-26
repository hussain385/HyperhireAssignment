
import { combineReducers } from "@reduxjs/toolkit";
import skillReducer from '../reducers/skillReducers';
import eventReducers from "../reducers/eventReducers";
import userReducers from "../reducers/userReducers";

const reducer = combineReducers({
    skills: skillReducer,
    events: eventReducers,
    user: userReducers
});

export default reducer;
