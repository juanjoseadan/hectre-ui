import { applyMiddleware, createStore } from "redux";
import middleware from "./middleware/middleware";
import thunk from 'redux-thunk';
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const _middleware = [thunk, middleware];
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(..._middleware)));

export default store;