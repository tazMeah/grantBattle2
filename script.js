"use strict";
let yourName;
let yourHealth = 40;
let grantHealth = 10;
let yourWins = 0;

function startGame() {
  let confirmation = prompt("Do you want to play a game against Grant?");
 
  if (confirmation.toLowerCase() == "yes"){

//prompt user to enter name
  yourName = prompt("Enter your name.");
  }
  startCombat();
}

function startCombat() {
  //while loop to begin battle
while (yourHealth > 0 || grantHealth > 0) {
  console.log(`${yourName} has ${yourHealth} health left.`);
  console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);

// yourHealth -= (Math.ceil(Math.random()*2));
// grantHealth -= (Math.ceil(Math.random()*2));

//confirm if attack
if (confirm("Press OK to attack. Cancel to quit.")) {
  yourHealth -= getDamage();
  grantHealth -= getDamage();




  //if Grant's health equals 0
  if (grantHealth <= 0) {
      if (grantHealth === -1) {
          grantHealth = 0; // negative health doesn't make sense.
      }
      //grant is defeated AND you get 1 win, Grant gets 10 health points
      yourWins++;
      console.log(`Fatal blow! Grant has ${grantHealth} health.`);
      console.log(`${yourName} beat Grant ${yourWins} time\(s\).`);
          //if you have 3 wins, you win. Game over
      if (yourWins === 3) {
          console.log(`Grant has no more health potions. ${yourName} wins!!!`);
          break;
          
      } else {
          grantHealth = 10;
          console.log(`Grant drank a health potion and is back for more!`);
          continue;
      }

     

  }



  //if Grant wins, game over.
  if (yourHealth <= 0) {
      if (yourHealth === -1) {
          yourHealth = 0; //negative health doesn't make sense.
      }
      console.log(`Fatal blow! ${yourName} has 0 health left.`)
      console.log("Grant wins! Game over.");
      break;
  }
} else {
  break;
}



}
}

function getDamage() {
  return Math.ceil(Math.random()* 5);
}





