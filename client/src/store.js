import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {productReducer} from "./reducers/reducer"


// const store = createStore( combineReducers=
//     {userReducer},applyMiddleware(thunk));

// export default store

const Reducers = combineReducers({
    productstore: productReducer
  });
const store = createStore(Reducers,applyMiddleware(thunk));
export default store;