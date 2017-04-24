var getArea = require("../shapesarea.js");

require('../triangle.js');
require('should');

describe("getArea", function() {
  it("must compute the triangle area correctly", function() {
    var result = getArea.getArea('Triangle',  { width: 100, height: 100 });
    /* There is a white space between consecutive columns */
    result.should.match(/^5000$/);
  })
});
