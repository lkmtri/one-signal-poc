import withRedux from 'next-redux-wrapper'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

const initialAppState = {}

// Add reducers here
const reducers = combineReducers({
  form: formReducer
})

// Add redux middlewares here
const middlewares = []

const reduxMiddleware = composeWithDevTools(applyMiddleware(...middlewares))

export default wrappedComponent =>
  withRedux((initialState = initialAppState) =>
    createStore(reducers, initialState, reduxMiddleware),
  )(wrappedComponent)