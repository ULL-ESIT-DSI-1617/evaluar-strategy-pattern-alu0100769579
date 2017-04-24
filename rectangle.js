"use strict";
var shape = require('./shape.js');

class Rectangle extends shape {
  constructor(options){
    super(options);
    this.width = this.options.width;
    this.height = this.options.height;
  }

  getArea() {
    return this.width * this.height;
  }
}

shape.shapes.Rectangle = Rectangle;