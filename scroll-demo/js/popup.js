function sendMessageToContentScript(message,callback){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response)
        {
            if(callback) callback(response);
        });
    });
}
$('#confirm_speed').click(()=>{
    var speed=$('#speed').val();
    //alert(speed);
    sendMessageToContentScript({cmd:'test', value:speed}, function(response)
    {
    console.log('来自content的回复：'+response);
});
});

$('#stopScroll').click(() =>{
    sendMessageToContentScript({cmd:'stop', value:'停止下滑'}, function(response)
{
    console.log('来自content的回复：'+response);
});

});