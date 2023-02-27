console.log("contentScript.js loaded");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (window.getSelection().toString().length<1) {
            sendResponse({error: "No text selected"});
            return;   
        }
        if (request.message === "replaceWith") {
            var selection = window.getSelection();
            var range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(request.data));
        }
        sendResponse({message: "contentScript.js received message"});
    }
  );