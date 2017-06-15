var find_itemArr=document.querySelectorAll(".find_item>a");	
for(var i=0;i<find_itemArr.length;i++){
	find_itemArr[i].onmouseover=function(){
		this.querySelector("img").style.left="90px";
	}
	find_itemArr[i].onmouseout=function(){
		this.querySelector("img").style.left="95px";
	}
}

// 中间轮播
var ypzjmaxstep=0;
var ypzjLunbo_pic=document.querySelectorAll("#ypzjLunbo>div");
var ypzjLunbo_link=document.querySelectorAll("#tab_link>li");
function ypzjLunboAutoPlay(){
	if(arguments[0]!=null){
		ypzjmaxstep=arguments[0];
	}
	if(ypzjmaxstep>=3){
		ypzjmaxstep=0;
	}
	if(ypzjmaxstep<0){
		ypzjmaxstep=2;
	}
	for(var i=0;i<ypzjLunbo_pic.length;i++){
		ypzjLunbo_pic[i].style="z-index:1";
	}
	ypzjLunbo_pic[ypzjmaxstep].style="z-index:2";
	for(var i=0;i<ypzjLunbo_link.length;i++){
		ypzjLunbo_link[i].id="";
	}
	ypzjLunbo_link[ypzjmaxstep].id="tab_link_li";
}
			
var ypzjLunbo_time="";
var tab_btn_right=document.querySelector("#tab_btn>span:last-child");
var tab_btn_left=document.querySelector("#tab_btn>span:first-child");
// var step_link_num=document.querySelectorAll("#bottom_link>a");
ypzjmax.onmouseout=function(){
	document.getElementById("tab_btn").style.opacity="0";
	ypzjLunbo_time=setInterval(function(){
		if(ypzjmaxstep<3){
			ypzjmaxstep++;
		}else{
			ypzjmaxstep=0;
		}
	
		ypzjLunboAutoPlay();
	},2000);
}

ypzjmax.onmouseover=function(){
	document.getElementById("tab_btn").style.opacity="1";
	clearInterval(ypzjLunbo_time);

	// 点击左右按钮
	tab_btn_left.onclick=function(){
		ypzjmaxstep--;
		ypzjLunboAutoPlay();
	}

	tab_btn_right.onclick=function(){
		ypzjmaxstep++;
		ypzjLunboAutoPlay();
	}
// 底部链接
	for(var i=0;i<ypzjLunbo_link.length;i++){
		ypzjLunbo_link[i].onmouseover=function(){
			ypzjLunboAutoPlay(Number(this.className.slice(3)));
		}

	}
}

//右侧 Tab切换
var php_btn=document.querySelectorAll(".tab_phb>a");
var php_content_tab=document.querySelectorAll("div.tab_phb_content>div.tab_phb_c");
for(var i=0 ;i<php_btn.length;i++){
	php_btn[i].onmouseover=function(){
		for(var i=0;i<php_btn.length;i++){
			php_btn[i].style.color="rgb(102,102,102)";
			php_btn[i].style.borderBottom="0px solid  #c81623";
		}
		php_content_tab[Number(this.className.slice(6))].style.zIndex=2;
		this.style.color="#c81623";
		this.style.borderBottom="2px solid  #c81623";
	}
	php_btn[i].onmouseout=function(){
		for(var j=0;j<php_content_tab.length;j++){
			php_content_tab[j].style.zIndex=0;
		}
		php_content_tab[Number(this.className.slice(6))].style.zIndex=1;
	}
}