describe('homepage should load', function() {
    it('should load the page', function() {
	console.log('a');
	browser.get('http://127.0.0.1:9000/index.html');
	console.log('b');
	expect(element(by.css('h1')).getText()).toEqual('WTic Tac Toe');
	console.log('c');
    });
});
