import { combineReducers } from "redux";
import userReducer from './user/user.reducer';
import lessonReducer from './lesson/lesson.reducer';

// import { cartReducer } from "./cart/cart.reducer";
// import { directoryReducer } from './directory/directory.reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
// import { shopReducer } from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}


const rootReducer = combineReducers({
    user: userReducer,
    lesson: lessonReducer,
    // cart: cartReducer,
    // directory: directoryReducer,
    // shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);