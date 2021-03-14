// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

function buildTable(data){
    // Clear out any existing data
    tbody.html("");

    // Loop through each object in the data 
    data.forEach((dataRow) => {
        // Append a row and cells for each value in the row
        let row = tbody.append("tr");
        // Loop through each field in the dataRow
        Object.values(dataRow).forEach((val) => {
            // Append value of the object to a cell in the table
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}