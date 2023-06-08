function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").textContent = time;
    setTimeout(showTime, 1000);
}
