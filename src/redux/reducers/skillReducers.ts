import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserProfile} from "@/interfaces/user.interfaces";

type InitStateProps = {
    skills: {id: number, name: string}[];
    selectedServiceProviders: IUserProfile | null;
    event_other_skills: {id: number, name: string}[];
};
const initialState: InitStateProps = {
    skills: [],
    event_other_skills: [],
    selectedServiceProviders: null,
};

const skillSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        saveSkill: (state, action: PayloadAction<{id: number, name: string}[]>) => {
            state.skills = action.payload;
        },
        saveOtherEventSkill: (state, action: PayloadAction<{id: number, name: string}[]>) => {
            state.event_other_skills = action.payload;
        },
        saveSelectedServiceProvidersFromSkills: (state, action: PayloadAction<IUserProfile | null>) => {
            state.selectedServiceProviders = action.payload;
        },
    },
});

export const { saveSkill, saveOtherEventSkill, saveSelectedServiceProvidersFromSkills } = skillSlice.actions;

export default skillSlice.reducer;
