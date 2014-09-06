describe('homepage should load', function() {
    it('should load the page', function() {
	browser.get('index.html');
	expect(element(by.css('h1'))).toEqual('WTic Tac Toe');
    });
});
