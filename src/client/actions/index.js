import {
	SHORTEN_LINK_REQUEST,
	SHORTEN_LINK_SUCCESS,
	SHORTEN_LINK_FAILURE,
	SHORTEN_RESET,
} from '../constants'

export const shorten = url => (dispatch, getState) => {
	const shouldShorten = getState().shortener.isValid
	if (!shouldShorten) {
		return dispatch({
			type: SHORTEN_LINK_FAILURE,
			message: 'Unable to shorten that link. It is not a valid url.'
		})
	}

	dispatch({
		type: SHORTEN_LINK_REQUEST
	})

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	headers.append('Access-Control-Allow-Origin', '*')

	return fetch(
		'http://localhost:1337/gymia-shorty.herokuapp.com/shorten',
		{
			headers,
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			body: JSON.stringify({
				url,
			})
		})
		.then(
			(response) => {
				if (!response.ok) {
					return
				}
				response.json().then(
					(data) => {
						if (data.error) {
							dispatch({
								type: SHORTEN_LINK_FAILURE,
								message: data.error,
							})
						} else {
							dispatch({
								type: SHORTEN_LINK_SUCCESS,
								shortcode: {
									url,
									shortcode: data.shortcode
								}
							})
						}
						dispatch({
							type: SHORTEN_RESET
						})
					}
				)
			},
			error =>
				dispatch({
					type: SHORTEN_LINK_FAILURE,
					message: error.message || 'Something went wrong!',
				})
			)
}

export const resetShortener = () => ({
	type: SHORTEN_RESET,
})
