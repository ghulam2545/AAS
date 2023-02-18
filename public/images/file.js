
let myTable = document.querySelector('#table');


let employees = [
    {Name:'Mohd Shafi',Roll_no:'19BTCS004HY',view:'View Status'},
    {Name:'Ghulam Mustafa',Roll_no:'19BTCS054HY',view:'View Status'},
    {Name:'Haris',Roll_no:'19BTCS032HY',view:'View Status'},
    {Name:'Syed Salman Ali',Roll_no:'19BTCS033HY',view:'View Status'},
    {Name:'Syed Zishan',Roll_no:'19BTCS047HY',view:'View Status'},
    {Name:'Fazal',Roll_no:'19BTCS063HY',view:'View Status'},
]


employees.forEach(emp => {
    let row = document.createElement('tr');

    Object.values(emp).forEach(text => {
        let cell = document.createElement('th');
        // let textNode = document.createTextNode(text);
        if(text=='View Status'){
            cell.innerHTML="<button id='btn';>View</button>";
            row.appendChild(cell);
        }
        else{
        cell.innerHTML = text;
        row.appendChild(cell);
        }
    })

    table.appendChild(row);
});

myTable.appendChild(table);