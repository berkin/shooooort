import { STATIC_PATH, APP_CONTAINER_CLASS, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = title =>
`<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>${title}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="//localhost:${WDS_PORT}/dist/css/style.css">
	</head>
	<body>
		<div class="${APP_CONTAINER_CLASS}"></div>
		<script src="${isProd ? STATIC_PATH : `//localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
	</body>
</html>
`

export default renderApp
