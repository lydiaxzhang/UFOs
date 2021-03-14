// Import the data from data.js
const tableData = data;

// Reference the HTML table using D3
var tbody = d3.select("tbody");

// buildTable function
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

// handleClick function
function handleClick() {
    // Get datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check if a date was entered and filter using the date
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    buildTable(filteredData);
};

// Listen for the "Click" event
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the final table
buildTable(tableData);
