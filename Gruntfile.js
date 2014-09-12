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
				configFile: "node_modules/protractor/referenceConf.js", // Default config file
				keepAlive: false, // If false, the grunt process stops when the test fails.
				noColor: false, // If true, protractor will not use colors in its output.
				args: {
					// Arguments passed to the command
				}
			},
			your_target: {
				options: {
					configFile: "config/protractor.conf.js", // Target-specific config file
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
				port: 9879
			},
			continuous: {
				configFile: 'config/karma.conf.js',
				port: 9880,
				singleRun: true,
			}
		}
	});
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('pro', [
		'express',
		'protractor_webdriver',
		'protractor'
	]);
	grunt.registerTask('unittests-ci', [
		'karma:continuous'
	]);
	grunt.registerTask('unittests-cli',[
		'karma:unit'
	])
};
//stuff
