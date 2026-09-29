const editor =
document.getElementById("editor");


const loader =
document.getElementById("loader");


function newFile(){

editor.value="";

}


function saveFile(){

let blob =
new Blob(
[
editor.value
],
{
type:"text/plain"
});


let link =
document.createElement("a");


link.href =
URL.createObjectURL(blob);


link.download="code.txt";


link.click();

}



loader.addEventListener(
"change",
function(){

let file=this.files[0];

let reader=new FileReader();


reader.onload=function(){

editor.value=
reader.result;

};


reader.readAsText(file);


});