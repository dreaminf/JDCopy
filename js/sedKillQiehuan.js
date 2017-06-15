var secondKillLi=sec_kill_jd_down.querySelectorAll("div>ul>li");
var secondKillLi_div=sec_kill_jd_down.querySelectorAll("div>ul>li>div");
	var posiLeft=0;
	var arr=[];
	for(var i=0;i<secondKillLi.length;i++){
		
		secondKillLi[i].style.left=posiLeft+"px";
		arr.push(posiLeft);
		posiLeft+=201;

	};
	console.log(arr);


document.getElementById("sec_killTab").onmouseover=function(){
	document.querySelector("div#SKill_btn").style.opacity=1;
	for(var i=0;i<secondKillLi_div.length;i++){
		secondKillLi_div[i].onmouseover=function(){
			this.style.cursor="pointer";
			this.querySelector("a>p").style.color="#c81623";
			this.querySelector("a>img").style.top="-5px";
		}
		secondKillLi_div[i].onmouseout=function(){
			this.querySelector("a>p").style.color="#999";
			this.querySelector("a>img").style.top="0px";
		}
	}

}
sec_killTab.onmouseout=function(){
	document.querySelector("div#SKill_btn").style.opacity=0;
}


SKill_btn.querySelector("span:first-child").onclick=function(){
	for(var i=0;i<secondKillLi.length;i++){
		arr[i]=arr[i]-201;
		secondKillLi[i].style.left=arr[i]+"px";
		if(arr[i]<=-804){
			arr[i]=1005;
		}
	};
}
SKill_btn.querySelector("span:last-child").onclick=function(){
	for(var i=0;i<secondKillLi.length;i++){
		if(arr[i]>=1608){
			arr[i]=-201;
		}
		arr[i]=arr[i]+201;
		console.log(arr);
		secondKillLi[i].style.left=arr[i]+"px";
		
	};
}

// 鼠标上去效果

