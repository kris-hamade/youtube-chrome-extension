const likeFunction = async () => {
    let btn = document.querySelector("#top-level-buttons-computed > ytd-toggle-button-renderer:nth-child(1)");
    if(btn && !btn.classList.contains("style-default-active"))
        btn.click();
}

window.setInterval(likeFunction, 10000);