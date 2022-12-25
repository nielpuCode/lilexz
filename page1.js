let counter = 1;
function playmusic1(){
    const music = document.getElementById("music1");
    if (counter == 0) {
        music.pause();
        counter++;
        document.getElementById("play1").style.display = "block";
        document.getElementById("pause1").style.display = "none";
        document.querySelector('#ani1').addEventListener('click', function() {
            this.style.animationName = '';

        });
    }else if (counter == 1){
        music.play();
        counter--;
        document.getElementById("play1").style.display = "none";
        document.getElementById("pause1").style.display = "block";

        document.querySelector('#ani1').addEventListener('click', function() {
            this.style.animationName = 'brobre';
            this.style.animationDuration = '1s';
            this.style.animationIterationCount = 'infinite';
            this.style.animationTimingFunction = 'linear';
        });
    }
}

function playmusic2(){
    const music = document.getElementById("music2");
    if (counter == 0) {
        music.pause();
        counter++;
        document.getElementById("play2").style.display = "block";
        document.getElementById("pause2").style.display = "none";
        document.querySelector('#ani2').addEventListener('click', function() {
            this.style.animationName = '';

        });
    }else if (counter == 1){
        music.play();
        counter--;
        document.getElementById("play2").style.display = "none";
        document.getElementById("pause2").style.display = "block";
        document.querySelector('#ani2').addEventListener('click', function() {
            this.style.animationName = 'brobre';
            this.style.animationDuration = '1s';
            this.style.animationIterationCount = 'infinite';
            this.style.animationTimingFunction = 'linear';
        });
    }    
}

function playmusic3(){
    const music = document.getElementById("music3");
    if (counter == 0) {
        music.pause();
        counter++;
        document.getElementById("play3").style.display = "block";
        document.getElementById("pause3").style.display = "none";
        document.querySelector('#ani3').addEventListener('click', function() {
            this.style.animationName = '';

        });
    }else if (counter == 1){
        music.play();
        counter--;
        document.getElementById("play3").style.display = "none";
        document.getElementById("pause3").style.display = "block";
        document.querySelector('#ani3').addEventListener('click', function() {
            this.style.animationName = 'brobre';
            this.style.animationDuration = '1s';
            this.style.animationIterationCount = 'infinite';
            this.style.animationTimingFunction = 'linear';
        });
    } 
}

function playmusic4(){
    const music = document.getElementById("music4");
    if (counter == 0) {
        music.pause();
        counter++;
        document.getElementById("play4").style.display = "block";
        document.getElementById("pause4").style.display = "none";
        document.querySelector('#ani4').addEventListener('click', function() {
            this.style.animationName = '';

        });
    }else if (counter == 1){
        music.play();
        counter--;
        document.getElementById("play4").style.display = "none";
        document.getElementById("pause4").style.display = "block";
        document.querySelector('#ani4').addEventListener('click', function() {
            this.style.animationName = 'brobre';
            this.style.animationDuration = '1s';
            this.style.animationIterationCount = 'infinite';
            this.style.animationTimingFunction = 'linear';
        });
    }
}

function playmusic5(){
    const music = document.getElementById("music5");
    if (counter == 0) {
        music.pause();
        counter++;
        document.getElementById("play5").style.display = "block";
        document.getElementById("pause5").style.display = "none";
        document.querySelector('#ani5').addEventListener('click', function() {
            this.style.animationName = '';

        });
    }else if (counter == 1){
        music.play();
        counter--;
        document.getElementById("play5").style.display = "none";
        document.getElementById("pause5").style.display = "block";
        document.querySelector('#ani5').addEventListener('click', function() {
            this.style.animationName = 'brobre';
            this.style.animationDuration = '1s';
            this.style.animationIterationCount = 'infinite';
            this.style.animationTimingFunction = 'linear';
        });
    }
}

