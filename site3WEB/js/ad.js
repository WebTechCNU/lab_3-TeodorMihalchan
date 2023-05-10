(function adOpen() {
    function showAd() {
        const adHtml = `
        <div class="ad-overlay">
            <div class="ad-content">
                <div class="ad-image-container">
                    <img src="images/ads.jpg" class="ad-image">
                </div>
                <div class="ad-text">Реклама</div>
                <button id="ad_but" class="ad-close-button">x</button>
            </div>
        </div>`;
        const ad = document.createElement('div');
        ad.innerHTML = adHtml.trim();
        document.body.appendChild(ad);
        setTimeout(function () {
            const closeButton = document.querySelector("#ad_but");
            closeButton.style.display = "block";
            closeButton.addEventListener('click', function () {
                ad.style.display = "none";
                window.removeEventListener('scroll', checkScrollPosition);
                document.body.style.overflow = "";
            });
        }, 3000);

        document.body.style.overflow = "hidden";
    }

    function checkScrollPosition() {
        const pageHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.pageYOffset;
        const distanceFromTop = scrollPosition;

        if (distanceFromTop >= (pageHeight / 4) && !adShown) {
            showAd();
            window.removeEventListener('scroll', checkScrollPosition);
        }
    }

    let adShown = false;
    window.addEventListener('scroll', checkScrollPosition);
})();