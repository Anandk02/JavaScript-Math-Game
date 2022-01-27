'strict'
var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;
document.getElementById("startRest").onclick = 
function(){
    if(playing == true){
            location.reload()  //reload page 
    }else{
        playing = true; //change mode to playing 
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        show("timeRemaining"); //show countdown
        timeRemaining = 60;
        document.getElementById("TimeRemainingValue").innerHTML = timeRemaining;
        hide("gameOver");
        document.getElementById("interction").style.display = "block";
        document.getElementById("interction").innerHTML = "Click On the Correct Answer";
        document.getElementById("startRest").innerHTML = "Reset Game"
        startCountdown();
        GenerateQA();
    }
}
for(i =1; i < 5; i++){
    document.getElementById("box" + i ).onclick = function(){
        if(playing = true){   //yes
             if(this.innerHTML == correctAnswer){
                score ++ ;
                document.getElementById("scoreValue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                        hide("correct");
                },1000);
                GenerateQA();

             }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                        hide("wrong");
                },1000);
             }
        }
}
}
 
function startCountdown(){
    action = setInterval(function(){
        timeRemaining -=1;
        document.getElementById("TimeRemainingValue").innerHTML = timeRemaining;
        if(timeRemaining == 0 ){
            stopCountdown();
            show("gameOver")
            document.getElementById("gameOver").innerHTML = "<p> GameOver<p>Your Score is " + score + ". </p></p>";

            hide("TimeRemainingValue")
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startRest").innerHTML = "start Game";
        }
    },1000 );
}

// stop Countdown
function stopCountdown(){
    clearInterval(action);
}

// Hide an element 
function hide(id){
        document.getElementById(id).style.display ="none";
}

// show element
function show(id){
    document.getElementById(id).style.display ="block";
}

// Generate new question /Answer
function GenerateQA(){
    var x = 1 +  Math.round(9 * Math.random());
    var y = 1 +  Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1 +  Math.round(3 * Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with correct answer
    var answers = [correctAnswer];    // fill the boxes with wrong answer
    for(i = 1; i < 5; i++ ){
        if(i != correctPosition){
                var wrongAnswer;
               do{
                wrongAnswer = (1 +  Math.round(9 * Math.random()))* (1 +  Math.round(9 * Math.random()));
               }while(answers.indexOf(wrongAnswer) >-1)
               document.getElementById("box"+ i).innerHTML = wrongAnswer;
               answers.push(wrongAnswer);
        }
    }
}
