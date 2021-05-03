import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {newUser: false};

const newUserSlice = createSlice({
    name: 'newUser',
    initialState,
    reducers: {
        toggleNewUser(state) {
            state.newUser = !state.newUser;
        }
    }
})



const NewUserStore = configureStore({ reducer: newUserSlice.reducer});

export const actions = newUserSlice.actions;
export default NewUserStore;