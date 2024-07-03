import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const customerReducer = createSlice({
  name: 'Book',
  initialState,
  reducers: {
 
   addBook:(state,action)=>{
    state.value.push(action.payload)

   }
  },
})


export const { addBook} = customerReducer.actions

export default customerReducer.reducer