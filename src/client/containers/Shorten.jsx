import React from 'react'
import { connect } from 'react-redux'
import { shorten } from '../actions'
import { validateUrl } from '../actions/validate'

const ShortenContainer = ({ dispatch, result, isValid }) => {
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
			{ result.hasOwnProperty('url') ? (
				<div className="info">
					shortcode for {result.url} is  {result.shortcode}
				</div>) :
				null }
		</div>
	)
}

const mapStateToProps = state => ({
	isValid: state.shortener.isValid,
	result: state.shortener.shorten,
})

const Shorten = connect(mapStateToProps)(ShortenContainer)

export default Shorten
