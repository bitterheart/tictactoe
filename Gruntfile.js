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
		keepAlive: true, // If false, the grunt process stops when the test fails.
		noColor: false, // If true, protractor will not use colors in its output.
		args: {
		    // Arguments passed to the command
		}
            },
            your_target: {
		options: {
                    configFile: "protractor_conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
		}
            }
	},
	express: {
	    options:{
		bases: 'src'
	    }
	}
    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('pro', [
	'protractor_webdriver',
	'express',
	'protractor'
    ]);
};
//stuff
