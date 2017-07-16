import { combineReducers } from 'redux'

import {
	SHORTEN_LINK_REQUEST,
	SHORTEN_LINK_SUCCESS,
	SHORTEN_LINK_FAILURE,
	SHORTEN_RESET,
	VALIDATE_URL,
	RESET_MESSAGE,
} from '../constants'

export const shorten = (state = {}, action) => {
	switch (action.type) {
	case SHORTEN_LINK_SUCCESS:
		return {
			url: action.url,
			shortcode: action.shortcode,
		}
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
	case SHORTEN_RESET:
		return false
	default:
		return state
	}
}

export const isValid = (state = false, action) => {
	const re = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i
	switch (action.type) {
	case VALIDATE_URL:
		return re.test(action.url)
	case SHORTEN_RESET:
		return false
	default:
		return state
	}
}

export const message = (state = '', action) => {
	switch (action.type) {
	case SHORTEN_LINK_FAILURE:
		return action.message
	case SHORTEN_RESET:
		return ''
	default:
		return state
	}
}

export default combineReducers({
	shorten,
	isFetching,
	isValid,
	message,
})
