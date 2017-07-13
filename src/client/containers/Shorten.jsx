import React from 'react'
import { connect } from 'react-redux'
import { shorten } from '../actions'

const ShortenContainer = ({ dispatch }) => {
	let input

	return (
		<div>
			<input
				value="http://www.google.com"
				ref={(node) => { input = node }}
				type="text"
			/>
			<button
				onClick={() => {
					dispatch(shorten(input.value))
					input.value = ''
				}}
			>
				Shorten
			</button>
		</div>
	)
}

const Shorten = connect()(ShortenContainer)

export default Shorten
