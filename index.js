window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll(".sound");
    const drummusic = document.querySelectorAll(".drummusic div");
    const visual = document.querySelector('.visual');
    const colors =  [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#fefr45",
        "#75939j",
        "#4673gf",
        "#2435gd"
    ];

    // console.log(sounds);
    // console.log(drummusic);
    drummusic.forEach((drummusic,index) => {
        drummusic.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            // console.log(sounds[index].currentTime);
            sounds[index].play();
            // createBubbles(index);
        });
    });
    // const createBubbles = (index)=>{
    //     const bubble = document.createElement("div");
    //     visual.appendChild(bubble);
    //     bubble.style.backgroundColor = colors[index];
    //     bubble.style.animation = 'jump 1s ease';
    //     // bubble.addEventListener("animationend", function(){
    //     //     visual.removeChild(this);
    //     // });
    // };
});


