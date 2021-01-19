/* eslint-env jquery */




const a = document.getElementById('cw-cur').value;
const b = document.getElementById('cw-pre').value;


function check() {
const c = a - b;
document.getElementById("cw-usage").value = c;
}
const x = document.getElementById('next');
x.onclick = check;