import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";                // defaults to localStorage for web

import phonebook from "./phonebook/phonebook-reducer";

const phonebookPersistConfig = {
  key: "phonebook",
  storage,
};

const phonebookReducer = persistReducer(phonebookPersistConfig, phonebook);

export default combineReducers({
  phonebook: phonebookReducer
});