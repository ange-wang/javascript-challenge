// from data.js
var tableData = data;

console.log(tableData)

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#form");

function ufoSighting(data) {
    tbody.html("");
    data.forEach(trow => {
        const row = tbody.append("tr");
        Object.values(trow).forEach(function(value) {
            var cell = row.append("td");
            cell.text(value);
        });
    }); 
};


function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);
    ufoSighting(filteredData);
};

button.on("click", runEnter);
form.on("submit", runEnter);

ufoSighting(tableData);