// function to create tables and populate the tables
  function populateTable(tableId, data, columns) {
    let tableBody = document.querySelector(`#${tableId} tbody`); // Get the table body element by its id

    // create a new row element for each row in the data array
    data.forEach((row) => {
      let rowElement = document.createElement("tr"); // Create a new row element
      
      // Create a new column element for each column in the current row
      columns.forEach((column) => {
        let columnElement = document.createElement("td"); // Create a new column element
        columnElement.textContent = row[column]; // Set the text content of the column element to the value of the current row's column
        rowElement.appendChild(columnElement); // Append the column element to the row element
      });

      tableBody.appendChild(rowElement); // Append the row element to the table body
    });
  }

  // Populate the tables
 populateTable("inventory-table", inventoryData, ["item", "quantity"]);
 populateTable("sales-table", salesData, ["item", "quantity", "amount"]);
 populateTable("procurements-table", procurementsData, ["item", "quantity", "cost"]);   


//  fetch("data.json")