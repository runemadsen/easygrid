# EasyGrid

EasyGrid is a simple JavaScript utility that allows you to create an in-memory grid and get the positions of each module in the grid. It can automatically calculate module sizes based on an overall width and height, or calculate the overall width and height based on the module sizes. It supports module gutters, it works in both Node.js and the browser, and it's less than 1kb minified.

## Getting Started

```js
// This line is only needed for Node.js
var EasyGrid = require('easygrid');

var myGrid = new EasyGrid({ ... });
var myModule = myGrid.getModule(1, 1);
console.log(myModule) // -> { x:.., y:.., width:.., height:.. }
```

## Options

- `x` - Number. The x position of the grid
- `y` - Number. The y position of the grid
- `columns` - Number. Defines the number of columns in the grid. Defaults to 10.
- `rows` - Number. Defines the number of rows in the grid. Defaults to 1
- `gutterWidth` - Number. Defines the width of the space between modules
- `gutterHeight` - Number. Defines the height of the space between modules
- `gutter` - Number. Shorthand way to define the same gutter width and height
- `moduleWidth` - Number. Defines the width of each module in the grid
- `moduleHeight` - Number. Defines the height of each module in the grid
- `width` - Number. Defines the full width of the grid, including the gutter and module widths. Do not use with `moduleWidth`.
- `height` - Number. Defines the full height of the grid, including the gutter and module heights. Do not use with `moduleheight`.

## Usage examples

EasyGrid is very flexible, and can be created using a combination of parameters. Here's a simple grid where the module width and height are calculated automatically based on the grid width and height.

```js
var grid = new EasyGrid({
  x: 10,
  y: 10,
  width: 500,
  height: 500,
  gutter: 10,
  columns: 10,
  rows: 2
});
```

Here is the opposite example where the overall width and height of the grid is calculated based on the module width and height. The code below will create the exact same grid as the code above.

```js
var grid = new EasyGrid({
  x: 10,
  y: 10,
  moduleWidth: 50,
  moduleHeight: 500,
  gutter: 10,
  columns: 3,
  rows: 2
});
```
