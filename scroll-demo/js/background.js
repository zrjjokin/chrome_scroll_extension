console.log("background.js");


//-------------------- 右键菜单演示 ------------------------//
function runToTop(){
		
	currentPosition=document.documentElement.scrollTop || document.body.scrollTop; 
	clientHeight=document.body.clientHeight;
	currentPosition+=50;
	console.log(currentPosition);
	console.log(clientHeight);
	if(currentPosition<clientHeight)
	{
		
		window.scrollTo(0,currentPosition);
	}
	else
	{
		console.log("yes");
		window.scrollTo(0,clientHeight);
		clearInterval(timer);
	}
}
chrome.contextMenus.create({
	title: "点击下滑",
	onclick: function(){
		//alert(window.location);
		timer=setInterval("runToTop()",1);
		alert("hello")
	}
});
