describe('homepageafdsfads', function() {
    beforeEach(function() {
	browser.get('index.html');
    });
    it('should load the page', function() {
	expect(element(by.css('h1'))).toEqual('WTic Tac Toe');
    });
});
