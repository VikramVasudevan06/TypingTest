var characters = 0;

var substringOne = "";
function changeColor(event)
{
    console.log(substringOne + "SUBSTRING");
    
    
    //https://stackoverflow.com/questions/20806059/how-to-change-colors-of-individual-characters-in-a-header
    var x = document.getElementById("testing-text"),
        txt = x.innerText;
        console.log(txt.charAt(2));
        let partOne = txt.substring(0, characters);
        if(event.key == "Backspace"){
            if(characters != 0){
                characters--;
            }
            substringOne[characters] =  '<span style="background-color:none'+'">'+txt.charAt(characters)+'</span>';
            txt = substringOne + txt.substring(characters + 1);
            
        }
        else if(event.key == txt[characters]){
            console.log("Worked");
            console.log(txt.charAt(characters));
            console.log(substringOne.innerText);
            substringOne = substringOne + '<span style="background-color:#'+"b3ffcc"+'">'+txt.charAt(characters)+'</span>';
            txt = substringOne + txt.substring(characters + 1);
            characters++;
        }
        else if(event.key != txt[characters]){
            console.log("DIDN'T WORK");
            console.log("Characters: " + characters);
            console.log(txt.charAt(characters));           
            console.log(substringOne.innerText);
            substringOne = substringOne + '<span style="background-color:#'+"ff3300"+'">'+txt.charAt(characters)+'</span>';
            txt = substringOne + txt.substring(characters + 1);
            
            
            characters++;
        }
        console.log(txt.charAt(2));
        console.log("SUBSTRING ONE" + substringOne);
        
        x.innerHTML = txt;

}



