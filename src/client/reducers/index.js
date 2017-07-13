import { combineReducers } from 'redux'

import {
	SHORTEN_LINK_REQUEST,
	SHORTEN_LINK_SUCCESS,
	SHORTEN_LINK_FAILURE,
	VALIDATE_URL,
} from '../constants'

export const shorten = (state = '', action) => {
	switch (action.type) {
	case SHORTEN_LINK_SUCCESS:
		return action.shortcode
	default:
		return state
	}
}

export const isFetching = (state = false, action) => {
	switch (action.type) {
	case SHORTEN_LINK_REQUEST:
		return true
	case SHORTEN_LINK_SUCCESS:
	case SHORTEN_LINK_FAILURE:
		return false
	default:
		return state
	}
}

export const isValid = (state = false, action) => {
	switch (action.type) {
	case VALIDATE_URL:
		return /^https?:\/\/.*$/.test(action.url)
	default:
		return state
	}
}

export default combineReducers({
	shorten,
	isFetching,
	isValid,
})
