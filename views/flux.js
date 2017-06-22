var xhr = null;

function init(){
  xhr = new XMLHttpRequest();

}

init();
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
    Callback(xhr.responseText);
    }
}

function Rss(){
}

function Callback(response){
  console.log(response);
}

function onLoaded(){
}

function sendReq1(){
  xhr.open("get","http://www.clubic.com/pro/actualites.rss",true);
  xhr.send(null);
}
