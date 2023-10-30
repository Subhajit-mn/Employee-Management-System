let editOption = {
    isEditing : false,
    rowElement : null
}

function onEditClick(event){
    const row = event.target.parentNode.parentNode;
    const cells = row.querySelectorAll("td");
    let employeeInfo = {
        name : cells[0].innerText,
        companyName : cells[1].innerText,
        salary : cells[2].innerText,
        gender : cells[3].innerText,
        email : cells[4].innerText,
        role : cells[5].innerText,
    }
    preFillForm(employeeInfo);

    editOption = {
        isEditing : true,
        rowElement : row
    }
    submitButton.innerText = "Update";
}

function preFillForm(employee){
    //takes an employee object and fills all the inputs inside form
    
    // form.name.value = employee.name;
    // form.companyName.value = employee.companyName;
    // form.salary.value = employee.salary;
    // form.gender.value = employee.gender;
    // form.email.value = employee.email;
    // form.role.value = employee.role;

    for(i in employee){
        form[i].value = employee[i];
    }
}

function editEmployee(employee){
    // edit the tr with new employee data

    const rowElement = editOption.rowElement;
    
    let cells = rowElement.querySelectorAll("td");
    cells[0].innerText = employee.name;
    cells[1].innerText = employee.companyName;
    cells[2].innerText = employee.salary;
    cells[3].innerText = employee.gender;
    cells[4].innerText = employee.email;
    cells[5].innerText = employee.role;

    submitButton.innerText = "Add Employee";

    // after editing we have to reset the editOption
    editOption = {
        isEditing : false,
        rowElement : null
    }
}