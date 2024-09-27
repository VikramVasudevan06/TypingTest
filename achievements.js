
//setting achievements on the achievements html page
function setAchievements(){
    if(localStorage.getItem("numTests") > 0){
        document.getElementById("beginner").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("numTests") >= 10){
        document.getElementById("worker").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("numTests") >= 100){
        document.getElementById("professional").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("highWpm") >= 60){
        document.getElementById("steady").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("highWpm") >= 80){
        document.getElementById("quick").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("highWpm") >= 100){
        document.getElementById("lightning").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("highWpm") >= 150){
        document.getElementById("light-speed").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("numTrains") > 0){
        document.getElementById("learner").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("trainOnUpper")){
        document.getElementById("trainUpper").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("trainOnMiddle")){
        document.getElementById("trainMiddle").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("trainOnLower")){
        document.getElementById("trainBottom").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("trainOnNumber")){
        document.getElementById("trainNumber").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("trainOnPunctuation")){
        document.getElementById("trainPunctuation").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("highAcc") >= 50){
        document.getElementById("ballpark").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("highAcc") >= 75){
        document.getElementById("getting-better").innerHTML = "<span>&#9989;</span>";
    }
    if(localStorage.getItem("highAcc") == 100){
        document.getElementById("perfectionist").innerHTML = "<span>&#9989;</span>";
    }

}