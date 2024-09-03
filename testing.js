var characters = 0;


function changeColor(event)
{
    
    
    //https://stackoverflow.com/questions/20806059/how-to-change-colors-of-individual-characters-in-a-header
    var x = document.getElementById("testing-text"),
        txt = x.innerText;
        let partOne = txt.substring(0, characters);
        var newText = "";
        if(event.key == "Backspace"){
            txt[characters]= '<span style="background-color:none'+'">'+txt.charAt(characters)+'</span>';
            if(characters != 0){
                characters--;
            }
        }
        else if(event.key == txt[characters]){
            txt[characters] = '<span style="background-color:#'+"b3ffcc"+'">'+txt[characters]+'</span>';
            characters++;
        }
        else if(event.key != txt[characters]){
            txt[characters] = '<span style="background-color:#'+"ff3300"+'">'+txt[characters]+'</span>';
            characters++;
        }
        txt = txt.join('');
        x.innerHTML = newText;

}



