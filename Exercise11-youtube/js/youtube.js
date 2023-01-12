document.addEventListener("DOMContentLoaded", function (event) {
    var inputSearch = document.getElementById("keyword");
    inputSearch.onkeydown = function (event) {
        if (event.keyCode == 13) {
            loadVideo(this.value);
        }
    }
    loadVideo("Đen vâu");
});

// get the modal
var modal = document.getElementById('myModal');

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var videoFrame = document.getElementById("video-frame");

//When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeVideo();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeVideo();
    }
}
function loadVideo(keyword) {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=%C4%90en%20V%C3%A2u&type=video&maxResults=9&part=snippet&key=AIzaSyDlw_qKzW7JxzHV8_vDol86LG1sS6fDVp4";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", YOUTUBE_API, true);
     console.log(YOUTUBE_API)
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Parse kết quả trả về thành kiểu json.
            var responseJson = JSON.parse(this.responseText);
            var htmlContent = "";
            for (var i = 0; i < responseJson.items.lenght; i++) {
                if (responseJson.items[i].id.kind == 'youtube#channel') {
                    continue;
                }
                var videoId = responseJson.items[i].id.videoId;
                var videoTitle = responseJson.items[i].snippet.title;
                var videoDescription = responseJson.items[i].snippet.description;
                var videoThumbnail = responseJson.items[i].snippet.thumbnails.medium.url;
                htmlContent += '<div class="video" onclick="showVideo(\'' + videoId + '\')">'
                htmlContent += '<img src="' + videoThumbnail + '">'
                htmlContent += '<div class="title">' + videoTitle + '</div>'
                htmlContent += '</div>'
                document.getElementById("list-video").innerHTML = htmlContent;
            }
            } else if (this.readyState == 4) {
                console.log("Fails");
            }
        };
        xhr.send();
}
function closeVideo() {
    modal.style.display = "none";
    videoFrame.src = "";
}
function showVideo(videoId) {
    videoFrame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
    setTimeout(function () {
        modal.style.display = "block";
    }, 300);
}