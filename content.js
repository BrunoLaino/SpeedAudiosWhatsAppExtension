const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");

    if(header){
        
        console.log(header);
        clearInterval(interval);
        
        const button = document.createElement("button");
        button.innerHTML = "2x";
        var vel = 1 // velocidade
        button.classList.add("twoTimesButton");
        
        

        button.addEventListener("click", () =>{

            if(vel == 1) {
                twoTimesSpeed();
            }else{
                oneTimeSpeed();
            }

        });
        header.appendChild(button);
        
        function twoTimesSpeed(){
            //button.innerHTML = "2x";
            vel = 2;
            audios = document.querySelectorAll("audio");
            console.log(audios);
            audios.forEach((audio) => {
                console.log(audio);
                audio.playbackRate = 2;
            });
        }

        function oneTimeSpeed(){
            //button.innerHTML = "1x";
            vel = 1;
            audios = document.querySelectorAll("audio");
            console.log(audios);
            audios.forEach((audio) => {
                console.log(audio);
                audio.playbackRate = 1;
            });
        }

    }
},1000);

