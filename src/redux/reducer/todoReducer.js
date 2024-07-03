import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoReducer = createSlice({
  name: 'Book',
  initialState,
  reducers: {
 
   addBook:(state,action)=>{
    state.value.push(action.payload)

   }
  },
})


export const { addBook} = todoReducer.actions

export default todoReducer.reducer