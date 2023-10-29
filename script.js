
const tbody = document.querySelector("tbody");
const form = document.querySelector("form");

function deleteRecord(event){
    const buttonRef = event.target;
    const row = buttonRef.parentNode.parentNode;
    row.remove();
}

function addEmployee(employee){

    //takes an employee object and add it to the table
    const tr = document.createElement("tr");
    for(let key in employee){
        const td = document.createElement("td");
        td.innerText = employee[key];
        tr.appendChild(td);
    }

    //<td><button></button></td>
    const options = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";

    deleteButton.addEventListener("click", deleteRecord);
    options.appendChild(deleteButton);
    tr.appendChild(options);
    tbody.appendChild(tr);
}

function onSubmitForm(event){
    event.preventDefault();
    let employeeData = {
        name : form["name"].value,
        companyName : form["companyName"].value,
        salary : form["salary"].value,
        gender : form["gender"].value,
        email : form["email"].value,
        role : form["role"].value
    }
    addEmployee(employeeData);
    form.reset();
}

form.addEventListener("submit", onSubmitForm);