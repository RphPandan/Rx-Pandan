import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './testCounter';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})