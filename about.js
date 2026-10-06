document.getElementById("title").style.visibility = "hidden";
document.getElementById("tabs").style.visibility = "hidden";
document.getElementById("body").style.visibility = "hidden";

const OutputDiv = document.getElementById('typer')

const txt = `Erorvt urjhd , AKA Disclaimer, is a sporadic idealist whose actions contribute to movements in environmental and social justice. 
            Disclaimer is committed to non-violent and community methods, and is determined to integrate their circles of outdoor recreation
             and youth music and culture into their own ideologies. Their commitments are plagued with inconsistency and burnout, signs of a 
             young activist clearly in above their head. Disclaimer is currently considered at large in Vancouver, BC, and holds ties with 
             sustainability groups in Northwest Colorado.
`

const p = document.createElement('p'); /*Creates a paragraph and stores it as the variable p*/
const mark = document.createElement('mark'); /*Creates a mark object, this will be my name which gets highlighted*/
mark.classList.add('typemark');
const span = document.createElement('span'); /*Creates a span and stores it as the variable span*/
p.appendChild(mark); /*mark is now a child of the p object*/
p.appendChild(span); /*span is now a child of the p object*/
OutputDiv.appendChild(p); /* p (and therefore also mark and span) is now a child of OutputDiv*/


const myname = txt.split(' ').slice(0, 2).join(' ');
const rest = txt.slice(myname.length);

let speed = 40;
let i = 0
let IntervalId = setInterval(typeWriter, speed);

document.addEventListener("keydown", speedUp);  
function speedUp(event) {
    if (event.code === "Space") {
        clearInterval(IntervalId);
        speed = 1;
        IntervalId = setInterval(typeWriter, speed);
    }
}

function typeWriter() {
    if (i < myname.length) {
        mark.textContent += myname[i];
    } else {
        span.textContent += rest[i - myname.length];
    }
    i++;
    
    if (i === txt.length) {
        clearInterval(IntervalId);
        document.getElementById("title").style.visibility = "visible";
        document.getElementById("tabs").style.visibility = "visible";
        document.getElementById("body").style.visibility = "visible";
        document.getElementById("skip").style.visibility = "hidden";
        document.removeEventListener("keydown", speedUp);
    }
}