// from data.js
var tableData = data;
var el = document.getElementById("table-content");

// YOUR CODE HERE!
tableData.forEach(row => {
    nRow = el.insertRow(-1);
    let cell1 = nRow.insertCell(0);
    let cell2 = nRow.insertCell(1);
    let cell3 = nRow.insertCell(2);
    let cell4 = nRow.insertCell(3);
    let cell5 = nRow.insertCell(4);
    let cell6 = nRow.insertCell(5);
    let cell7 = nRow.insertCell(6);
    let date_time = document.createTextNode(row.datetime);
    let city = document.createTextNode(row.city);
    let state = document.createTextNode(row.state);
    let country = document.createTextNode(row.country);
    let shape = document.createTextNode(row.shape);
    let durationMinutes = document.createTextNode(row.durationMinutes);
    let comments = document.createTextNode(row.comments);

    cell1.appendChild(date_time);
    cell2.appendChild(city);
    cell3.appendChild(state);
    cell4.appendChild(country);
    cell5.appendChild(shape);
    cell6.appendChild(durationMinutes);
    cell7.appendChild(comments);
    
});

function Filters(){
    event.preventDefault();
    let date_time = document.getElementById("datetime").value;

    //clear table content
    el.innerHTML= "";

    tableData.forEach(row => {
        if (date_time === ""){
            //render new content
            nRow = el.insertRow(-1);
            let cell1 = nRow.insertCell(0);
            let cell2 = nRow.insertCell(1);
            let cell3 = nRow.insertCell(2);
            let cell4 = nRow.insertCell(3);
            let cell5 = nRow.insertCell(4);
            let cell6 = nRow.insertCell(5);
            let cell7 = nRow.insertCell(6);
            let date_time = document.createTextNode(row.datetime);
            let city = document.createTextNode(row.city);
            let state = document.createTextNode(row.state);
            let country = document.createTextNode(row.country);
            let shape = document.createTextNode(row.shape);
            let durationMinutes = document.createTextNode(row.durationMinutes);
            let comments = document.createTextNode(row.comments);

            cell1.appendChild(date_time);
            cell2.appendChild(city);
            cell3.appendChild(state);
            cell4.appendChild(country);
            cell5.appendChild(shape);
            cell6.appendChild(durationMinutes);
            cell7.appendChild(comments);
        }else if (row.datetime === date_time) {
            //render new content
            nRow = el.insertRow(-1);
            let cell1 = nRow.insertCell(0);
            let cell2 = nRow.insertCell(1);
            let cell3 = nRow.insertCell(2);
            let cell4 = nRow.insertCell(3);
            let cell5 = nRow.insertCell(4);
            let cell6 = nRow.insertCell(5);
            let cell7 = nRow.insertCell(6);
            let date_time = document.createTextNode(row.datetime);
            let city = document.createTextNode(row.city);
            let state = document.createTextNode(row.state);
            let country = document.createTextNode(row.country);
            let shape = document.createTextNode(row.shape);
            let durationMinutes = document.createTextNode(row.durationMinutes);
            let comments = document.createTextNode(row.comments);

            cell1.appendChild(date_time);
            cell2.appendChild(city);
            cell3.appendChild(state);
            cell4.appendChild(country);
            cell5.appendChild(shape);
            cell6.appendChild(durationMinutes);
            cell7.appendChild(comments);
        };
    });

    if (el.childElementCount === 0){
        //render new content
        nRow = el.insertRow(-1);
        let cell1 = nRow.insertCell(0);
        let date_time = document.createTextNode("There is no data for the date entered or it was entered in the wrong format.");
        cell1.appendChild(date_time);
    };
};