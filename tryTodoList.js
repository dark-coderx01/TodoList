const addTask = document.getElementById("addTask");
var Count = 1;

function addToList() {
  var textInput = document.getElementById("listInput");
  var input = textInput.value;

  if (input.trim() !== "") {
    var index = document.getElementById("index");

    var Item = document.getElementById("listItem");
    var remove = document.getElementById("removeItem");
    var time = document.getElementById("time");
    var list0 = document.createElement("li");

    var list = document.createElement("li");
    var list1 = document.createElement("li");
    var list2 = document.createElement("li");
    list.innerText = input;
    list0.innerText = Item.childElementCount + 1;
    const timer = new Date();
    var removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete";
    removeBtn.onclick = function () {
      index.removeChild(list0);
      Item.removeChild(list);
      remove.removeChild(list1);
      time.removeChild(list2);
    };
    list2.innerText =
      timer.getHours() + ":" + timer.getMinutes() + ":" + timer.getSeconds();
    index.appendChild(list0);
    Item.appendChild(list);
    list1.appendChild(removeBtn);
    remove.appendChild(list1);
    time.appendChild(list2);

    textInput.value = "";
    Count++;
  }
}

addTask.addEventListener("click", addToList);


