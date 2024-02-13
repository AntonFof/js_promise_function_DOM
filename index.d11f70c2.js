/* eslint-disable no-console */function e(e,t){// write your code here
return new Promise(function(n){e.addEventListener(t,function(){n("It was\n        ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id))})})}var t=document.querySelector("body"),n=function(e){// write your code here
var n=document.createElement("div");n.classList.add("message"),n.textContent=e,t.appendChild(n)},c=document.getElementById("login"),d=document.getElementById("password"),o=document.getElementById("submit");e(c,"click").then(n),e(d,"click").then(n),e(o,"click").then(n),e(c,"input").then(n),e(d,"input").then(n),e(c,"blur").then(n),e(d,"blur").then(n),e(o,"blur").then(n);//# sourceMappingURL=index.d11f70c2.js.map

//# sourceMappingURL=index.d11f70c2.js.map
