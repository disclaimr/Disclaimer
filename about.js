/* CODE FOR THE TYPEWRITER ANIMATIONS */
const OutputDiv = document.getElementById('typer')

const txt = `Trevor Harms, AKA Disclaimer, is a sporadic idealist whose actions tie most closely to environmental justice 
but often include and involve social justice concerns as a whole. While their individual efforts pose no immediate 
danger to the public, their community building attempts have potential to initiate reform of long withstanding social systems. 
Their actions are plagued with inconsistency and burnout leading to extended periods of inactivity,
signs of an activist clearly in above their head. Distractivist is currently considered at large in Vancouver, BC,
and holds ties with sustainability groups in Northwest Colorado.`

const p = document.createElement('p'); /*Creates a paragraph and stores it as the variable p*/
const span = document.createElement('span'); /*Creates a span and stores it as the variable span*/
span.classList.add('cursor'); /*adds the class cursor to the span object*/
p.appendChild(span); /*span is now a child of the p object*/
OutputDiv.appendChild(p); /* p (and therefore also span) is now a child of OutputDiv*/

let i = 0
const IntervalId = setInterval(function() {
    OutputDiv.textContent += txt[i];
    i++;

    if (i === txt.length) {
        clearInterval(IntervalId);
        document.getElementById("top").style.top = "355px";
        document.getElementById("title").style.display = "flex";
        document.getElementById("tabs").style.display = "flex";
        document.getElementsByClassName("main").style.display = "block";
    }
}, 40)