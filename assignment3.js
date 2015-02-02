var xmlhttp;
var txt;
var gisText;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {

    var data = xmlhttp.responseText;
    document.getElementById("test").innerHTML = data;
   
  }   
  }
xmlhttp.open("GET","https://api.github.com/gists",true);
xmlhttp.send(); 
