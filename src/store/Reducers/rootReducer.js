import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import userReducer from './userReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    user:userReducer,
    todo:todoReducer
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;