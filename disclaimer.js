/*RANDOM THOUGHTS COLLECTOR
    If I want to incorporate a 'skip' button for this sort of intro page, I could use window.addEventlistener,
        and create a fuction that if for example space is pressed, the time setting for setInterval could be 
        switched to like 1 or 10 or something instead of 50, making it run way faster.
                Include a flashing "press space to skip" text box at the bottom to make this clear

*/
/* CODE FOR THE TYPEWRITER ANIMATIONS */
const OutputDiv = document.getElementById('typer'); /*creates OutputDiv, this is the object to be displayed via typewriter effect*/

const txt = `I am neither a successful journalist, nor a known or relevant activist.
 Content on this blog is to exercise creativity and is not to be taken seriously. 
 Any problematic opinions are satirical. All 'typos' are intentional. 
 Any illegal activity is staged. <nl>
 Users must agree to the above conditions before continuing. <nl>
 ================================================================================================================================================ <nl>
         [a] Accept terms <nl>
         [n] Refuse terms <nl>
         Your choice:  ` ; /* Making the text to appear from typewriter effect, using <nl> as a custom version of <br>*/

 const splitted = txt.split('<nl>'); /*Splits txt into array of substrings, new substring every time <nl> appears*/

 splitted.forEach(function(item, index) { /*.forEach calls a function for each element in an array*/
    const p = document.createElement('p'); /*Creates a paragraph and stores it as the variable p*/
    const span = document.createElement('span'); /*Creates a span and stores it as the variable span*/

    if (index === 0) { /*if the index is 0, uses === to check data type and value*/
        span.classList.add('cursor'); /*adds the class cursor to the span object*/
    }

    p.appendChild(span); /*span is now a child of the p object*/
    OutputDiv.appendChild(p); /* p (and therefore also span) is now a child of OutputDiv*/
 });

 const paras = OutputDiv.querySelectorAll('p'); /*defines paras which is a nodelist. All objects with class p in OutputDiv go into this nodelist and recieve their own indexes */

let i = 0; /*i is for what?*/
let currentPara = 0; /* is for what?*/

const intervalId = setInterval(function() { /* setting up setInterval, intervalId updates to which run of the function its on*/
    paras[currentPara].firstElementChild.textContent += splitted[currentPara][i]; /*THIS IS THE LINE WHERE EVERYTHING HAPPENS*/
    /*paras[currentPara] indexes for whichever paragraph element w/in paras we're on
    .firstElementChild specifically accesses the first child of the paragraph we just focused on, aka the span
    .textContent accessed specifically just the text. Essentially, we've scoped it down to asking what letters do we already have? and then we can just add another letter right in there
    += adds something to an object, and means the object is now equal to that new addition. in this case, it will be adding a letter into the text we've just scooped into
    splitted[currentPara][i] pulls up the line, and then letter from splitted, the one that actually contains text*/
    i++; /*because we'll be ready for the next letter after this*/

    if (i === splitted[currentPara].length) { /* if we're on the last letter of that line*/
            paras[currentPara].firstElementChild.classList.remove('cursor'); /*removes the cursor class from the paragraph we were currently working on*/
            i = 0; /*resets the letter count as we're about to be on a new line*/
            currentPara++; /* accesses the next line*/
        if (currentPara < paras.length) { /*if there are more line's after the one we just finished*/
            paras[currentPara].firstElementChild.classList.add('cursor'); /*add cursor to the next line since there are more*/
        }
        if (currentPara === paras.length) { /*if that was the last line, so we're ready to clean up and move on*/
            clearInterval(intervalId); /*resets the intervalId to 0, cancelling the repeating timer/function of setInterval*/ 
            setTimeout(() => { /*will run the function on the below line AFTER the set amount of time*/

                /*this sets up the user input and its cursor*/
                const typedChar = document.createElement("span"); /*creates a span element for the user's input*/
                const cursor = document.createElement("span"); /* creates another span element for the cursor*/
                typedChar.id = "typedChar"; /*adds id tag to typedChar*/
                cursor.classList.add("cursor"); /*adds cursor to the 'cursor' class, will follow same CSS properties as before*/
                paras[paras.length - 1].appendChild(typedChar); /*appends the user input to the end of the typewriter program's last line, now that program is done running*/
                paras[paras.length - 1].appendChild(cursor); /*appends cursor after user input in same way*/

                }, 10); /*will run after ___ ms*/
        }
        }
}, 40); /* 50 = 50 milliseconds, or how often the function runs. 1 letter = .05 seconds*/
document.addEventListener("keydown", function(event) { 
            /*"keydown" means the entire page is now listening for a key input
                function(event) is calling a function, where event is a parameter for the event, 'event' could be anything and we will call on it again
                in the event parameter, information about the keypress was created and is now stored under the word 'event'*/
    document.getElementById("typedChar").textContent = event.key; 
            /*the span element "typedChar"'s text content will now be whatever the key stored under 'event' is, aka the key that was just typed*/
    if (event.key === "a") {
        document.getElementById("proceeding").style.display = "block";
        setTimeout( () => {
            window.location.href = "about.html"
        } , 2000);
    }
})
