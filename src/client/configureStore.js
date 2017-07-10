import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import appReducers from './reducers/'

const configureStore = () => {
	const middlewares = [thunk]
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger())
	}

	const store = createStore(
		appReducers,
		applyMiddleware(...middlewares),
	)


	return store
}
export default configureStore
