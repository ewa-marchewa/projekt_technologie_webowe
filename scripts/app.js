

//lista "to do"

function newElement() 
{
  var li = document.createElement("li");
  var inputValue = document.getElementById("dane").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("ul").appendChild(li);
  document.getElementById("dane").value = "";
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cls";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("cls");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//dodawanie elementu do listy

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("dane").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please write something!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("dane").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "cls";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


