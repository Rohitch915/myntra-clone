import {createSlice} from "@reduxjs/toolkit"

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addItemInBag: (store, action) => {
           store.push(action.payload);
        },
        deleteItemInBag: (store, action) => {
           return store.filter(item=>item!=action.payload)
        }
    }
})
export const bagActions=bagSlice.actions;
export default bagSlice;