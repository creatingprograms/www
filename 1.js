"use strict";

var number = 0;
function getNext() {
if (number === "End") {
location.reload(); 
} else {
const list1 = [1, 8, 15, 16, 35];
const list2 = [2, 7, 12, 40];
const list3 = [10, 13, 14];
const arr = [list1, list2, list3];
var arrNumbers = new Array();
arr.forEach(function(item, index, arr) {
var filtered = item.filter(function(x, y) {
return x > number;
});
var filteredNew = Math.min.apply(Math, filtered); 
arrNumbers.push(filteredNew);
});
var minValue = Math.min.apply(Math, arrNumbers); 
if (isFinite(minValue)) {
number = minValue;
console.log(number);
} else {
number = "End";
console.log(number);
}
}
}

