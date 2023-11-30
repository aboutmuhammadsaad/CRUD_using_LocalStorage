let items = JSON.parse(localStorage.getItem("items")) || [];

function displayItems() {
  const itemsTable = document.getElementById("itemsTable");
  itemsTable.innerHTML = "";
  if (items.length == 0) {
    itemsTable.innerHTML = "";
  } else {
    const thead = document.createElement("thead");
    thead.innerHTML = ` 
    <tr>
    <th scope="col">#</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col">date</th>
    <th scope="col">gender</th>
    <th scope="col">vehicle</th>
    <th scope="col">Action</th>
    </tr>`;
    itemsTable.appendChild(thead);
    const tbody = document.createElement("tbody");
    tbody.innerHTML = ``;
    itemsTable.appendChild(tbody);
    items.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${index}</td>
        <td>${item.firstName}</td> 
        <td>${item.lastName}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.date}</td>
        <td>${item.gender}</td>
        <td>${item.vehicle}</td>
        <td>
        <button type="button" class="btn btn-primary bg-primary " data-bs-toggle="modal" data-bs-target="#updateModal" onclick="editItem(${index})">Edit</button>
        <button class="btn btn-info bg-info" onclick="deleteItem(${index})">Del</button>
        </td>      
      `;
      itemsTable.appendChild(tr);
    });
  }
}

function addItem(event) {
  event.preventDefault();

  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const vehicle = checkbox();
  const gender = radio();

  let status = true;
  if (firstName == "" && isNumeric(firstName) == false) {
    document.getElementById("errorfirstname").innerHTML =
      "Please enter first name";
    status = false;
  } else {
    document.getElementById("errorfirstname").innerHTML = " ";
  }

  if (lastName == "" && isNumeric(lastName) == false) {
    document.getElementById("errorlastname").innerHTML =
      "Please enter Last name";
    status = false;
  } else {
    document.getElementById("errorlastname").innerHTML = " ";
  }

  if (email == "" && isNumeric(email) == false) {
    document.getElementById("erroremail").innerHTML =
      "Please enter valid email address";
    status = false;
  } else {
    document.getElementById("erroremail").innerHTML = " ";
  }

  if (phone == "" && isNumeric(phone) == false) {
    document.getElementById("errorphone").innerHTML =
      "Please enter Valid phone number";
    status = false;
  } else {
    document.getElementById("errorphone").innerHTML = " ";
  }

  if (gender == "") {
    document.getElementById("errorgender").innerHTML = "Please select gender.";
    status = false;
  } else {
    document.getElementById("errorgender").innerHTML = " ";
  }

  if (date == "") {
    document.getElementById("errordate").innerHTML = "Please select Date.";
    status = false;
  } else {
    document.getElementById("errordate").innerHTML = " ";
  }

  if (vehicle == "") {
    document.getElementById("errorvehicle").innerHTML =
      "Please select vehicle.";
    status = false;
  } else {
    document.getElementById("errorvehicle").innerHTML = " ";
  }

  if (status == true) {
    const newItem = {
      firstName,
      lastName,
      email,
      phone,
      date,
      gender,
      vehicle,
    };
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
    document.getElementById("modalform").reset();
    displayItems();
  }
}
function editItem(index) {
  document.getElementById("idd").value = index;
  document.getElementById("fname").value = items[index].firstName;
  document.getElementById("lname").value = items[index].lastName;
  document.getElementById("em").value = items[index].email;
  document.getElementById("ph").value = items[index].phone;
  document.getElementById("dte").value = items[index].date;
  cbvalue();
  rdvalue();
  function cbvalue() {
    let valuee = items[index].vehicle;
    if (valuee == "bike") {
      document.getElementById("chk1").checked = true;
      document.getElementById("chk2").checked = false;
      document.getElementById("chk3").checked = false;
    }
    if (valuee == "car") {
      document.getElementById("chk2").checked = true;
      document.getElementById("chk1").checked = false;
      document.getElementById("chk3").checked = false;
    }
    if (valuee == "bike&car") {
      document.getElementById("chk3").checked = true;
      document.getElementById("chk1").checked = false;
      document.getElementById("chk2").checked = false;
    }
  }
  function rdvalue() {
    let valuee = items[index].gender;
    if (valuee == "female") {
      document.getElementById("radiof").checked = true;
    }
    if (valuee == "male") {
      document.getElementById("radiom").checked = true;
    }
  }
}
function eItems(event) {
  event.preventDefault();

  let i = document.getElementById("idd").value;
  const firstName = document.getElementById("fname").value.trim();
  const lastName = document.getElementById("lname").value.trim();
  const email = document.getElementById("em").value.trim();
  const phone = document.getElementById("ph").value.trim();
  const date = document.getElementById("dte").value;
  const vehicle = checkboxup();
  const gender = radioup();

  let status = true;
  if (firstName == "" && isNumeric(firstName) == false) {
    document.getElementById("errorfname").innerHTML = "Please enter first name";
    status = false;
  } else {
    document.getElementById("errorfname").innerHTML = " ";
  }

  if (lastName == "" && isNumeric(lastName) == false) {
    document.getElementById("errorlname").innerHTML = "Please enter last name ";
    status = false;
  } else {
    document.getElementById("errorlname").innerHTML = " ";
  }

  if (email == "") {
    document.getElementById("errorem").innerHTML ="Please enter valid email address";
    status = false;
  } else {
    document.getElementById("errorem").innerHTML = " ";
  }

  if (phone == "" && isNumeric(phone) == true) {
    document.getElementById("errorph").innerHTML ="Please enter a valid phone number";
    status = false;
  } else {
    document.getElementById("errorph").innerHTML = " ";
  }

  if (gender == "") {
    document.getElementById("egender").innerHTML = "Please select gender.";
    status = false;
  } else {
    document.getElementById("egender").innerHTML = " ";
  }

  if (date == "") {
    document.getElementById("edate").innerHTML = "Please select Date.";
    status = false;
  } else {
    document.getElementById("edate").innerHTML = " ";
  }

  if (vehicle == "") {
    document.getElementById("evehicle").innerHTML = "Please select vehicle.";
    status = false;
  } else {
    document.getElementById("evehicle").innerHTML = " ";
  }

  if (status == true) {
    items.forEach((item, index) => {
      if (index == i) {
        item.firstName = firstName;
        item.lastName = lastName;
        item.email = email;
        item.phone = phone;
        item.date = date;
        item.gender = gender;
        item.vehicle = vehicle;
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
    displayItems();
  }
}

function deleteItem(index) {
  if (confirm("Are you sure you want to delete") == true) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    displayItems();
  }
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function checkbox() {
  const checkbox1 = document.getElementById("check1");
  const checkbox2 = document.getElementById("check2");
  const checkbox3 = document.getElementById("check3");
  let ans = "";
  if (checkbox1.checked) {
    ans = checkbox1.value;
  } else if (checkbox2.checked) {
    ans = checkbox2.value;
  } else if (checkbox3.checked) {
    ans = checkbox3.value;
  } else {
    ans = "";
  }
  return ans;
}
function radio() {
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  let ans = "";
  if (radio1.checked) {
    ans = radio1.value;
  } else if (radio2.checked) {
    ans = radio2.value;
  } else {
    ans = "";
  }
  return ans;
}
function checkboxup() {
  const checkbox1 = document.getElementById("chk1");
  const checkbox2 = document.getElementById("chk2");
  const checkbox3 = document.getElementById("chk3");
  let ans = "";
  if (checkbox1.checked) {
    ans = checkbox1.value;
  } else if (checkbox2.checked) {
    ans = checkbox2.value;
  } else if (checkbox3.checked) {
    ans = checkbox3.value;
  } else {
    ans = "";
  }
  return ans;
}
function radioup() {
  const radio1 = document.getElementById("radiof");
  const radio2 = document.getElementById("radiom");
  let ans = "";
  if (radio1.checked) {
    ans = radio1.value;
  } else if (radio2.checked) {
    ans = radio2.value;
  }
  return ans;
}
document.getElementById("modalform").addEventListener("submit", addItem);
document.getElementById("updateform").addEventListener("submit", eItems);

displayItems();