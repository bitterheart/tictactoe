/*
 * borrowed from
 * http://sideroad.secret.jp/articles/grunt-on-jenkins/
 */
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		protractor_webdriver: {
			your_target: {
				options: {
					path: 'node_modules/protractor/bin/',
					command: 'webdriver-manager start'
				}
			}
		},
		protractor: {
			options: {
//				configFile: "node_modules/protractor/docs/referenceConf.js", // Default config file
//				keepAlive: false, // If false, the grunt process stops when the test fails.
				noColor: false, // If true, protractor will not use colors in its output.
				args: {
					// Arguments passed to the command
				}
			},
			ci: {
				options: {
					configFile: "config/protractor.conf.js", // Target-specific config file
					keepAlive:false,
					args: {} // Target-specific arguments
				}
			}
		},
		express: {
			server: {
				options: {
					hostname: '127.0.0.1',
					port: 9000,
					bases: ['src']
				},
			},
		},
		karma: {
			unit: {
				configFile: 'config/karma.conf.js',
				port: 9879,
				singleRun: false,
				autoWatch: true,
				reporters:['progress'],
			},
			continuous: {
				configFile: 'config/karma.conf.js',
				port: 9880,
				singleRun: true,
				autoWatch: false,
				reporters:['html','coverage'],
			}
		}
	});
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('e2etests-ci', [
		'express',
		'protractor_webdriver',
		'protractor:ci'
	]);
	grunt.registerTask('unittests-ci', [
		'karma:continuous'
	]);
	grunt.registerTask('unittests-cli',[
		'karma:unit'
	])
};
//stuff
