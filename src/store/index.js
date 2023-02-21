import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootRducer from "../reducers";
const store = createStore(rootRducer, applyMiddleware(thunkMiddleware));
export default store;
