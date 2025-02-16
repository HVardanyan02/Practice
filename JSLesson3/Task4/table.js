function createTable() {
    let rows = parseInt(prompt("Enter number of rows:", "3"));
    let cols = parseInt(prompt("Enter number of columns:", "3"));

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    let table = document.getElementById("myTable");
    table.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();

        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}