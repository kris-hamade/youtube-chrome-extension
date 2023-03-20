const likeFunction = async () => {
    const xpath = `//*[@id="segmented-like-button"]/ytd-toggle-button-renderer/yt-button-shape/button/yt-touch-feedback-shape/div/div[2]`;
    const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    
    const likeButton = result.singleNodeValue;
    
    const likeButtonStatus = document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--tonal.yt-spec-button-shape-next--mono');
    
    if (likeButtonStatus && likeButtonStatus.getAttribute('aria-pressed') !== 'true') {
      likeButton.click();
    }
}

window.setInterval(likeFunction, 10000);