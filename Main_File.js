let randomNum=Math.floor(Math.random()*100)
let guess=prompt("Guess a number between 0 and 100")    
let chance=1
while(guess!=randomNum){
    if(guess<randomNum){
        console.log("Too Low")

        chance++
        guess=prompt("Guess a number between 0 and 100")
        
        continue;
   }else if(guess>randomNum){
        console.log("Too High")
        chance++  
        guess=prompt("Guess a number between 0 and 100")
        continue;  
   }else if(guess==randomNum){
        break;
   }
}
console.log("You guessed",randomNum, "right in",chance,"chances")
