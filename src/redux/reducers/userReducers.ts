import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAccount, ICompetition} from '@/interfaces/auth.interfaces';

type InitStateProps = {
  competition: ICompetition | null;
  user: IAccount | null;
};
const initialState: InitStateProps = {
  competition: null,
  user: null,
};

const userSlice = createSlice({
  name: 'sign-up',
  initialState: initialState,
  reducers: {
    saveCompetition: (state, action: PayloadAction<ICompetition | null>) => {
      state.competition = action.payload;
    },
    saveUserInfo: (state, action: PayloadAction<IAccount | null>) => {
      state.user = action.payload;
    },
  },
});

export const {saveCompetition, saveUserInfo} = userSlice.actions;

export default userSlice.reducer;
