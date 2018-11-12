//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded

var element = document.createElement('div');

element.innerHTML = "NEW DIV ELEMENT";
element.style.backgroundColor ='#f9f9f9';
element.style.textAlign = 'center';

document.body.appendChild(element);

let ul = document.createElement('ul');
for(let i=0; i<3; i++){
  let li = document.createElement('li');
  li.innerHTML = (i+1).toString();
  ul.appendChild(li);
}
ul.style.textAlign = 'left';
element.appendChild(ul);

ul.removeChild(ul.querySelector('li:nth-child(2)'));
