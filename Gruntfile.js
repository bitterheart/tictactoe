module.exports = function (grunt) {
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
		configFile: 'protractor_conf.js',
		keepAlive: true,
		noColor: false,
		args: {
		    // Arguments passed to the command
		}
            },
            your_target: {
		options: {
                    configFile: "test/conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
		}
            }
	}
    });
    
    grunt.registerTask('p:test', [
	'protractor_webdriver',
	'protractor'
    ]);  
});
