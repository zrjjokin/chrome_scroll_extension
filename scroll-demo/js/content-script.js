console.log("content-script.js");
function runToTop(){
	currentPosition=document.documentElement.scrollTop || document.body.scrollTop; 
	clientHeight=document.body.scrollHeight;
	currentPosition+=1;
	if(currentPosition<clientHeight)
	{
		window.scrollTo(0,currentPosition);
	}
	else
	{
		console.log('a');
		window.scrollTo(0,0);
		clearInterval(timer);
	}
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
    // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
    if(request.cmd == 'test') 
    {
        //alert(request.value);
        timer=setInterval("runToTop()",request.value*10);
    }
    else if(request.cmd=='stop'){
        alert(request.value);
        clearInterval(timer);
    }
    sendResponse('我收到了你的消息！');

});