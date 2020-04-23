const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    if(header){
        console.log(header);
        clearInterval(interval);

        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("twoTimesButton");

        button.addEventListener("click", twoTimesSpeed);
        header.appendChild(button);

        
        function twoTimesSpeed(){
            audios = document.querySelectorAll("audio");
            console.log(audios);
            audios.forEach((audio) => {
                console.log(audio);
                audio.playbackRate = 2;
            })
            button.removeEventListener("click",twoTimesSpeed);
            button.onclick = oneTimeSpeed;
        }

        function oneTimeSpeed(){
            audios = document.querySelectorAll("audio");
            console.log(audios);
            audios.forEach((audio) => {
                console.log(audio);
                audio.playbackRate = 1;
            })
            button.removeEventListener("click",oneTimeSpeed);
            button.onclick = twoTimesSpeed;
        }

    }
},1000);

