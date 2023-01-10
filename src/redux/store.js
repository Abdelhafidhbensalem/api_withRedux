import {createStore,compose,applyMiddleware} from "redux"
import { recipeReducer } from "./reducers/recipeReducer"
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=createStore(recipeReducer,composeEnhancers(applyMiddleware(thunk)))