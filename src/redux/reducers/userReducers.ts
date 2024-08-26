import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserProfile} from "@/interfaces/user.interfaces";

type InitStateProps = {
    serviceProviders: IUserProfile[];
    selectedServiceProviders: IUserProfile | null;
    user: IUserProfile | null;
    selectedClient: IUserProfile | null;
    selectedModerator: IUserProfile | null;
    allClients: IUserProfile[];
    allModerator: IUserProfile[];
    token: string | null;
};
const initialState: InitStateProps = {
    serviceProviders: [],
    allClients: [],
    selectedModerator: null,
    selectedClient: null,
    selectedServiceProviders: null,
    allModerator: [],
    token: null,
    user: null,
};

const userSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        saveAllServiceProviders: (state, action: PayloadAction<IUserProfile[]>) => {
            state.serviceProviders = action.payload;
        },
        saveAllClients: (state, action: PayloadAction<IUserProfile[]>) => {
            state.allClients = action.payload;
        },
        saveAllModerator: (state, action: PayloadAction<IUserProfile[]>) => {
            state.allModerator = action.payload;
        },
        saveSelectedServiceProviders: (state, action: PayloadAction<IUserProfile | null>) => {
            state.selectedServiceProviders = action.payload;
        },
        saveSelectedClient: (state, action: PayloadAction<IUserProfile | null>) => {
            state.selectedClient = action.payload;
        },
        saveSelectedModerator: (state, action: PayloadAction<IUserProfile | null>) => {
            state.selectedModerator = action.payload;
        },
        saveToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        saveUser: (state, action: PayloadAction<IUserProfile | null>) => {
            state.user = action.payload;
        },
    },
});

export const {saveAllServiceProviders, saveAllClients, saveAllModerator, saveSelectedServiceProviders, saveSelectedModerator, saveSelectedClient, saveToken, saveUser} = userSlice.actions;

export default userSlice.reducer;
