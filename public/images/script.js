
let myTable = document.querySelector('#table');


let employees = [
    { sno:1,Subject: 'Machine Learning', Paper_Code: 'PBS123', Classes_held: 6, Classes_attended: 3, Month: 'JANUARY' },
    { Subject: 'Artifical Intelligence', Paper_Code: 'PBS123', Classes_held: 6, Classes_attended: 4 },
    { Subject: 'PPR', Paper_Code: 'PBS123', Classes_held: 6, Classes_attended: 3 },
    { Subject: 'Machine Learning', Paper_Code: 'PBS123', Classes_held: 6, Classes_attended: 2 },
    { Subject: 'IOT', Paper_Code: 'PBS143', Classes_held: 8, Classes_attended: 7 },
    { Subject: 'DSA', Paper_Code: 'PBS123', Classes_held: 10, Classes_attended: 8 },
    { Subject: 'Java', Paper_Code: 'PBS133', Classes_held: 10, Classes_attended: 9 },
]


let sum1 = 0;
let sum2 = 0;
Object.keys(employees).forEach(key => {
    sum1 = sum1 + employees[key].Classes_attended;
    sum2 = sum2 + employees[key].Classes_held;
});
let percentage = (sum1 / sum2) * 100;
percentage=(Math.round(percentage * 100) / 100).toFixed(2);


let last = { Subject: 'Total', Classes_held: sum2, Classes_attended: sum1, Month: percentage };
employees.push(last);


let headers = ['S.No', 'Subject', 'Paper Code', 'Classes Held', 'Classes Attended', 'Month&Percentage'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);

employees.forEach(emp => {
    let row = document.createElement('tr');

    Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        // let textNode = document.createTextNode(text);

        cell.innerHTML = text;
        row.appendChild(cell);
    })

    table.appendChild(row);
});

myTable.appendChild(table);




//for total
table.rows[employees.length].cells[0].colSpan = 2;

//for seriol number
table.rows[1].cells[0].rowSpan = employees.length;

//for month
table.rows[1].cells[5].rowSpan = employees.length-1;

table.rows[employees.length].cells[0].style.fontWeight="bold";

table.rows[employees.length].cells[1].style.fontWeight="bold";

table.rows[employees.length].cells[2].style.fontWeight="bold";

table.rows[employees.length].cells[3].style.fontWeight="bold";

table.rows[1].cells[5].style.fontWeight="bold";





let employees2 = [
    
    {sno:2, Subject: 'Artifical Intelligence', Paper_Code: 'PBS123', Classes_held: 6, Classes_attended: 3,Month: 'FEBRUARY' },
    { Subject: 'PPR', Paper_Code: 'PBS123', Classes_held: 6, Classes_attended: 5 },
    { Subject: 'Machine Learning', Paper_Code: 'PBS123', Classes_held: 6, Classes_attended: 4 },
    { Subject: 'IOT', Paper_Code: 'PBS143', Classes_held: 8, Classes_attended: 6},
    { Subject: 'DSA', Paper_Code: 'PBS123', Classes_held: 10, Classes_attended: 9 },
    { Subject: 'Java', Paper_Code: 'PBS133', Classes_held: 10, Classes_attended: 9 },
]


let sum11 = 0;
let sum22 = 0;
Object.keys(employees2).forEach(key => {
    sum22 = sum22 + employees2[key].Classes_held;
    sum11 = sum11 + employees2[key].Classes_attended;
});
let percentage1 = (sum11 / sum22) * 100;
percentage1=(Math.round(percentage1 * 100) / 100).toFixed(2);


let last1 = { Subject: 'Total', Classes_held: sum22, Classes_attended: sum11, Month: percentage1 };
employees2.push(last1);


employees2.forEach(emp => {
    let row = document.createElement('tr');

    Object.values(emp).forEach(text => {
        let cell = document.createElement('td');
        cell.innerHTML = text;
        row.appendChild(cell);
    })

    table.appendChild(row);
});

myTable.appendChild(table);




//for total
table.rows[employees2.length+employees.length].cells[0].colSpan = 2;

//for seriol number
table.rows[9].cells[0].rowSpan = employees2.length;

//for month
table.rows[employees.length+1].cells[5].rowSpan = employees2.length-1;

table.rows[employees2.length+employees.length].cells[0].style.fontWeight="bold";

table.rows[employees2.length+employees.length].cells[1].style.fontWeight="bold";

table.rows[employees2.length+employees.length].cells[2].style.fontWeight="bold";

table.rows[employees2.length+employees.length].cells[3].style.fontWeight="bold";


table.rows[employees.length+1].cells[5].style.fontWeight="bold";

