document.addEventListener('mousemove', function(e) {
    var position = "X Position: " + e.clientX + " Y Position: " + e.clientY;
    document.getElementById('mousePosition').innerText = position;
});

// 可以透過下列代碼觸發全螢幕
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// 監聽全螢幕切換事件
document.addEventListener("fullscreenchange", function() {
    var fullScreenStatus = "Not full screen";
    if (document.fullscreenElement) {
        fullScreenStatus = "Is full screen";
    }
    console.log(fullScreenStatus);
    document.getElementById('fullScreenStatus').innerText = fullScreenStatus;
});
