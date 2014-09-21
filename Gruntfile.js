/*
 * borrowed from
 * http://sideroad.secret.jp/articles/grunt-on-jenkins/
 */
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		watch: {
			express: {
				files: ['**/*.js'],
				tasks: ['express:server'],
				options: {
					spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
				}
			}
		},
		shell: {
			protractor_webdriver_manager_update: {
				options: {
					stdout: true
				},
				command: require('path').resolve(__dirname, 'node_modules', 'protractor', 'bin', 'webdriver-manager') + ' update'
			}
		},
		selenium_webdriver_phantom: {
			chrome: {

			},
			phantom: {
				options: {
					phantom: {}
				}
			},
			others: {

			}
		},

		protractor_webdriver: {
			ci: {
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
					keepAlive: false,
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
				reporters: ['progress'],
			},
			continuous: {
				configFile: 'config/karma.conf.js',
				port: 9880,
				singleRun: true,
				autoWatch: false,
				reporters: ['html', 'coverage'],
			}
		}
	});
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-selenium-webdriver-phantom');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-protractor-webdriver');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-karma');
	grunt.registerTask('e2etests-ci', [
		/*'shell:protractor_webdriver_manager_update',*/
		'selenium_webdriver_phantom:phantom', 'protractor', 'selenium_webdriver_phantom:stop'
	]);
	grunt.registerTask('e2etests-ci2', [
		'express',
		'protractor_webdriver',
		'protractor:ci'
	]);
	grunt.registerTask('unittests-ci', [
		'karma:continuous'
	]);
	grunt.registerTask('unittests-cli', [
		'karma:unit'
	]);
	grunt.registerTask('runServer', [
		'express'
	]);
};
//stuff
