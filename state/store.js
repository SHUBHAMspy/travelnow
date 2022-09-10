import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

const bindMiddleware = (middlewares) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(... middlewares))
    }
    return applyMiddleware(... middlewares);
}



const reducer = (state,action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        };
        return nextState;
        
    } else {
        return reducers(state,action);
    }
}

const makeStore = (context) => {
    const store = createStore(reducer,bindMiddleware([thunk]));
    return store;
}

export const wrapper = createWrapper(makeStore,{debug:true});

