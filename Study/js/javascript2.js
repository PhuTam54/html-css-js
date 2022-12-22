//dom: document object model
var msg ='<p><b>page title: </b>' +document.title+ '<br/>';
msg += document.URL + '<br/>';
msg += document.lastModified
var el = document.getElementById('footer');
el.innerHTML = msg;