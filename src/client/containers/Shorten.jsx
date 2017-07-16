import React from 'react'
import { connect } from 'react-redux'
import LoadingImage from '../../assets/img/Spinner.svg'
import { shorten, resetShortener } from '../actions'
import { validateUrl } from '../actions/validate'

const ShortenContainer = ({ dispatch, result, isValid, isFetching, message }) => {
	let input

	return (
		<div>
			<div className="input-group">
				<input
					className="input"
					onFocus={() => {
						dispatch(resetShortener())
					}}
					onInput={() => {
						dispatch(validateUrl(input.value))
					}}
					ref={(node) => { input = node }}
					type="text"
				/>
				<div className="input-group__addon">
					<button
						className="button"
						onClick={
							() => {
								dispatch(shorten(input.value))
							}
						}
					>
						{ isFetching ?
							(
								<div className="loading">
									<img src={LoadingImage} alt="loading" />
								</div>
							) :
							<span>Shorten</span>
						}
					</button>
				</div>
			</div>
			<div className="error">
				{ message ? ' ' : message }
			</div>
			{ result.hasOwnProperty('url') ? (
				<ul className="shortcodes">
					<li className="highlight">
						<a className="shortcodes__title" href={result.shortcode}>
							shoooooort.com/<span className="highlight">{result.shortcode}</span>
						</a>
						<span className="shortcodes__url">{result.url}</span>
					</li>
				</ul>) :
				null
				}
		</div>
	)
}

const mapStateToProps = state => ({
	isFetching: state.shortener.isFetching,
	isValid: state.shortener.isValid,
	result: state.shortener.shorten,
	message: state.shortener.message,
})

const Shorten = connect(mapStateToProps)(ShortenContainer)

export default Shorten
