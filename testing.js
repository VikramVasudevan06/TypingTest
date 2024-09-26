//word file: https://github.com/dwyl/english-words/blob/master/LICENSE.md

var characters = 0;
var charactersPassed = 0;
var charactersMissed = 0;
var numWords = 0;
let firstTime = true;
let hour = 0;
let minute = 0;
let second = 0;
var textLength = 0;
var numLoops = 0;
var timerText;



var currentOption = "time-button";

var currentNum = "thirdnum";
var clockTimer;
var line = 0;
var currentLines = 0;
const maxNumRows = 5;

console.log(window.innerHeight);
console.log("RAHH");
console.log(localStorage.getItem("numTests"));

var numTests = 0;
var numTrains = 0;
var highWpm = 0;
var highAcc = 0;
var mostWords15 = 0;
var mostWords30 = 0;
var mostWords60 = 0;
var mostWords90 = 0;
var mostWords120 = 0;
var fastestTime10 = "No Time";
var fastestTime20 = "No Time";
var fastestTime50 = "No Time";
var fastestTime100 = "No Time";
var fastestTime200 = "No Time";
var fastest10Text = "No Time";
var fastest20Text = "No Time";
var fastest50Text = "No Time";
var fastest100Text = "No Time";
var fastest200Text = "No Time";


const words = ["aardvark", "abandon", "abandonable", "abandons", "abase", "abased", "abash", "abashed", "abashedly", "abate", "abbey", "abbreviated", "abbreviator", "abdicate", "abdomen", "abhor", "abide", "abiotic", "abjection", "abjectly", "abolition", "abort", "aborted", "aboveground", "abrash", "abrasive", "abridged", "abroad", "absolutist", "absorb", "absorption", "abstain", "abusive", "academic"];

const upperRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const middleRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const bottomRow = ["z", "x", "c", "v", "b", "n", "m"];
const numberKey = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const punctuation = ["!", ",", ".", "?", "'", "-", ":", ";", "/"];


var substringOne = "";
var rowCount = 0;
var count = 0;
let clockIterator = 0;
var location;



window.onunload=function(){
    clearInterval(clockTimer);
}

window.onload=function(){
    if(document.URL.includes("index.html")){
        resetVars();
        randomize(20);
        initialSetColor();
    }
    
}

function initialSetColor(){
    document.getElementById(currentOption).style.backgroundColor =  "#ebd600";
    document.getElementById(currentNum).style.backgroundColor =  "#ebd600";


}

function buttonColors(eventId){
    let firstButton = document.getElementById("firstnum");
    let secondButton = document.getElementById("secondnum");
    let thirdButton = document.getElementById("thirdnum");
    let fourthButton = document.getElementById("fourthnum");
    let fifthButton = document.getElementById("fifthnum");
    resetVars();
    numLoops = Number(document.getElementById(currentNum).innerText)/10;
    let button = document.getElementById(eventId);
    let tempButton;
    button.style.backgroundColor = "#ebd600";
    if(eventId == "words-button" || eventId == "time-button"){
         if(currentOption != eventId){
            tempButton = document.getElementById(currentOption);
            currentOption = eventId;
            tempButton.style.backgroundColor = "transparent";
         }
    }
    else{
        if(currentNum != eventId){
            tempButton = document.getElementById(currentNum);
            currentNum = eventId;
            tempButton.style.backgroundColor = "transparent";

        }
        
    }
    
    if(currentOption == "words-button"){
        firstButton.innerText = "10";
        secondButton.innerText = "20";
        thirdButton.innerText = "50";
        fourthButton.innerText = "100";
        fifthButton.innerText = "200";
        numLoops = Number(document.getElementById(currentNum).innerText)/10
        let text = document.getElementById("testing-text");
        text.innerHTML = "";
        numWords = 10*numLoops;
        if(numLoops < maxNumRows){
            for(let i = 0; i < numLoops; i++){
                randomize(10);
                currentLines++;
            }
        }
        else{
            for(let i = 0; i < maxNumRows; i++){
                randomize(10);
                currentLines++;
            }
        }
        
    }
    else if(currentOption == "time-button"){
        firstButton.innerText = "15";
        secondButton.innerText = "30";
        thirdButton.innerText = "60";
        fourthButton.innerText = "90";
        fifthButton.innerText = "120";
        
        for(let i = 0; i < maxNumRows; i++){
            randomize(10);
        }
    }
    
    
}



function resetSpans(){    
    while(document.getElementsByTagName("span")[0] != undefined){
        console.log(document.getElementsByTagName("span")[0]);
        document.getElementsByTagName("span")[0].remove();
        if(document.URL.includes("index.html")){
            document.getElementsByTagName("br")[1].remove();
        }
        else{
            console.log("RUNNING THIS");
            document.getElementsByTagName("br")[3].remove();
        }
        if(document.getElementsByTagName("span")[0]=== undefined){
            break;
        }

    }
}



function resetVars(){
    currentOption = "words-button"
    characters = 0;
    charactersPassed = 0;
    currentLines = 0;
    charactersMissed = 0;
    line = 0;
    hour = 0;
    minute = 0;
    second = 0;
    substringOne = "";
    count = 0;
    clockIterator = 0;
    numWords = 0;
    textLength = 0;
    firstTime = true;
    resetSpans();
}

function creatingSpans(text){
    console.log("Creating SPans");
    let substringOne = "";
    let counter = 0;
    let i = 0;
    while(counter < 10){
        substringOne = substringOne + text[i];
        if(text[i] == " "){
            counter++;
        }
        i++;
    }
    let paragraph = document.getElementById("testing-text");
    let newSpan = document.createElement("span");
    newSpan.className = "lines";
    newSpan.style.style = "white-space: pre-wrap";
    let newBreak = document.createElement("br");
    newSpan.innerHTML = substringOne;
    console.log("NEWSPAN: " + newSpan.innerHTML);
    newSpan.style = "white-space: pre-wrap";
    paragraph.appendChild(newSpan);
    paragraph.appendChild(newBreak);

}


function randomize(value){
    let testingText = document.getElementById("testing-text");
    let userText = document.getElementById("user-input")
    let text = "";
    let iterator = 0;
    while(iterator < value){
        tempWord = words[Math.floor(Math.random() * (words.length - 1))];
        textLength = textLength + tempWord.length + 1;
        text = text + tempWord + " ";
        iterator++;
    }
    text = text + " ";
    creatingSpans(text);
    userText.value = "";
    userText.focus();
}

function specificRow(clickId){
    let givenArray;
    if(clickId == "upper-row"){
        givenArray = upperRow;
    }
    else if(clickId == "middle-row"){
        givenArray = middleRow;
    }
    else if(clickId == "bottom-row"){
        givenArray = bottomRow;
    }
    else if(clickId == "number-key"){
        givenArray = numberKey;
    }

    let testingText = document.getElementById("testing-text");
    let text = "";
    
    let iterator = 0;

    resetSpans();

    for(let k = 0; k < 5; k++){
        text = "";
        for(let j = 0; j < 10; j++){
            for(let i = 0; i < 4; i++){
                text = text + givenArray[Math.floor(Math.random() * (givenArray.length - 1))];
                console.log("THIS TEXT: " + text);
                console.log(j);
            }
            text = text + " ";
        }
        console.log("WHAT IS THIS TEXT: " + text);

        creatingSpans(text);
    }
    numWords = 50;



    let userText = document.getElementById("user-input");
    userText.focus();
    userText.value = "";
    document.getElementById("passed").innerHTML = "Characters Passed: ";
    document.getElementById("missed").innerHTML = "Characters Missed: ";
}

function clock(){
    console.log("IN THE CLOCK");
    clockIterator++;
    let secondDisplay = "";
    let minuteDisplay = "";
    if(clockIterator % 100 == 0 && clockIterator != 0){
        second++;
    }

    if(second % 60 == 0 && second != 0){
        minute++;
        second = 0;
    }
    if(minute % 60 == 0 && minute != 0){
        hour++;
        minute = 0;
    }

    if(second < 10){
        secondDisplay = "0" + second;
    }
    else{
        secondDisplay = second;
    }

    if(minute < 10){
        minuteDisplay = "0" + minute;
    }
    else{
        minuteDisplay = minute;
    }

    let timer = document.getElementById("time");
    timerText = timer.innerText;
    timerText = timerText.substring(0, 5);
    timerText = timerText + hour + ":" + minuteDisplay + ":" + secondDisplay;
    timer.innerHTML = timerText;


}

function updateStatistics(){
    let passed = document.getElementById("passed");
    let missed = document.getElementById("missed");
    let missedTxt = missed.innerText;
    let passedTxt = passed.innerText;
    if(count == 0){
        passedTxt = passedTxt + charactersPassed;
        missedTxt = missedTxt + charactersMissed;
    }
    else{
        passedTxt = passedTxt.substring(0, 18);
        missedTxt = missedTxt.substring(0, 18);
        console.log(passedTxt + "POST SPLIT");
        passedTxt = passedTxt + charactersPassed;
        missedTxt = missedTxt + charactersMissed;
    }
    passed.innerHTML = passedTxt;
    missed.innerHTML = missedTxt;
    
}

function remove(event){
    if(event.key == "Backspace"){
        if(characters != 0 || line != 0){
            characters--;
        }
        if(characters == -1){
            line--;
            characters = document.getElementsByClassName("lines")[line].innerText.length - 1;
            substringOne = document.getElementsByClassName("lines")[line].innerHTML;
        }
        if(substringOne[substringOne.length - 11] == 'c'){
            charactersPassed--;
        }
        else{
            console.log(substringOne);
            console.log("WHat actually is it?: " + substringOne[substringOne.length - 11]);
            charactersMissed--;
        }
        substringOne = substringOne.slice(0, -47);

        let x = document.getElementsByClassName("lines")[line];
        
        let txt = x.innerText;
        console.log("NEW LINE: " + txt);
        console.log(characters);
        console.log()
        txt = substringOne + txt.substring(characters);
        x.innerHTML = txt;
        updateStatistics();
        
    }
}

const pop = document.getElementById("pop-up");


function setStatVars(){
    if(localStorage.getItem("numTests") != null){
        numTests = localStorage.getItem("numTests");
    }
    if(localStorage.getItem("numTrains") != null){
        numTrains = localStorage.getItem("numTrains");
    }
    if(localStorage.getItem("highWpm") != null){
        highWpm = localStorage.getItem("highWpm");
    }
    if(localStorage.getItem("highAcc") != null){
        highAcc = localStorage.getItem("highAcc");
    }
    if(localStorage.getItem("mostWords15") != null){
        mostWords15 = localStorage.getItem("mostWords15");
    }
    if(localStorage.getItem("mostWords30") != null){
        mostWords30 = localStorage.getItem("mostWords30");
    }
    if(localStorage.getItem("mostWords60") != null){
        mostWords60 = localStorage.getItem("mostWords60");
    }
    if(localStorage.getItem("mostWords90") != null){
        mostwords90 = localStorage.getItem("mostWords90");
    }
    if(localStorage.getItem("mostWords120") != null){
        mostWords120 = localStorage.getItem("mostWords120");
    }
    if(localStorage.getItem("fastestTime10") != null){
        fastestTime10 = localStorage.getItem("fastestTime10");
    }
    if(localStorage.getItem("fastestTime20") != null){
        fastestTime20 = localStorage.getItem("fastestTime20");
    }
    if(localStorage.getItem("fastestTime50") != null){
        fastestTime50 = localStorage.getItem("fastestTime50");
    }
    if(localStorage.getItem("fastestTime100") != null){
        fastestTime100 = localStorage.getItem("fastestTime100");
    }
    if(localStorage.getItem("fastestTime200") != null){
        fastestTime200 = localStorage.getItem("fastestTime200");
    }
    if(localStorage.getItem("fastest10Text") != null){
        fastest10Text = localStorage.getItem("fastest10Text");
    }
    if(localStorage.getItem("fastest20Text") != null){
        fastest20Text = localStorage.getItem("fastest20Text");
    }
    if(localStorage.getItem("fastest50Text") != null){
        fastest50Text = localStorage.getItem("fastest50Text");
    }
    if(localStorage.getItem("fastest100Text") != null){
        fastest100Text = localStorage.getItem("fastest100Text");
    }
    if(localStorage.getItem("fastest200Text") != null){
        fastest200Text = localStorage.getItem("fastest200Text");
    }
    
}

function setStats(){

    localStorage.setItem("numTests", numTests);
    localStorage.setItem("numTrains", numTrains);
    localStorage.setItem("highWpm", highWpm);
    localStorage.setItem("highAcc", highAcc);
    localStorage.setItem("mostWords15", mostWords15);
    localStorage.setItem("mostWords30", mostWords30);
    localStorage.setItem("mostWords60", mostWords60);
    localStorage.setItem("mostWords90", mostWords90);
    localStorage.setItem("mostWords120", mostWords120);
    localStorage.setItem("fastestTime10", fastestTime10);
    localStorage.setItem("fastestTime20", fastestTime20);
    localStorage.setItem("fastestTime50", fastestTime50);
    localStorage.setItem("fastestTime100", fastestTime100);
    localStorage.setItem("fastestTime200", fastestTime200);
    localStorage.setItem("fastest10Text", fastest10Text);
    localStorage.setItem("fastest20Text", fastest20Text);
    localStorage.setItem("fastest50Text", fastest50Text);
    localStorage.setItem("fastest100Text", fastest100Text);
    localStorage.setItem("fastest200Text", fastest200Text);

}

function openPop(){
    setStatVars();
    console.log("IN THE OPENED POP");
    if(document.URL.includes("index.html")){
        numTests++;
    }
    else{
        numTrains++;
    }
    let totalTime = (3600*hour + 60*minute + second)/60;
    console.log("NUMWORDS: " + numWords);
    let wordsPer = Math.round(numWords/totalTime);
    let acc = Math.round(charactersPassed/(charactersMissed + charactersPassed) * 100);
    document.getElementById("wpmAnswer").innerText = wordsPer;
    document.getElementById("accuracyAnswer").innerText = acc;
    document.getElementById("statsPassedAnswer").innerText = charactersPassed;
    document.getElementById("statsMissedAnswer").innerText = charactersMissed;
    if(document.URL.includes("index.html")){
        if(wordsPer > highWpm){
            highWpm = wordsPer;
            console.log("IN HERE THE WPM CHANGED");
            console.log(highWpm);
        }
        if(acc > highAcc){
            highAcc = acc;
        }
        if(currentOption == "time-button"){
            if(acc == 100){
                if(currentNum == "firstnum"){
                    if(numWords > mostWords15){
                        mostWords15 = numWords;
                    }
                }
                else if(currentNum == "secondnum"){
                    if(numWords > mostWords30){
                        mostWords30 = numWords;
                    }
                }
                else if(currentNum == "thirdnum"){
                    if(numWords > mostWords60){
                        mostWords60 = numWords;
                    }
                }
                else if(currentNum == "fourthnum"){
                    if(numWords > mostWords90){
                        mostWords90 = numWords;
                    }
                }
                else if(currentNum == "fifthnum"){
                    if(numWords > mostWords120){
                        mostWords120 = numWords;
                    }
                }
            }
        }
        else if(currentOption == "words-button"){
            console.log("IS TIMER TEXT REAL?: " + timerText);
            let thisRunTime = second + 60*minute + 3600*hour;
            if(currentNum == "firstnum"){
                if(fastestTime10 == "No Time" || thisRunTime < fastestTime10){
                    fastestTime10 = thisRunTime;
                    fastest10Text = timerText;
                }
            }
            else if(currentNum == "secondnum"){
                if(fastestTime20 == "No Time" || thisRunTime < fastestTime20){
                    fastestTime20 = thisRunTime;
                    fastest20Text = timerText;
                }
            }
            else if(currentNum == "thirdnum"){
                if(fastestTime50 == "No Time" || thisRunTime < fastestTime50){
                    fastestTime50 = thisRunTime;
                    fastest50Text = timerText;
                }
            }
            else if(currentNum == "fourthnum"){
                if(fastestTime100 == "No Time" || thisRunTime < fastestTime100){
                    fastestTime100 = thisRunTime;
                    fastest100Text = timerText;
                }
            }
            else if(currentNum == "fifthnum"){
                if(fastestTime200 == "No Time" || thisRunTime < fastestTime200){
                    fastestTime200 = thisRunTime;
                    fastest200Text = timerText;
                }
            }
        
        }
    }
    setStats();
    clearInterval(clockTimer);
    console.log(pop.classList);
    pop.classList.add("open");
    console.log("IT'S OPEN NOW");
}

function closePop(){
    pop.classList.remove("open");
    resetVars();
    document.getElementById("passed").innerText = "Characters Passed: " +  charactersPassed;
    document.getElementById("missed").innerText = "Characters Missed: " + charactersMissed;
    if(document.URL.includes("index.html")){
        
        console.log("THIS INCLUDE THING WORKS");
        numLoops = Number(document.getElementById(currentNum).innerText)/10
        let text = document.getElementById("testing-text");
        text.innerHTML = "";
        if(currentOption == "words-button"){
            numWords = 10*numLoops;
        }
        else{
            numWords = 0;
        }
        
        if(numLoops < maxNumRows){
            for(let i = 0; i < numLoops; i++){
                randomize(10);
                currentLines++;
            }
        }
        else{
            for(let i = 0; i < maxNumRows; i++){
                randomize(10);
                currentLines++;
            }
        }
    }
    else{
        trainingRandom();
    }
}

function changeColor(event)
{

    //https://stackoverflow.com/questions/20806059/how-to-change-colors-of-individual-characters-in-a-header
   
    console.log("CURRENTLINES: " + currentLines);
    let x = document.getElementsByClassName("lines")[line];
    let txt = x.innerText;
    let userFocus = document.getElementById("user-input");
    if(document.URL.includes("index.html")){
        if(currentOption == "time-button"){

            if((60*minute + second) >= Number(document.getElementById(currentNum).innerText)){
                userFocus.blur();
                openPop();
            
            }
            if(event.key == " "){
                numWords++;
            }
        }
    }
    if(txt.length == characters){
        if(currentLines != numLoops || currentOption == "time-button" && document.URL.includes("index.html")){
            randomize(10);
            document.getElementsByTagName("span")[0].remove();
            if(document.URL.includes("index.html")){
                document.getElementsByTagName("br")[1].remove();
            }
            else{
                console.log("RUNNING THIS");
                document.getElementsByTagName("br")[3].remove();
            }
            currentLines++;
            console.log("CURRENT LINES: " + currentLines);
            console.log("CURRENT LOOPS: " + numLoops);
        }
        else{
            line++;
        }
        
        x = document.getElementsByClassName("lines")[line]
        txt = x.innerText;
        console.log(txt);
        characters = 0;
        substringOne = "";
    }
        if(firstTime == true){
            clockTimer = setInterval(clock, 10);
        }
        firstTime = false;
        let partOne = txt.substring(0, characters);
        
        if(event.key == txt[characters]){

            substringOne = substringOne + '<span style="background-color:#'+"b3ffcc"+'">'+txt.charAt(characters)+'</span>';
            txt = substringOne + txt.substring(characters + 1);
            characters++;
            charactersPassed++;
        }
        else if(event.key != txt[characters]){
            substringOne = substringOne + '<span style="background-color:#'+"ff3300"+'">'+txt.charAt(characters)+'</span>';
            
            txt = substringOne + txt.substring(characters + 1);
            charactersMissed++;
            
            characters++;
        }
        console.log(x.innerText.length);
        //fix this why is it not loading for 100
        if(substringOne.length/47 == x.innerText.length - 1 && (line == ((numWords/10) - 1) || line == maxNumRows && currentLines == numLoops)){
            userFocus.blur();
            console.log("THIS ONE");
            openPop();
        }
        
        x.innerHTML = txt;
        updateStatistics();

        if((charactersPassed + charactersMissed) == textLength){
            userFocus.blur();
            console.log("THIS THING");
            openPop();
        }
        count++;

}





//code for training randomization

function trainingRandom(){
    resetSpans();
    currentOption = "words-button";
    for(let i = 0; i < 5; i++){
        randomize(10);
        numWords = 50;
    }
}