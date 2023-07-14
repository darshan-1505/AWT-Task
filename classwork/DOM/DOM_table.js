// window.onload = function () {
//   //Build an array containing Customer records.
//   var customers = new Array();
//   customers.push([
//     "21ce019",
//     "Darshan",
//     "21ce019@charusat.edu.in",
//     "7043174511",
//     8.05,
//   ]);
//   customers.push([
//     "21ce038",
//     "Keval",
//     "21ce038@charusat.edu.in",
//     "1234567890",
//     8.54,
//   ]);
//   customers.push([
//     "21ce017",
//     "Omdutt",
//     "21ce017@charusat.edu.in",
//     "9876543210",
//     7.9,
//   ]);

//   // customers.unshift(["Martin", "Russia"]); //adds a new element to an array (at the beginning)
//   console.log(customers);

//   // customers.pop(); //method removes the last array element
//   //customers.shift();//removes the first element from an array:

//   //Add the data rows.
//   for (var i = 0; i < customers.length; i++) {
//     AddRow(
//       customers[i][0],
//       customers[i][1],
//       customers[i][2],
//       customers[i][3],
//       customers[i][4]
//     );
//   }
// };

// function Add() {
//   var name = document.getElementById("name");
//   var result = document.getElementById("result");
//   var email = document.getElementById("email");
//   var id = document.getElementById("id");
//   var phone = document.getElementById("phone");
//   if (
//     !id.value ||
//     !name.value ||
//     !email.value ||
//     !phone.value ||
//     !result.value
//   ) {
//     return;
//   }
//   AddRow(id.value, name.value, email.value, phone.value, result.value);
//   id.value = "";
//   name.value = "";
//   email.value = "";
//   phone.value = "";
//   result.value = "";
// }

// function Remove(button) {
//   console.log(button);
//   //Determine the reference of the Row using the Button.
//   var row = button.parentNode.parentNode;
//   console.log(row);
//   var name = row.getElementsByTagName("TD")[0].innerHTML;
//   if (confirm("Do you want to delete: " + name)) {
//     //Get the reference of the Table.
//     var table = document.getElementById("tblCustomers");

//     //Delete the Table row using it's Index.
//     table.deleteRow(row.rowIndex);
//   }
// }

// function Edit(button) {
//   console.log(button);

//   var row = button.parentNode.parentNode;
//   console.log(row);

//   var id = prompt("Enter the ID :");
//   var name = prompt("Enter the Name :");
//   var email = prompt("Enter the Email :");
//   var phone = prompt("Enter Phone number :");
//   var result = prompt("Enter Result :");
//   if (!id || !name || !email || !phone || !result) {
//     return;
//   }
//   row.getElementsByTagName("td")[0].innerHTML = id;
//   row.getElementsByTagName("td")[1].innerHTML = name;
//   row.getElementsByTagName("td")[2].innerHTML = email;
//   row.getElementsByTagName("td")[3].innerHTML = phone;
//   row.getElementsByTagName("td")[4].innerHTML = result;
// }

// function AddRow(id, name, email, result, phone) {
//   //Get the reference of the Table's TBODY element.
//   var tBody = document
//     .getElementById("tblCustomers")
//     .getElementsByTagName("TBODY")[0];

//   console.log(tBody);

//   //Add Row.
//   row = tBody.insertRow(-1);
//   console.log(row);

//   var cell = row.insertCell(-1);
//   cell.innerHTML = id;

//   cell = row.insertCell(-1);
//   cell.innerHTML = name;

//   cell = row.insertCell(-1);
//   cell.innerHTML = email;

//   cell = row.insertCell(-1);
//   cell.innerHTML = phone;

//   cell = row.insertCell(-1);
//   cell.innerHTML = result;

//   //Add Button cell.
//   cell = row.insertCell(-1);
//   var btnRemove = document.createElement("INPUT");
//   btnRemove.type = "button";
//   btnRemove.value = "Remove";
//   btnRemove.setAttribute("onclick", "Remove(this);");
//   cell.appendChild(btnRemove);

//   cell = row.insertCell(-1);
//   var btnEdit = document.createElement("INPUT");
//   btnEdit.type = "button";
//   btnEdit.value = "Edit";
//   btnEdit.setAttribute("onclick", "Edit(this);");

//   console.log(btnEdit);
//   cell.appendChild(btnEdit);
//   console.warn(btnEdit.parentNode);
// }

window.onload = function () {
  // Build an array containing Customer records.
  var customers = new Array();
  customers.push([
    "21ce019",
    "Darshan",
    "21ce019@charusat.edu.in",
    "7043174511",
    8.05,
  ]);
  customers.push([
    "21ce038",
    "Keval",
    "21ce038@charusat.edu.in",
    "1234567890",
    8.54,
  ]);
  customers.push([
    "21ce017",
    "Omdutt",
    "21ce017@charusat.edu.in",
    "9876543210",
    7.9,
  ]);

  console.log(customers);

  for (var i = 0; i < customers.length; i++) {
    AddRow(
      customers[i][0],
      customers[i][1],
      customers[i][2],
      customers[i][3],
      customers[i][4]
    );
  }
};

function Add() {
  var id = document.getElementById("id");
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var result = document.getElementById("result");

  if (
    !id.value ||
    !name.value ||
    !email.value ||
    !phone.value ||
    !result.value
  ) {
    return;
  }

  AddRow(id.value, name.value, email.value, phone.value, result.value);

  id.value = "";
  name.value = "";
  email.value = "";
  phone.value = "";
  result.value = "";
}

function Remove(button) {
  var row = button.parentNode.parentNode;
  var name = row.getElementsByTagName("TD")[1].innerHTML;

  if (confirm("Do you want to delete: " + name)) {
    var table = document.getElementById("tblCustomers");
    table.deleteRow(row.rowIndex);
  }
}

function Edit(button) {
  var row = button.parentNode.parentNode;

  var id = prompt("Enter the ID:");
  var name = prompt("Enter the Name:");
  var email = prompt("Enter the Email:");
  var phone = prompt("Enter Phone number:");
  var result = prompt("Enter Result:");

  if (!id || !name || !email || !phone || !result) {
    return;
  }

  row.getElementsByTagName("td")[0].innerHTML = id;
  row.getElementsByTagName("td")[1].innerHTML = name;
  row.getElementsByTagName("td")[2].innerHTML = email;
  row.getElementsByTagName("td")[3].innerHTML = phone;
  row.getElementsByTagName("td")[4].innerHTML = result;
}

function AddRow(id, name, email, phone, result) {
  var tBody = document
    .getElementById("tblCustomers")
    .getElementsByTagName("TBODY")[0];

  var row = tBody.insertRow(-1);

  var cell = row.insertCell(-1);
  cell.innerHTML = id;

  cell = row.insertCell(-1);
  cell.innerHTML = name;

  cell = row.insertCell(-1);
  cell.innerHTML = email;

  cell = row.insertCell(-1);
  cell.innerHTML = phone;

  cell = row.insertCell(-1);
  cell.innerHTML = result;

  cell = row.insertCell(-1);
  var btnRemove = document.createElement("INPUT");
  btnRemove.type = "button";
  btnRemove.value = "Remove";
  btnRemove.setAttribute("onclick", "Remove(this);");
  cell.appendChild(btnRemove);

  cell = row.insertCell(-1);
  var btnEdit = document.createElement("INPUT");
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.setAttribute("onclick", "Edit(this);");
  cell.appendChild(btnEdit);
}
