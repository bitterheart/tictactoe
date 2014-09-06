(function(){
    var ptor;
    describe('homepage', function() {
	beforeEach(function() {
	    ptor = protractor.getInstance();
	    ptor.ignoreSynchronization = true;
	    browser.get('http://127.0.0.1:9000/');
	});
	rit('should load the page', function() {
	    expect(element(by.css('h1'))).toEqual('WTic Tac Toe');
	});
    });
})();
