import * as types from '../src/client/constants/'
import { shorten } from '../src/client/reducers'

test('shorten url', () => {
	const stateBefore = undefined
	const action = {
		type: types.SHORTEN_LINK,
		value: 5,
	}

	const stateAfter = 5

	expect(shorten(stateBefore, action)).toEqual(stateAfter)
})
