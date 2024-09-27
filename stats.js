//displaying stats on the stats html page
function displayStats(){
    document.getElementById("num-tests").innerText = localStorage.getItem("numTests");
    document.getElementById("num-train").innerText = localStorage.getItem("numTrains");
    document.getElementById("high-wpm").innerText = localStorage.getItem("highWpm");
    document.getElementById("highest-acc").innerText = localStorage.getItem("highAcc");
    document.getElementById("15sec").innerText = localStorage.getItem("mostWords15");
    document.getElementById("30sec").innerText = localStorage.getItem("mostWords30");
    document.getElementById("60sec").innerText = localStorage.getItem("mostWords60");
    document.getElementById("90sec").innerText = localStorage.getItem("mostWords90");
    document.getElementById("120sec").innerText = localStorage.getItem("mostWords120");
    document.getElementById("10words").innerText = localStorage.getItem("fastest10Text");
    document.getElementById("20words").innerText = localStorage.getItem("fastest20Text");
    document.getElementById("50words").innerText = localStorage.getItem("fastest50Text");
    document.getElementById("100words").innerText = localStorage.getItem("fastest100Text");
    document.getElementById("200words").innerText = localStorage.getItem("fastest200Text");


}