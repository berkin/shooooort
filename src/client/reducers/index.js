import { combineReducers } from 'redux'

import {
	SHORTEN_LINK_REQUEST,
	SHORTEN_LINK_SUCCESS,
	SHORTEN_LINK_FAILURE,
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

export default combineReducers({
	shorten,
	isFetching,
})
