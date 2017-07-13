import React from 'react'
import { connect } from 'react-redux'
import { shorten } from '../actions'
import { validateUrl } from '../actions/validate'

const ShortenContainer = ({ dispatch, isValid }) => {
	let input

	return (
		<div>
			<input
				onInput={() => {
					dispatch(validateUrl(input.value))
				}}
				ref={(node) => { input = node }}
				type="text"
			/>
			<button
				disabled={!isValid}
				onClick={isValid ?
					() => {
						dispatch(shorten(input.value))
						input.value = ''
					} :
					null
				}
			>
				Shorten
			</button>
		</div>
	)
}

const mapStateToProps = state => ({
	isValid: state.isValid,
})

const Shorten = connect(mapStateToProps)(ShortenContainer)

export default Shorten
