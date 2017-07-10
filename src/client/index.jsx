import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import configureStore from './configureStore'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)
const store = configureStore()

const wrapApp = AppComponent =>
	<AppContainer>
		<Provider store={store}>
			<AppComponent />
		</Provider>
	</AppContainer>

render(wrapApp(App), rootEl)

if (module.hot) {
	module.hot.accept('./components/App', () => {
		// eslint-disable-next-line global-require
		const NextApp = require('./components/App').default
		render(wrapApp(NextApp), rootEl)
	})
}
