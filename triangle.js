"use strict";
var shape = require('./shape.js');

class Triangle extends shape {
  constructor(options){
    super(options);
    this.width = this.options.width;
    this.height = this.options.height;
  }

  getArea() {
    return 0.5 * this.width * this.height;
  }
}

shape.shapes.Triangle = Triangle;