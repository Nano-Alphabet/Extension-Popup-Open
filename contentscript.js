var myDiv = document.querySelectorAll('.r a');
var box=document.querySelector('.Mview');
box.style.transition = "all 1.75s";
for(var i=0;i<myDiv.length;i++)
{
    myDiv[i].addEventListener("mouseover", myFunction);
}

function myFunction()
{
    var position = this.getBoundingClientRect();
    var x = Number(position.width)+Number(position.left);
    var y = Number(position.top) + Number(window.scrollY)-175;
    if(x>620) x-=100;
    box.style.left=String(x)+"px";
    box.style.top=String(y)+"px";
    document.querySelector('.Mview iframe').src=this.href;
    var timer = setTimeout("slide()",1000); 
	this.onmouseout = function() {  clearTimeout(timer); } 
}
function slide()
{
	box.style.display="block";
}
document.querySelector('#main').addEventListener("click",function(){
	box.style.display="none";
})