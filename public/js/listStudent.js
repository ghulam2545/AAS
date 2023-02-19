// const studentController = require("../../controllers/StudentController");

// const studentList = studentController.readAll();
// console.log(studentController.studentList);

// async function func() {
//     const studentList = await readAll();

//     console.log(studentList);
// }

// func();
// dummy test file

// async function readAll(req, res, next) {
//     let studentList;
//     try {
//         const result = await Student.find({ year: 4 }, {});
//         studentList = result;
//         res.send(result);
//     } catch (err) {
//         res.send(err);
//     }
//     return studentList;
// }

const people = [
    {
        name: "Ghulam Mustafa",
        rollno: "19BTCS001HY",
    },
    {
        name: "Adil Masood",
        rollno: "19BTCS002HY",
    },
    {
        name: "Mohd Waqar Hashim",
        rollno: "19BTCS003HY",
    },
    {
        name: "Mohd Shafi",
        rollno: "19BTCS004HY",
    },
    {
        name: "Mohd Ahsan",
        rollno: "19BTCS005HY",
    },
    {
        name: "Mohd Ahmad",
        rollno: "19BTCS006HY",
    },
];

function new_user(sno, name, rollno) {
    const new_tr = document.createElement("tr");
    const new_sno = document.createElement("td");
    const new_name = document.createElement("td");
    const new_rollno = document.createElement("td");
    const new_status = document.createElement("td");
    const new_input = document.createElement("input");

    new_sno.innerText = sno;
    new_name.innerText = name;
    new_rollno.innerText = rollno;
    new_input.setAttribute("type", "checkbox");

    new_status.append(new_input);

    new_tr.append(new_sno);
    new_tr.append(new_name);
    new_tr.append(new_rollno);
    new_tr.append(new_status);

    return new_tr;
}

const table = document.querySelector("table");

for (let i = 1; i <= people.length; ++i) {
    const user = new_user(i, people[i - 1].name, people[i - 1].rollno);
    table.appendChild(user);
}

const btns = document.querySelector(".all-btns");

for (let i = 1; i <= people.length; ++i) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btns.appendChild(btn);
}
