import {
	SHORTEN_LINK_REQUEST,
	SHORTEN_LINK_SUCCESS,
	SHORTEN_LINK_FAILURE,
} from '../constants'

export const shorten = url => (dispatch) => {
	dispatch({
		type: SHORTEN_LINK_REQUEST
	})

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	headers.append('Access-Control-Allow-Origin', '*')

	fetch(
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
								shortcode: data.shortcode,
							})
						}
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
