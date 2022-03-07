function functionOne(){
    document.getElementById("paraone").style.display='none';
    document.getElementById("parathree").style.display='none';
    document.getElementById("paratwo").style.display='none';
    document.getElementById("paraone").style.display='block';
}
function functionTwo(){
    document.getElementById("paratwo").style.display='block';
    document.getElementById("paraone").style.display='none';
    document.getElementById("parathree").style.display='none';
}
function functionThree(){
    document.getElementById("parathree").style.display='block';
    document.getElementById("paraone").style.display='none';
    document.getElementById("paratwo").style.display='none';
}