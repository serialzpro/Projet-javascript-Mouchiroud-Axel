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

function callback(){
  xhr.open('post','/moncompte/test',true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send;
}


 document.getElementById("test").addEventListener("click", callback);

