// scrolltop_search.js
window.onscroll=function(){
	var top= window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
	if(top>=320){
		searchTop.className="serachTopbox";
		searchTop.style.opacity="1";
		searchTop.style.zIndex="100";
	}else{
		searchTop.className="";
		searchTop.style.opacity="0";
		searchTop.style.zIndex="-20";
	}
	if(top>=1700){
		left_lift.style.opacity="1";
		left_lift.style.zIndex="120";
	}else{
		left_lift.style.opacity="0";
		left_lift.style.zIndex="-120";
	}
}

var elevtor=document.querySelectorAll("#left_lift>ul>li");
for(var i=0;i<elevtor.length;i++){
	if(i<elevtor.length-1){
	elevtor[i].onclick=function(){
		for(var j=0;j<elevtor.length;j++){
			if(j>0&&j<elevtor.length-1){
				elevtor[j].style.backgroundColor="";
				elevtor[j].style.borderColor="";
			}
		}
		this.style.backgroundColor="#d70b1c";
		this.style.borderColor="#d70b1c";

	}

	}
		
}

//电梯函数
function $(selector){
	return document.querySelector(selector);
}
var t;
function doScroll(len){
	var px = document.body.scrollTop>len?-10:10;
	window.scrollBy(0,px);
	if((document.body.scrollTop-len)>=0&&(document.body.scrollTop-len)<=9){
			clearInterval(t);
	}
}
// $('.tiaozhuan1').onclick=function(){
// 	clearInterval(t);
// 	t = setInterval("doScroll(700)",1);
// };
// $('.tiaozhuan2').onclick=function(){
// 	clearInterval(t);
// 	t = setInterval("doScroll(1100)",1);
// };
// $('.tiaozhuan3').onclick=function(){
// 	clearInterval(t);
// 	t = setInterval("doScroll(1400)",1);
// };
$('#left_lift>ul>li:last-child').onclick=function(){
	clearInterval(t);
	t = setInterval("doScroll(0)",1);
};