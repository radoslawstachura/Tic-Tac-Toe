
let tgl = document.getElementById("toggle");
window.onload=function(){
    console.log("app started");
    tgl.addEventListener("click", toggle);
    game.init();
};

function toggle(){
    let body = document.getElementsByTagName("body")[0];
    let tiles = document.getElementsByClassName("tile");
    let pAgain = document.getElementById("play-again");

    if(body.classList == "body-dark"){
        body.classList.remove("body-dark");
        body.classList.add("body-light");
    }
    else{
        body.classList.remove("body-light");
        body.classList.add("body-dark"); 
    }
    if(tgl.classList == "toggle-dark"){
        tgl.classList.remove("toggle-dark");
        tgl.classList.add("toggle-light");
        tgl.innerHTML = 'Dark mode';
    }
    else{
        tgl.classList.remove("toggle-light");
        tgl.classList.add("toggle-dark");
        tgl.innerHTML = 'Light mode';
    }
    for(let i=0;i<tiles.length;i++){
        if(tiles[i].classList[tiles[i].classList.length-1] == "tile-dark"){
            tiles[i].classList.remove("tile-dark");
            tiles[i].classList.add("tile-light");
        }
        else{
            tiles[i].classList.remove("tile-light");
            tiles[i].classList.add("tile-dark");
        }
    }
    if(pAgain.classList[pAgain.classList.length-1] == "play-again-dark"){
        pAgain.classList.remove("play-again-dark");
        pAgain.classList.add("play-again-light");
    }
    else{
        pAgain.classList.remove("play-again-light");
        pAgain.classList.add("play-again-dark");
    }
}

let game={
    buttons: undefined,
    turn: "x",
    xScore: 0,
    oScore: 0,
    DOMxScore: document.getElementById("x-score"),
    DOMoScore: document.getElementById("o-score"),

    init: function(){
        this.buttons=document.querySelectorAll(".tile");

        for(let i=0;i<this.buttons.length;i++){
            let el=this.buttons[i];
            el.addEventListener("click", this.changeTile);
        }
    },

    changeTile: function(e){
        //if(e.target.innerHTML === ""){
            if(game.turn === "x"){
                e.target.innerHTML='<i class="fa-solid fa-x"></i>';
                game.turn="o";
                
                let move=document.getElementById("turn");
                move.innerHTML="Turn" + '<p><i class="fa-regular fa-circle"></i></p>';
            }
            else{
                e.target.innerHTML='<i class="fa-regular fa-circle"></i>';
                game.turn="x";
                
                let move=document.getElementById("turn");
                move.innerHTML="Turn" + '<p><i class="fa-solid fa-x"></i></p>';
            }

            e.target.removeEventListener("click", game.changeTile);
            game.checkResult();
        //}
        /*for(let i=0;i<game.buttons.length;i++){
            let el=game.buttons[i];
            console.log(el);
            if(el.innerHTML !== ""){
                el.removeEventListener("click", game.changeTile);
            }
        }*/
    },

    checkResult: function(){
        if(((this.buttons[0].innerHTML === this.buttons[1].innerHTML) && (this.buttons[0].innerHTML === this.buttons[2].innerHTML) && (this.buttons[0].innerHTML =='<i class="fa-solid fa-x"></i>'))
            ||  ((this.buttons[3].innerHTML === this.buttons[4].innerHTML) && (this.buttons[3].innerHTML === this.buttons[5].innerHTML) && (this.buttons[3].innerHTML =='<i class="fa-solid fa-x"></i>'))
            ||  ((this.buttons[6].innerHTML === this.buttons[7].innerHTML) && (this.buttons[6].innerHTML === this.buttons[8].innerHTML) && (this.buttons[6].innerHTML =='<i class="fa-solid fa-x"></i>'))
            ||  ((this.buttons[0].innerHTML === this.buttons[3].innerHTML) && (this.buttons[0].innerHTML === this.buttons[6].innerHTML) && (this.buttons[0].innerHTML =='<i class="fa-solid fa-x"></i>'))
            ||  ((this.buttons[1].innerHTML === this.buttons[4].innerHTML) && (this.buttons[1].innerHTML === this.buttons[7].innerHTML) && (this.buttons[1].innerHTML =='<i class="fa-solid fa-x"></i>'))
            ||  ((this.buttons[2].innerHTML === this.buttons[5].innerHTML) && (this.buttons[2].innerHTML === this.buttons[8].innerHTML) && (this.buttons[2].innerHTML =='<i class="fa-solid fa-x"></i>'))
            ||  ((this.buttons[0].innerHTML === this.buttons[4].innerHTML) && (this.buttons[0].innerHTML === this.buttons[8].innerHTML) && (this.buttons[0].innerHTML =='<i class="fa-solid fa-x"></i>'))
            ||  ((this.buttons[2].innerHTML === this.buttons[4].innerHTML) && (this.buttons[2].innerHTML === this.buttons[6].innerHTML) && (this.buttons[2].innerHTML =='<i class="fa-solid fa-x"></i>'))
        ){
                let result=document.getElementById("result");
                result.innerHTML='<i class="fa-solid fa-x"></i> Won!';
                this.xScore++;

                this.DOMxScore.innerHTML = '<i class="fa-solid fa-x"></i>' + '<p>' + this.xScore + '</p>';
                
                this.finishGame();
        }
        else if(((this.buttons[0].innerHTML === this.buttons[1].innerHTML) && (this.buttons[0].innerHTML === this.buttons[2].innerHTML) && (this.buttons[0].innerHTML =='<i class="fa-regular fa-circle"></i>'))
            ||  ((this.buttons[3].innerHTML === this.buttons[4].innerHTML) && (this.buttons[3].innerHTML === this.buttons[5].innerHTML) && (this.buttons[3].innerHTML =='<i class="fa-regular fa-circle"></i>'))
            ||  ((this.buttons[6].innerHTML === this.buttons[7].innerHTML) && (this.buttons[6].innerHTML === this.buttons[8].innerHTML) && (this.buttons[6].innerHTML =='<i class="fa-regular fa-circle"></i>'))
            ||  ((this.buttons[0].innerHTML === this.buttons[3].innerHTML) && (this.buttons[0].innerHTML === this.buttons[6].innerHTML) && (this.buttons[0].innerHTML =='<i class="fa-regular fa-circle"></i>'))
            ||  ((this.buttons[1].innerHTML === this.buttons[4].innerHTML) && (this.buttons[1].innerHTML === this.buttons[7].innerHTML) && (this.buttons[1].innerHTML =='<i class="fa-regular fa-circle"></i>'))
            ||  ((this.buttons[2].innerHTML === this.buttons[5].innerHTML) && (this.buttons[2].innerHTML === this.buttons[8].innerHTML) && (this.buttons[2].innerHTML =='<i class="fa-regular fa-circle"></i>'))
            ||  ((this.buttons[0].innerHTML === this.buttons[4].innerHTML) && (this.buttons[0].innerHTML === this.buttons[8].innerHTML) && (this.buttons[0].innerHTML =='<i class="fa-regular fa-circle"></i>'))
            ||  ((this.buttons[2].innerHTML === this.buttons[4].innerHTML) && (this.buttons[2].innerHTML === this.buttons[6].innerHTML) && (this.buttons[2].innerHTML =='<i class="fa-regular fa-circle"></i>'))
        ){
            let result=document.getElementById("result");
            result.innerHTML='<i class="fa-regular fa-circle"></i> Won!';
            this.oScore++;
            
            this.DOMoScore.innerHTML = '<i class="fa-regular fa-circle"></i>' + '<p>' + this.oScore + '</p>';
            
            this.finishGame();
        }
        else if((this.buttons[0].innerHTML) !== ""
            &&  (this.buttons[1].innerHTML) !== ""
            &&  (this.buttons[2].innerHTML) !== ""
            &&  (this.buttons[3].innerHTML) !== ""
            &&  (this.buttons[4].innerHTML) !== ""
            &&  (this.buttons[5].innerHTML) !== ""
            &&  (this.buttons[6].innerHTML) !== ""
            &&  (this.buttons[7].innerHTML) !== ""
            &&  (this.buttons[8].innerHTML) !== ""
        ){
            let result=document.getElementById("result");
            result.innerHTML="Draw";

            this.finishGame();
        }
    },

    finishGame: function(){
        let button=document.getElementById("play-again");
        button.innerHTML = "Play again";
        button.addEventListener("click",this.playAgain);
        for(let i=0;i < game.buttons.length;i++){
            let el=game.buttons[i];
            el.removeEventListener("click",this.changeTile);
        }
    },

    playAgain: function(){
        for(let i=0;i < game.buttons.length;i++){
            let el=game.buttons[i];
            el.innerHTML = "";
        }
        let button=document.getElementById("play-again");
        button.innerHTML = "";
        let result=document.getElementById("result");
        result.innerHTML = "Click on the tiles";
        game.turn = "x";

        let move=document.getElementById("turn");
        move.innerHTML="Turn" + '<p><i class="fa-solid fa-x"></i></p>';

        game.init();
    }
}