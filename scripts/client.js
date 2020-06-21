console.log('client online');

const employeeArray = [];

$(document).ready(onReady);

function onReady(){
    console.log('jQ online');
    clickListen();

}


function clickListen() {
    $('#submitButton').on('click', pushData);
    $('#deleteButton').on('click', removeData);

    
}   

function pushData() {
    const newEntry = {
        first: $('#firstName').val(),
        last: $('#lastName').val(),
        id: $('#idNumber').val(),
        title: $('#jobTitle').val(),
        salary: $('#annualSalary').val()
    }

    // push to array
    employeeArray.push(newEntry);

    // clears input fields
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');

    return true;
}

function removeData() {
    
}


//handle click event
//event.preventDefault();

