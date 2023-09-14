console.log("Testing ")

//DOM - Document Object Model
// console.log(document)


// console.log(document.querySelector('.message'))

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "hello From JS"

// document.querySelector('.check').textContent = "Click me";

//Event Listners

let secretNumber = Math.trunc(Math.random()*20 +1)
console.log("Secret Num", secretNumber);
let score = 20;
let highscore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click',function(){
    console.log("Button Was Clicked");
    const guess = Number(document.querySelector('.guess').value)

    if(!guess){
        console.log("Please enter a value")
        // document.querySelector('.message').textContent = "❌ No Number"
        displayMessage("❌ No Number")
    }else if (guess > secretNumber){
        
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "📈 Too High!!";
        }else{
            document.querySelector('.message').textContent = "💥 You Lost the game";
            document.querySelector('.score').textContent = 0;
        }
        
    }else if (guess < secretNumber){
    
        if(score>1){
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent = "📉 Too Low!!";
        }else{
            document.querySelector('.message').textContent = "💥 You Lost the game";
            document.querySelector('.score').textContent = 0;
        }


    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = "🎉 Correct Number";
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('body').style.backgroundColor = "#60b347"

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    }
})

document.querySelector('.again').addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random()*20 +1)
    score = 20;

    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing....';

    document.querySelector('.number').textContent = '?';


    document.querySelector('body').style.backgroundColor = "#222"

})