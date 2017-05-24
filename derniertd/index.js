var ancienElement = null;
var ancienElementBackGround = null;


function selection(event) {
  var element = event.target;
  if (ancienElement != element)
    ancienElementBackGround = element.style.backgroundColor;
  element.style.backgroundColor = "red";
  if (ancienElement != null)
    ancienElement.style.backgroundColor = ancienElementBackGround;
  ancienElement = element;

}



function request(evt) {

elt = document.getElementById("req_get");
elt.addEventListener("click", myCallback); 
elt = document.getElementById("titre");
elt.addEventListener("click", function() {
console.log(evt);
});
}


function selection2(event) {
  if (!document.getElementById("Insertion").contains(event.target)) {
    var element = event.target;
    if (ancienElement != element)
      ancienElementBackGround = element.style.backgroundColor;
    element.style.backgroundColor = "white";
    if (ancienElement != null)
      ancienElement.style.backgroundColor = ancienElementBackGround;
    ancienElement = element;
    insertB(element);
  }
}

function insertB(target) {
  var insert = document.getElementById("inserer");
  target.before(insert.value);
}

function initSelection () {
  document.body.addEventListener("click", selection2, false);
}