module.exports = {
	// Tell webpack to run babel on every file it runs through
	module: {
		rules: [{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', {
							targets: {
								browsers: ['last 2 versions']
							}
						}]
					],
					"plugins": [
						["react-css-modules", {
							"filetypes": {
								".scss": {
									"syntax": "postcss-scss",
									"plugins": [
										"postcss-nested"
									]
								}
							}
						}]
					]
				}
			},
			{
				test: /\.css$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoader: 1,
							modules: true,
							localIdentName: '[name]_[local]__[hash:base64:5]'
						}
					}
				]
			}
		]
	}
};