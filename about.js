/* CODE FOR THE TYPEWRITER ANIMATIONS */
document.getElementById("title").style.display = "none";
document.getElementById("tabs").style.display = "none";
document.getElementById("body").style.display = "none";



const OutputDiv = document.getElementById('typer')

const txt = `Trevor Harms, AKA Disclaimer, is a sporadic idealist whose actions contribute to movements in environmental and social justice. 
            Disclaimer is committed to non-violent and community methods, and is determined to integrate their circles of outdoor recreation
             and youth music and culture into their own ideologies. Their commitments are plagued with inconsistency and burnout, signs of a 
             young activist clearly in above their head. Disclaimer is currently considered at large in Vancouver, BC, and holds ties with 
             sustainability groups in Northwest Colorado.
`

const p = document.createElement('p'); /*Creates a paragraph and stores it as the variable p*/
const span = document.createElement('span'); /*Creates a span and stores it as the variable span*/
span.classList.add('cursor'); /*adds the class cursor to the span object*/
p.appendChild(span); /*span is now a child of the p object*/
OutputDiv.appendChild(p); /* p (and therefore also span) is now a child of OutputDiv*/

let speed = 40;
let i = 0
let IntervalId = setInterval(typeWriter, speed);

function typeWriter() {
    OutputDiv.textContent += txt[i];
    i++;

    if (i === txt.length) {
        clearInterval(IntervalId);
        document.getElementById("title").style.display = "flex";
        document.getElementById("tabs").style.display = "flex";
        document.getElementById("body").style.display = "block";
        document.getElementById("skip").style.display = "none";
        document.removeEventListener("keydown", speedUp);
    }
}

document.addEventListener("keydown", speedUp);  
function speedUp(event) {
    if (event.code === "Space") {
        clearInterval(IntervalId);
        speed = 1;
        IntervalId = setInterval(typeWriter, speed);
    }
}