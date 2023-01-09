var selectedRow = null

function onFormSubmit(){
    if (validate()){
        var formdata = readFormData();
        if (selectedRow == null)
        insertNewRecord(formdata);
        else updateRecord(formdata);
        resetForm(); 
    }
}
function readFormData(){
    var formdata ={};
    formdata["fullname"] = document.getElementById('fullname').value;
    formdata["email"] = document.getElementById('email').value;
    formdata["salary"] = document.getElementById('salary').value;
    formdata["city"] = document.getElementById('city').value;
    return formdata;
}
function insertNewRecord(data){
    var table = document.getElementById('employeelist').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.email;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.salary;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML = data.city;
    cell1 = newRow.insertCell(4);
    cell1.innerHTML = `<a onClick = "onEdit(this)">Edit</a>
                        <a onClick= "onDelete(this)">Delete</a>`;
}
function resetForm(){
    document.getElementById('fullname').value= "" ;
    document.getElementById('email').value= "" ; 
    document.getElementById('salary').value= "" ;
    document.getElementById('city').value= "" ;
    selectedRow = null ;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fullname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value =selectedRow.cells[1].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
    document.getElementById('city').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formdata){
    selectedRow.cells[0].innerHTML = formdata.fullname;
    selectedRow.cells[1].innerHTML = formdata.email;
    selectedRow.cells[2].innerHTML = formdata.salary;
    selectedRow.cells[3].innerHTML = formdata.city;
}
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById("employeelist").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){
    isValid = true;
    if (document.getElementById('fullname').value== ""){
        isValid = false;
        document.getElementById("fullnamevalidationerror").classList.add("hide");
    }
    else{
        isValid = true;
        if(!document.getElementById("fullnamevalidationerror").classList.contains("hide"))
           document.getElementById("fullnamevalidationerror").classList.add("hide");
    }
    return isValid;
}