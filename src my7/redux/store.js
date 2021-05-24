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

// export const persistor = persistStore(store);
export default store;




// import { configureStore } from '@reduxjs/toolkit';
// import phonebookReducer from './phonebook/phonebook-reducer';

// // const preloadedState = {
// //   phonebook: {
// //     contacts: JSON.parse(localStorage.getItem('contacts')) || []
// //   }
// // }

// // Створення сховища 
// const store = configureStore({
//   reducer: {
//     phonebook: phonebookReducer
//   },
//   //preloadedState
// });

// export default store;