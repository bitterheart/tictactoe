var HtmlReporter = require('protractor-html-screenshot-reporter');
exports.config = {
    files: [
        'src/cdn/angular/1.2.9/angular.min.js',
        'src/cdn/angular/1.2.9/angular-mocks.js'
    ],
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    //    capabilities: {
    //	'browserName': 'pPantomJS',
    //    },

    capabilities: {
        'browserName': 'phantomjs',
        'phantomjs.binary.path': require('phantomjs').path,
        'phantomjs.cli.jargs': '--web-security=false'
    },


    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['../test/e2e/*-spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    baseUrl: 'http://127.0.0.1:9000/',
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: '/tmp/screenshots',
            takeScreenShotsOnlyForFailedSpecs: true,
            docTitle: 'protractor reporter'
        }));
        browser.driver.manage().window().setSize(1600, 800);
    }
};
