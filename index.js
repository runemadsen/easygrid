(function() {

  var EasyGrid = function(options) {

    var req = Object.assign({
      x:0,
      y:0,
      columns:10,
      rows:1,
      gutterWidth: 0,
      gutterHeight: 0,
      moduleWidth:50,
      moduleHeight:500
    }, options);

    // if gutter is set, override gutterWidth and gutterHeight
    if(typeof req.gutter !== 'undefined') {
      req.gutterWidth = req.gutter;
      req.gutterHeight = req.gutter;
    }

    // if width is set, override moduleWidth
    if(typeof req.width !== 'undefined') {
      req.moduleWidth = (req.width - ((req.columns-1) * req.gutterWidth)) / req.columns;
    } else {
      req.width = (req.moduleWidth * req.columns) + (req.gutterWidth * (req.columns-1))
    }

    // if height is set, override moduleHeigt
    if(typeof req.height !== 'undefined') {
      req.moduleHeight = (req.height - ((req.rows-1) * req.gutterHeight)) / req.rows;
    } else {
      req.height = (req.moduleHeight * req.rows) + (req.gutterHeight * (req.rows-1))
    }

    // Compute the grid
    this.state = req;
    this.modules = [];
    for(var y = 0; y < req.rows; y++) {
      for(var x = 0; x < req.columns; x++) {
        this.modules.push({
          x: req.x + (x * req.moduleWidth) + (x * req.gutterWidth),
          y: req.y + (y * req.moduleHeight) + (y * req.gutterHeight),
          width: req.moduleWidth,
          height: req.moduleHeight
        });
      }
    }

  }

  EasyGrid.prototype.getModule = function(column, row){
    var index = (column-1) + ((row-1) * this.state.columns)
    if(this.modules[index]) {
      return this.modules[index]
    }
    else {
      throw new Error('The column or row does not exist');
    }
  }

  // Export for Node.js
  if(typeof module !== 'undefined' && module.exports) {
    module.exports = EasyGrid;
  }
  // Export for browser
  else {
    this.EasyGrid = EasyGrid;
  }

}.call(this));
