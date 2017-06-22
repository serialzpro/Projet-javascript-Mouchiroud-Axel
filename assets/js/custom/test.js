

var xhr = null;

function initXhr(){
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest();
  }
}

initXhr();

xhr.onreadystatechange = function(){ 
  if(xhr.readyState == 4 && xhr.status == 200){ 
    maCallback(xhr.responseText); 
  }
};

function maCallback(response){

  var h1 = document.createElement('h1'); 
  h1.appendChild(document.createTextNode(response))
  document.body.appendChild(h1); 
}

function pageLoaded(){
  document.getElementById("req_get").addEventListener("click", sendReq1);
  document.getElementById("req_post").addEventListener("click", sendReq2);

}

function sendReq1(){
  xhr.open('get', "http://localhost/indexGet.php?mavar=testReussi", true);
  xhr.send(null);
}
function sendReq2(){
  xhr.open('post', "http://localhost/index.php", true);
  xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");
  xhr.send("varurl="+document.getElementById("text_post").value);
}