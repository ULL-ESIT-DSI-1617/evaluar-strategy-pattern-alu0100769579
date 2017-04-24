"use strict";
var shape = require('./shape.js');

class Square extends shape {
  constructor(options){
    super(options);
    this.width = this.options.width;
  }

  getArea() {
    return Math.pow(this.width, 2);
  }
}

shape.shapes.Square = Square;