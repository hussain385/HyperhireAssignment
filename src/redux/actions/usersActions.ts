import store from '../store';
import {saveCompetition, saveUserInfo} from '@redux/reducers/userReducers';
import {IAccount, ICompetition} from '@/interfaces/auth.interfaces';

const {dispatch} = store;

export const updateCompetition = (data: ICompetition | null) => {
  dispatch(saveCompetition(data));
};

export const updateUser = (data: IAccount | null) => {
  dispatch(saveUserInfo(data));
};
