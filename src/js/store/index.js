import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { badWordsMiddlware } from "../middleware";
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/api-saga";

const initializeSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(badWordsMiddlware, initializeSagaMiddleware)
    )
);

initializeSagaMiddleware.run(apiSaga);

export default store;