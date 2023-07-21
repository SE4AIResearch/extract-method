function openCitation(Id){
const popup = document.getElementById(Id);
popup.style.visibility = 'visible';
const page =  document.getElementById("blur");
page.style.filter = 'blur(2px)';
}

function closeCitation(Id){
const popup = document.getElementById(Id);
popup.style.visibility = 'hidden';
const page =  document.getElementById("blur");
page.style.filter = 'blur(0px)';
}

function clipboardCopy(Id){
const text = document.getElementById(Id).querySelector("p").innerHTML;
navigator.clipboard.writeText(text);
}