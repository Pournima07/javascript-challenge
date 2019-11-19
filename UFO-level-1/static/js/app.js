// from data.js
var tableData = data;
console.log(data);

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// define function to show data
function showdata(datatbl) {

    datatbl.forEach((rowdata)=>{
        console.log(rowdata);
        // [date_time,city,state,country,shape,duration,comments]
        var row = tbody.append("tr");
        Object.entries(rowdata).forEach(([key,value])=>{
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
        })
    });    
}

// now call  the function with full table
showdata(tableData);

// function to clear the data table
function clearData() {
    tbody.selectAll("tr").remove();
}

var button = d3.select("#filter-btn");
button.on("click", function() {
    var inputElement = d3.select ("#datetimeinput");
    var inputValue = inputElement.property("value");    
    console.log(inputValue);

    clearData();

    if (inputValue == "") {
        showdata(tableData);
    } 
    else {
        var filterData = tableData.filter((sighting) => sighting.datetime === inputValue);
        console.log(filterData);
        showdata(filterData);
    }

});
