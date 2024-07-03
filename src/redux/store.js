import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducer/todoReducer'
import bookReducer from './reducer/bookReducer'
import categoryReducer from './reducer/categoryReducer'
import customerReducer from './reducer/customerReducer'

export const store = configureStore({
  reducer: {
    bookReducers :bookReducer,
    todoReducers:todoReducer,
    categoryReducers:categoryReducer,
    customerReducers:customerReducer

  },
})
