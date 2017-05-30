describe("EasyGrid", function() {

  var EasyGrid = require('../index');
  var grid;
  beforeEach(function() {
    grid = new EasyGrid({
      x: 10,
      y: 10,
      width: 500,
      height: 500,
      gutter: 10,
      columns: 10,
      rows: 2
    });
  });

  it("should give back correct position of first module", function() {
    var myModule = grid.getModule(1, 1);
    expect(myModule.x).toEqual(10);
    expect(myModule.y).toEqual(10);
    expect(myModule.width).toEqual(41);
    expect(myModule.height).toEqual(245);
  });

});
