let page = 0;
var data = new Array();
data.push(["21ce019", "Darshan Chavda", "21ce019@charusat.edu.in"]);
data.push(["21ce038", "Keval Hadiyal", "21ce038@charusat.edu.in"]);
data.push(["21ce017", "Omdutt Chauhan", "21ce017@charusat.edu.in"]);
data.push(["21ce081", "Om Nai", "21ce081@charusat.edu.in"]);
data.push(["21ce009", "Ronak Bhalgami", "21ce009@charusat.edu.in"]);
data.push(["21ce021", "Dharmik Chondagar", "21ce021@charusat.edu.in"]);
data.push(["21ce003", "Haril Barot", "21ce003@charusat.edu.in"]);
data.push(["21ce047", "Akshit Joshi", "21ce047@charusat.edu.in"]);
data.push(["21ce012", "Krish Bhighadiya", "21ce012@charusat.edu.in"]);

function load() {
  console.warn("loaded");
  createTable(data);
  createButtons();
}

function createTable(arr, start = 0) {
  var table = document.getElementById("tbl").getElementsByTagName("tbody")[0];
  table.innerHTML = "";
  var end = Math.min(start + 5, arr.length);
  for (var i = start; i < end; i++) {
    var row = table.insertRow(-1);

    for (const data of arr[i]) {
      var cell = row.insertCell(-1);
      cell.innerHTML = data;
    }
  }
}

function createButtons() {
  var body = document.getElementById("body");
  var div = document.createElement("div");

  // prev
  var prevBtn = document.createElement("button");
  prevBtn.onclick = function () {
    if (page > 0) {
      page--;
      var start = page * 5;
      createTable(data, start);
    }
  };
  prevBtn.innerHTML = "Prev";
  div.appendChild(prevBtn);

  // numbers
  var btns = Math.ceil(data.length / 5);
  for (var i = 0; i < btns; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = i + 1;
    btn.value = i;
    btn.onclick = function () {
      NumberClick(this.value);
    };
    div.appendChild(btn);
  }

  // next
  var nextBtn = document.createElement("button");
  nextBtn.onclick = function () {
    var start = (page + 1) * 5;
    if (start < data.length) {
      page++;
      createTable(data, start);
    }
  };
  nextBtn.innerHTML = "Next";
  div.appendChild(nextBtn);

  // all buttons to div
  body.appendChild(div);
}

function NumberClick(pg) {
  page = parseInt(pg);
  createTable(data, page * 5);
}
