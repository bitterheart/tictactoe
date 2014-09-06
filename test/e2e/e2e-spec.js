describe('homepage should load', function() {
    beforeEach(function(){
	browser.get('http://127.0.0.1:9000/index.html');
    });
    it('should load the page', function() {
	console.log('a');
	console.log('b');
	expect(element(by.css('h1')).getText()).toEqual('WTic Tac Toe');
	console.log('c');
    });
});
