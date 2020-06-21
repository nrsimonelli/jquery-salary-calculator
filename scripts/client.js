console.log('client online');

const employeeArray = [];

$(document).ready(onReady);

function onReady(){
    console.log('jQ online');
    clickListen();
    

} // end onReady


function clickListen() {
    $('#submitButton').on('click', pushData);
    $('.deleteButton').on('click', removeData);
    
} // end clickListen

function pushData() {
    // object creation
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

    // puts data in table
    runTable(employeeArray);

    return true;
} // end pushData

function runTable(employeeArray) {
    //clear table and budget
    $('.mainTable').empty();
    $('#cost').empty();

    let sumOfSalary = 0    
    // loop through array and display data in table
    for (let i = 0; i < employeeArray.length; i++) {
        let tableEntry = 
            `<tr>
                <td>${employeeArray[i].first}</td>
                <td>${employeeArray[i].last}</td>
                <td>${employeeArray[i].id}</td>
                <td>${employeeArray[i].title}</td>
                <td>${employeeArray[i].salary}</td>
                <td><button class="deleteButton">Delete</button></td>

            </tr>`;

        $('.mainTable').append(tableEntry);

        sumOfSalary += Number(employeeArray[i].salary / 12);

    }
    $('#cost').append(roundNumber(sumOfSalary));

    $('.deleteButton').on('click', removeData);

    checkColor(sumOfSalary);

    return true;
} // end runTable

function roundNumber(x){
    return Number.parseFloat(x).toFixed(2);
}

function removeData() {
    console.log('clicked delete');
    $('.deleteButton').closest("tr").remove();
    
    
    
} // end removeData

function checkColor(sumOfSalary) {
    if ( sumOfSalary <= 20000){
        $('.flag').css("background-color","blue");
        
    }else{
        $('.flag').css("background-color","red");
    }
    
}


//handle click event
//event.preventDefault();

