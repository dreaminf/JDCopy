// scedkill.js
function kill_second(){
	var seckillTime=seckill_time.querySelectorAll("div>span");
	var hours,minute,second;
	setInterval(function(){
		var nowTime=new Date();
		var futureTime=new Date(nowTime.getFullYear(),nowTime.getMonth(),nowTime.getDate(),23,59,59);
		var cha=futureTime-nowTime;
		hours=Math.floor(cha/(3600*1000))<10?"0"+Math.floor(cha/(3600*1000)):Math.floor(cha/(3600*1000));
		minute=Math.floor(cha%(3600*1000)/(1000*60))<10?"0"+Math.floor(cha%(3600*1000)/(1000*60)):Math.floor(cha%(3600*1000)/(1000*60));
		second=Math.floor(cha%(60*1000)/1000)<10?"0"+Math.floor(cha%(60*1000)/1000):Math.floor(cha%(60*1000)/1000);
		var seckillTimeArr=[hours,minute,second];
		for(var i=0;i<seckillTime.length;i++){
			seckillTime[i].innerHTML=seckillTimeArr[i];
			seckillTime[i].style.color="red";
		}

	},1000);
}

kill_second();
