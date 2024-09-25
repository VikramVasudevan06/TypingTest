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
var numTests = 0;
var numTrains = 0;

var currentOption = "words-button";

var currentNum = "thirdnum";
var clockTimer;
var line = 0;
var currentLines = 0;
const maxNumRows = 5;
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


window.onload=function(){
    resetVars();
    randomize(20);
    initialSetColor();
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
        document.getElementsByTagName("br")[1].remove();
        if(document.getElementsByTagName("span")[0]=== undefined){
            break;
        }

    }
}



function resetVars(){
    numLoops = Number(document.getElementById(currentNum).innerText)/10;
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

    while(iterator < 100){
        for(let i = 0; i < Math.floor(Math.random() * 10); i++){
            text = text + givenArray[Math.floor(Math.random() * (givenArray.length - 1))];
        }
        text = text + " ";
        iterator++;
    }
    numWords = 100;

    testingText.innerHTML = text;


    let userText = document.getElementById("user-input");
    userText.focus();
    userText.value = "";
    document.getElementById("passed").innerHTML = "Characters Passed: ";
    document.getElementById("missed").innerHTML = "Characters Missed: ";
    resetVars();
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
    let timerText = timer.innerText;
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

function openPop(){
    numTests++;
    console.log("NUMWORDS: " + numWords);
    let totalTime = (3600*hour + 60*minute + second)/60;
    let wordsPer = Math.round(numWords/totalTime);
    console.log(wordsPer);
    clearInterval(clockTimer);
    console.log(pop.classList);
    wpmText = document.getElementById("wpm").innerText;
    pop.classList.add("open");
    console.log("IT'S OPEN NOW");
}

function closePop(){
    pop.classList.remove("open");
    resetVars();
    document.getElementById("passed").innerText = "Characters Passed: " +  charactersPassed;
    document.getElementById("missed").innerText = "Characters Missed: " + charactersMissed;
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

function changeColor(event)
{

    //https://stackoverflow.com/questions/20806059/how-to-change-colors-of-individual-characters-in-a-header
   
    
    let x = document.getElementsByClassName("lines")[line];
    let txt = x.innerText;
    let userFocus = document.getElementById("user-input");
    if(currentOption == "time-button"){

        if((60*minute + second) >= Number(document.getElementById(currentNum).innerText)){
            userFocus.blur();
            openPop();
           
        }
        if(event.key == " "){
            numWords++;
        }
    }
    
    if(txt.length == characters){
        if(currentLines != numLoops || currentOption == "time-button"){
            randomize(10);
            document.getElementsByTagName("span")[0].remove();
            document.getElementsByTagName("br")[1].remove();
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
        
            openPop();
        }
        
        x.innerHTML = txt;
        updateStatistics();

        if((charactersPassed + charactersMissed) == textLength){
            openPop();
        }
        count++;

}



