
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

            statuss.innerHTML = "Text replaced....";
            statuss.style.color = "green";
        })
        .catch((error) => {
            statuss.innerHTML = "Cannot replace text";
            statuss.style.color = "red";
            
        });

    });
})

