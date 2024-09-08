//word file: https://github.com/dwyl/english-words/blob/master/LICENSE.md

var characters = 0;
var charactersPassed = 0;
var charactersMissed = 0;

let firstTime = true;
let hour = 0;
let minute = 0;
let second = 0;
const words = ["aardvark", "abandon", "abandonable", "abandons", "abase", "abased", "abash", "abashed", "abashedly", "abate", "abbey", "abbreviated", "abbreviator", "abdicate", "abdomen", "abhor", "abide", "abiotic", "abjection", "abjectly", "abolition", "abort", "aborted", "aboveground", "abrash", "abrasive", "abridged", "abroad", "absolutist", "absorb", "absorption", "abstain", "abusive", "academic"];

setInterval(clock, 10);


var substringOne = "";

var count = 0;
let clockIterator = 0;

function randomize(){
    let testingText = document.getElementById("testing-text");
    let text = "";
    let iterator = 0;
    while(iterator < 40){
        text = text + words[Math.floor(Math.random() * (words.length - 1))] + " ";
        iterator++;
    }
    text = text + words[Math.floor(Math.random() * (words.length - 1))]
    testingText.innerHTML = text;
    
}

function clock(){
    console.log("RUNNING THE CLOCK STUFF");
    clockIterator++;
    if(clockIterator == 100){
        second++;
    }

    if(second == 60){
        minute++;
        second = 0;
    }
    if(minute == 60){
        hour++;
        minute = 0;
    }

    if(second < 10){
        second = "0" + second;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    let timer = document.getElementById("time");
    let timerText = timer.innerText;
    timerText = timerText.substring(0, 12);
    timerText = timerText + hour + ":" + minute + ":" + second;
    timer.innerHTML = timerText;


}

function updateStatistics(){
    console.log("PASSED: " + charactersPassed);
    console.log("MISSED: " + charactersMissed);
    let passed = document.getElementById("passed");
    let missed = document.getElementById("missed");
    let missedTxt = missed.innerText;
    let passedTxt = passed.innerText;
    if(count == 0){
        passedTxt = passedTxt + charactersPassed;
        missedTxt = missedTxt + charactersMissed;
    }
    else{
        console.log("IN HERE");
        console.log(passedTxt);
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
        if(characters != 0){
            characters--;
        }
        console.log("WHAT WAS IT?: " +substringOne[substringOne.length - 11] );
        if(substringOne[substringOne.length - 11] == 'c'){
            charactersPassed--;
        }
        else{
            charactersMissed--;
        }
        substringOne = substringOne.slice(0, -47);
        console.log("REST OF STRING: " + substringOne);
        let x = document.getElementById("testing-text");
        let txt = x.innerText;
        txt = substringOne + txt.substring(characters);
        x.innerHTML = txt;
        console.log(txt);
        updateStatistics();
        
    }
}


function changeColor(event)
{


    console.log(substringOne + "SUBSTRING");

    firstTime = false;
    //https://stackoverflow.com/questions/20806059/how-to-change-colors-of-individual-characters-in-a-header
    let x = document.getElementById("testing-text");
        let txt = x.innerText;
        
        console.log(txt.charAt(2));
        let partOne = txt.substring(0, characters);
        
        if(event.key == txt[characters]){
            console.log("Worked");
            console.log(txt.charAt(characters));
            console.log(substringOne.innerText);
            substringOne = substringOne + '<span style="background-color:#'+"b3ffcc"+'">'+txt.charAt(characters)+'</span>';
            txt = substringOne + txt.substring(characters + 1);
            characters++;
            charactersPassed++;
        }
        else if(event.key != txt[characters]){
            console.log("DIDN'T WORK");
            console.log("Characters: " + characters);
            console.log(txt.charAt(characters));           
            console.log(substringOne.innerText);
            substringOne = substringOne + '<span style="background-color:#'+"ff3300"+'">'+txt.charAt(characters)+'</span>';
            txt = substringOne + txt.substring(characters + 1);
            charactersMissed++;
            
            characters++;
        }
        console.log(txt.charAt(2));
        console.log("SUBSTRING ONE" + substringOne);
        
        x.innerHTML = txt;
        updateStatistics();
        count++;

        

}



