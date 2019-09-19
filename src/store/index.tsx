import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import { searchReducer } from "./searchModule/searchReducer";

const reducers = combineReducers({
    // @ts-ignore: Unreachable code error
    search: searchReducer
})

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export type State = ReturnType<typeof reducers>