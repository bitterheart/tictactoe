describe('homepage should load', function() {
    beforeEach(function(){
	browser.driver.get('http://127.0.0.1:9000/index.html');
    });
    it('should load the page', function() {
	expect(element(by.css('h1')).getText()).toEqual('WTic Tac Toe');
    });
});
