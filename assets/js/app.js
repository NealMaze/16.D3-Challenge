import * from helpers.js

//////////////////////////////////////////////////////////////////////////////////////////////////////

var svgWidth = 960;
var svgHeight = 500;

var margin = {
    top: 20,
    right: 40,
    bottom: 80,
    left: 100
};

var wdt = svgWidth - margin.left - margin.right;
var hgt = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chGp = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

var selX = "poverty";
var selY = "healthcare";

////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////////////////////

d3.csv("./assets/data/data.csv").then(function(data){
    data.forEach(d => {
        d.obesity = +d.obesity;
        d.smokes = +d.smokes;
        d.healthcare = +d.healthcare;
        d.poverty = +d.poverty;
        d.age = +d.age;
        d.income = +d.income;
    });

}).catch(function(error){
    
});