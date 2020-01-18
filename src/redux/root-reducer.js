import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
// the localstore storage
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // the state that we want to store at the localstore
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

// to make the reducer state stored with the new config in the localstorage

export default persistReducer(persistConfig, rootReducer);
