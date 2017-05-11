require('lodash');

function testObj() {
	this.testProp1 = "one";
	this.testProp2 = 4;
}


var testLodash = _.reverse([1,2,3]);


testObj.prototype.testMethod = function(){}

var testVarOne = 1;
var testVarTwo = "two";
var testVarMethod = function(){}
var testObject = new testObj();

seven = testObject.testProp1 + testObject.testProp2 + testVarOne;
