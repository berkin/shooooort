import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
	entry: [
		'whatwg-fetch',
		'react-hot-loader/patch',
		'./src/client',
	],
	output: {
		filename: 'js/bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: isProd ? 'static/' : `http://localhost:${WDS_PORT}/dist/`,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								minimize: true,
								discardComments: {
									removeAll: true
								}
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
		],
	},
	devtool: isProd ? false : 'source-map',
	devServer: {
		port: WDS_PORT,
		hot: true,
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin({
			filename: 'css/style.css',
			allChunks: true
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.css'],
	},
}
