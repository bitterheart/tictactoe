describe('tic tac toe', function() {
    beforeEach(function(){
	var hasClass = function (element, cls) {
	    return element.getAttribute('class').then(function (classes) {
		return classes.split(' ').indexOf(cls) !== -1;
	    });
	};
	browser.driver.get('http://127.0.0.1:9000/index.html');
    });
    it('should have a title', function(){
	expect(element(by.css('h1')).getText()).toEqual('Tic Tac Toe');
    });
    it('should have a grid with three rows',function(){
	expect(element.all(by.css('div.grid div.row')).count()).toEqual(3);
    });
    it('each row should have three columns',function(){
	element.all(by.css('div.grid div.row')).then(function(rows){
	    rows.forEach(function(row){
		expect(row.element(by.css('div.col')).count()).toEqual(3);
	    });
	});
    });
    it('each cell should initially be open',function(){
	element.all(by.css('div.grid div.row div.col')).then(function(cells){
	    cells.forEach(function(cell){
		expect(hasClass(cell),'open').toEqual(true);
	    });
	});
    });
});
