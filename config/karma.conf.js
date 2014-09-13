module.exports = function(config) {
	config.set({
		basePath: '../',
		frameworks: ['jasmine'],
		files: [
			'src/cdn/angular/1.2.9/angular.min.js',
			'src/cdn/angular/1.2.9/angular-mocks.js',
			'src/scripts/*.js',
			'test/unit/*.js'
		],
		exclude: [],
		preprocessors: {
			'src/scripts/*.js': 'coverage'
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'html', 'coverage'],
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		// start these browsers

		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,
		htmlReporter: {
			outputDir: '/tmp/karma_html',
			templatePath: __dirname + '/../node_modules/karma-html-reporter/jasmine_template.html'
		},
		coverageReporter: {
			type: 'html',
			dir: '/tmp/unittest/coverage/'
		},
		plugins: [
			'karma-html-reporter',
			'karma-jasmine',
			'karma-requirejs',
			'karma-coverage',
			'karma-junit-reporter',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-ie-launcher'

		]
	});
};
