import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";  // Імпорт функції створення сховиища 
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist";                                      // Імпорт функції створення persist
//import rootReducer from "./rootReducer";
import logger from "redux-logger";
import contacts from './phonebook/phonebook-reducer';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  //reducer: rootReducer,
  reducer: {
    phonebook: contacts
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;



