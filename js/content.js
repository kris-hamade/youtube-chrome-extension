// Had to add a delay so that the video could load first
const delay = ms => new Promise(res => setTimeout(res, ms));

const likeFunction = async () => {
    await delay(10000)
    var isLiked = function (btn) {
        for (var btn of document.getElementsByTagName("yt-formatted-string"))
            if (btn.getAttribute("class"))
                if (btn.getAttribute("class").includes("active"))
                    return btn
    }

    while (!isLiked()) {
        for (var btn of document.getElementsByTagName("button"))
            if (btn.getAttribute("aria-label"))
                if (btn.getAttribute("aria-label").includes("like this video along"))
                    btn.click()
    }
};

likeFunction()