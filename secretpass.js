let secretpass = document.getElementById("secretpass"); /*calls up the secret password span*/
        document.addEventListener("keydown", pass);
        function pass(event) {
            secretpass.textContent += event.key;
            console.log(secretpass.textContent)
            if (secretpass.textContent === "password") {
                setTimeout( () => {
                    window.location.href = "secret.html"} , 100)
            }
        }