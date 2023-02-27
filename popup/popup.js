
let text = document.getElementById("text");
let replaceWith = document.getElementById("replaceWith");
let statuss = document.getElementById("status");


replaceWith.addEventListener("keyup", () => {
    const params = {
        active: true,
        currentWindow: true
    };
    chrome.tabs.query(params, (tabs) => {

        let message = {
            message: "replaceWith",
            data: replaceWith.value
        };
        chrome.tabs.sendMessage(tabs[0].id, message)
        .then((response) =>{
            if (response.error) {
                statuss.innerHTML = response.error;
                return;
            }
            statuss.innerHTML = "Text replaced....";

        })
        .catch((error) => {
            statuss.innerHTML = error.message;
            
        });

    });
})

