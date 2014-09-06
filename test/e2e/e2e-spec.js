describe('homepage', function() {
    beforeEach(function() {
	browser.get('http://127.0.0.1:9000/index.html');
    });
    rit('should load the page', function() {
	expect(element(by.css('h1'))).toEqual('WTic Tac Toe');
    });
});
