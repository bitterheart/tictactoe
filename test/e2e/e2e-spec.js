"strict;"
describe('tic tac toe', function() {
	beforeEach(function() {
		browser.get('http://127.0.0.1:9000/index.html');
	});
	it('should have a title', function() {
		expect(element(by.css('h1')).getText()).toEqual('Tic Tac Toe');
	});
});
