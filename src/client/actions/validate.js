import { VALIDATE_URL } from '../constants'

export const validateUrl = url => ({
	type: VALIDATE_URL,
	url,
})
