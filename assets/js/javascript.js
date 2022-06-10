let divs = document.querySelectorAll("main div");


for(let div of divs){
    div.addEventListener("click",()=>{
        let Keyclick = div.id;
        play_sound(Keyclick);
    });
}




document.body.addEventListener("keyup",(event)=>{
    play_sound(event.code.toLocaleLowerCase());
});

document.querySelector("section button").addEventListener("mousein",()=>{
    let composição = document.querySelector("section input").value;
    
    if(composição !==""){
        let composiçãoArray = composição.split("");
        playComposition(composiçãoArray);
    }
    
});

function play_sound(sound){
    let audioSelected = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`#${sound}`);

    if(audioSelected){
        audioSelected.currentTime = 0;
        audioSelected.play();
    }

    if(keyElement){
        keyElement.classList.add("active");

        setTimeout(()=>{
            keyElement.classList.remove("active");
        },300);
    }
};

function playComposition(composiçãoArray){
    let tempo = 0;

    for(let composiçãoitem of composiçãoArray){
        setTimeout(()=>{
            play_sound(`key${composiçãoitem}`);
        },tempo);

        tempo+=250;
    }
}