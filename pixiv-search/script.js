function redirectToPixiv() {
    var artworkId = document.getElementById("artworkId").value;
    var pixivUrl = "https://www.pixiv.net/artworks/" + artworkId;
    window.location.href = pixivUrl;
}

// 在按鈕上註冊點擊事件
document.getElementById("redirectButton").addEventListener("click", redirectToPixiv);
