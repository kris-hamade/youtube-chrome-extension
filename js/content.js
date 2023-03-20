const likeFunction = async () => {
    const buttonXpath = `//*[@id="segmented-like-button"]/ytd-toggle-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]`;
    const buttonResult = document.evaluate(buttonXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    const isLikedXpath = "/html/body/ytd-app/div[1]/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/div[2]/ytd-watch-metadata/div/div[2]/div[2]/div/div/ytd-menu-renderer/div[1]/ytd-segmented-like-dislike-button-renderer/div[1]/ytd-toggle-button-renderer/yt-button-shape/button";
    const xLikedResult = document.evaluate(isLikedXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    const likeButton = buttonResult.singleNodeValue;

    const likeButtonStatus = xLikedResult.singleNodeValue;

    if (likeButtonStatus && likeButtonStatus.getAttribute('aria-pressed') !== 'true') {
      likeButton.click();
    }
}

window.setInterval(likeFunction, 10000);