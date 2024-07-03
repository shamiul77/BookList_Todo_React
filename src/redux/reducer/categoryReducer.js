import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const categoryReducer = createSlice({
  name: 'Book',
  initialState,
  reducers: {
 
   addBook:(state,action)=>{
    state.value.push(action.payload)

   }
  },
})

export const { addBook} = categoryReducer.actions

export default categoryReducer.reducer