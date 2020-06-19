import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { badWordsMiddlware } from "../middlware";

const store = createStore(
    rootReducer,
    applyMiddleware(badWordsMiddlware),
    );

export default store;