const btn = document.querySelector('.btn');
btn.addEventListener('click', cb(4, 3));

function cb(column, row) {
    return function renderTable() {

        const body = document.getElementsByTagName("body")[0];
        const tbl = document.createElement("table");
        tbl.id = "tbl";

        const tblBody = document.createElement("tbody");
        for (let i = 1; i <= row; i++) {
            const row = document.createElement("tr");
            for (let j = 1; j <= column; j++) {
                let tdText = (i - 1) * column + j;
                const cell = document.createElement("td");
                cell.addEventListener('click', (event) => {
                    alert(` ${event.target.innerText} item of cell was clicked`);

                });
                let cellText = document.createTextNode(`${tdText}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        body.appendChild(tbl);
        tbl.setAttribute("border", "1");
    }
}

const alertNumOfCell = (event) => {
    alert(` ${event.target.innerText} item of cell was clicked`);
}