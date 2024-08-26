import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IEvent, IInvoices} from "@/interfaces/event.interfaces";

type InitStateProps = {
    events: IEvent[];
    potentialEvents: IEvent[];
    selectedEvent?: IEvent
    invoice: IInvoices
};
const initialState: InitStateProps = {
    events: [],
    potentialEvents: [],
    invoice: {
        invoices: [],
        cost: 0,
        total_cost: 0,
        total_cost_tax: 0,
        total_extra_cost: 0,
        total_kilometer: 0
    }
};

const eventSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        saveEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.events = action.payload;
        },
        savePotentialEvents: (state, action: PayloadAction<IEvent[]>) => {
            state.potentialEvents = action.payload;
        },
        filterPotentialEvents: (state, action: PayloadAction<number>) => {
            state.potentialEvents = state.potentialEvents.filter(value => value.id !== action.payload)
        },
        saveSelectedEvent: (state, action: PayloadAction<IEvent>) => {
            state.selectedEvent = action.payload;
        },
        saveInvoice: (state, action: PayloadAction<IInvoices>) => {
            state.invoice = action.payload;
        },
    },
});

export const { saveEvents, saveInvoice, savePotentialEvents, saveSelectedEvent, filterPotentialEvents } = eventSlice.actions;

export default eventSlice.reducer;
