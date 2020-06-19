import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import { badWordsMiddlware } from "../middleware";

const store = createStore(
    rootReducer,
    applyMiddleware(badWordsMiddlware),
    );

export default store;