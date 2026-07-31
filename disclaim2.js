
/* CODE FOR THE TYPEWRITER ANIMATIONS */
const OutputDiv = document.getElementById('typer');

const txt = `I am neither a successful journalist, nor a known or relevant activist.
 Content on this blog is to exercise creativity and is not to be taken seriously. 
 Any problematic opinions are satirical. All 'typos' are intentional. 
 Any illegal activity is staged. <nl>
 Users must agree to the above conditions before continuing. <nl>
 ================================================================================================================================================ <nl>
         [a] Accept terms <nl>
         [n] Refuse terms <nl>
         Your choice:` ;

 const splitted = txt.split('<nl>');

 splitted.forEach(function(item, index) {
    const p = document.createElement('p');
    const span = document.createElement('span');

    if (index === 0) {
        span.classList.add('cursor');
    }

    p.appendChild(span);
    OutputDiv.appendChild(p);
 });

 const paras = OutputDiv.querySelectorAll('p');

let i = 0;
let currentPara = 0;

const intervalId = setInterval(function() {
    paras[currentPara].firstElementChild.textContent += splitted[currentPara][i];
    i++;

    if (i === splitted[currentPara].length) {
            paras[currentPara].firstElementChild.classList.remove('cursor');
            
            i = 0;
            currentPara++;
        if (currentPara < paras.length) {
            paras[currentPara].firstElementChild.classList.add('cursor');
        }
        if (currentPara === splitted.length) {
            clearInterval(intervalId);
            setTimeout(() => {
                document.getElementById("following").style.display = "none";
            }, 2000);   
        }
        }
}, 50);
