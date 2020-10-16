function onFormSubmit(){

    var formData = readFormData();
    insertNewRecords(formData);
}

function readFormData(){
    var formData = {};
    formData["first_name"] = document.getElementById("first_name").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["email_address"] = document.getElementById("email_address").value;
    formData["contact_subject"] = document.getElementById("contact_subject").value;
    formData["Message"] = document.getElementById("Message").value;
    return formData;

}

function insertNewRecords(data){
    var table = document.getElementById("messageList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);

    cell1 =newRow.insertCell(0);
    cell1.innerHTML = data.first_name;
    cell2 =newRow.insertCell(1);
    cell2.innerHTML = data.contact_subject;
    cell3 =newRow.insertCell(2);
    cell3.innerHTML = data.Message;
}