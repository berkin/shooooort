import React from 'react'
import { connect } from 'react-redux'
import LoadingImage from '../../assets/img/Spinner.svg'
import { shorten, resetShortener } from '../actions'
import { validateUrl } from '../actions/validate'

const ShortenContainer = ({ dispatch, shortcodes, isValid, isFetching, message }) => {
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
			<ul className="shortcodes">
				{
					shortcodes.map((item, i) =>
						<li key={item.shortcode} className={i === 0 ? 'highlight' : ''}>
							<a className="shortcodes__title" href={item.shortcode}>
								shoooooort.com/<span className="highlight">{item.shortcode}</span>
							</a>
							<span className="shortcodes__url">{item.url}</span>
						</li>
					)
				}
			</ul>
		</div>
	)
}

const mapStateToProps = state => ({
	isFetching: state.shortener.isFetching,
	isValid: state.shortener.isValid,
	shortcodes: state.shortener.shortcodes,
	message: state.shortener.message,
})

const Shorten = connect(mapStateToProps)(ShortenContainer)

export default Shorten
