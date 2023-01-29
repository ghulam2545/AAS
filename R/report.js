// const sno = 99;
// const subjects = ["A", "A", "A", "A", "A"];
// const codes = ["P", "P", "P", "P", "P"];
// const helds = [9, 9, 9, 9, 9];
// const attends = [12, 12, 12, 12, 12];
// const month = "April";
// const perc = 70;

// function new_entry() {
//     let first_row = document.createElement("tr");

//     const sno_elem = document.createElement("td");
//     sno_elem.innerHTML = sno;

//     const subject_elem = document.createElement("td");
//     subject_elem.innerHTML = subjects[0];

//     const code_elem = document.createElement("td");
//     code_elem.innerHTML = codes[0];

//     const hels_elem = document.createElement("td");
//     hels_elem.innerHTML = helds[0];

//     const attend_elem = document.createElement("td");
//     attend_elem.innerHTML = attends[0];

//     const month_perc_elem = document.createElement("td");
//     month_perc_elem.innerHTML = `${month} <br> ${perc}`;

//     first_row.append(sno_elem);
//     first_row.append(subject_elem);
//     first_row.append(code_elem);
//     first_row.append(hels_elem);
//     first_row.append(attend_elem);
//     first_row.append(month_perc_elem);

//     const next_row = document.createElement("tr");
//     subject_elem = document.createElement("td");
//     subject_elem.innerHTML = subjects[0];

//     code_elem = document.createElement("td");
//     code_elem.innerHTML = codes[0];

//     hels_elem = document.createElement("td");
//     hels_elem.innerHTML = helds[0];

//     attend_elem = document.createElement("td");
//     attend_elem.innerHTML = attends[0];

//     return first_row;
// }

// const table = document.querySelector("table");
// const newEntry = new_entry();
// console.log(newEntry);

// table.appendChild(newEntry);

// table.appendChild(new_entry(99, ["sbcs"], ["fds"], [12], [9], "jan", 89));

// ==================================>>
/*
function new_elem(sno, name, rollno, subj, code, held, attend, perc) {
    const tr = document.createElement("tr");

    const sno_elem = document.createElement("td");
    sno_elem.innerHTML = sno;

    const subj_elem = document.createElement("td");
    subj_elem.innerHTML = subj;

    const code_elem = document.createElement("td");
    code_elem.innerHTML = code;

    const held_elem = document.createElement("td");
    held_elem.innerHTML = held;

    const attend_elem = document.createElement("td");
    attend_elem.innerHTML = attend;

    const perc_elem = document.createElement("td");
    // perc_elem.setAttribute('rowspan', '6');
    perc_elem.innerHTML = perc;

    tr.append(sno_elem);
    tr.append(subj_elem);
    tr.append(code_elem);
    tr.append(held_elem);
    tr.append(attend_elem);
    tr.append(perc_elem);

    return tr;
}

const table = document.querySelector("table");
for (let i = 1; i <= 45; ++i) {
    table.appendChild(
        new_elem(
            i,
            "Ghulam Mustafa",
            "19BTCS051HY",
            "Math",
            "ER01212",
            Math.floor(Math.random() * 100),
            Math.floor(Math.random() * 100)
        ),
        000
    );
}
*/

// ===============================================================================>>
/*
console.log("log to the console");

const subjects = [
    "Computer Networking",
    "Computer Networking",
    "Computer Networking",
    "Computer Networking",
    "Computer Networking",
];
const paper_codes = [
    "PCR10211",
    "PCR10211",
    "PCR10211",
    "PCR10211",
    "PCR10211",
];

function new_entry(sno, subjects, paper_codes, held, attend, month, perc) {
    const tr = document.createElement("tr");

    const sno_tag = document.createElement("td");
    // sno_tag.innerHTML = sno;
    // sno_tag.setAttribute("rowspan", subjects.length);

    for (let i = 0; i < subjects.length; ++i) {
        const subj_tag = document.createElement("td");
        subj_tag.innerHTML = subjects[i];
    }

    for (let i = 0; i < paper_codes.length; ++i) {
        const paper_code_tag = document.createElement("td");
        paper_code_tag.innerHTML = paper_codes[i];
    }

    const held_tag = document.createElement("td");
    held_tag.innerHTML = held;

    const attended_tag = document.createElement("td");
    attended_tag.innerHTML = attend;

    const month_tag = document.createElement("td");
    // merge both
    month_tag.innerHTML = month;
    month_tag.innerHTML = perc;

    tr.append(sno_tag);
    tr.append(subj_tag);
    tr.append(paper_code_tag);
    tr.append(held_tag);
    tr.append(attended_tag);
    tr.append(month_tag);

    const table = document.querySelector("table");
    table.appendChild(tr);
}

new_entry(1, 1, 1, 1, 1, 1, 2);

const action_btn = document.querySelector(".action-btn");
action_btn.addEventListener("click", () => {
    alert("don't alert me.");
});
*/
