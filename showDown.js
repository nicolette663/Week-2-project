function fight() {
	let monster = prompt("What is the name of your Monster?");
	let hero = prompt("What is the name of your hero?");
	let monsterHealth = 50; 
  	let heroHealth = 50;
  	let playerLife = (50 - x);
  	let x = prompt("points away from loser");
  	let lifeLeft = (x - y);
  	let  y = prompt("points left of loser");


  	monsterDice = Math.floor((Math.random() * 20);
  	heroDice = Math.floor((Math.random() * 20);

  	 if attackRoll(hero, monster) = 1 || 2 {
  		result(stab yourself);
  		alert(`${playerLife} take 5 points away from loser`)
  		lifeLeft();
}
  	else if attackRoll() = 3 && 10; {
  		result(lose a turn);
  		alert(`${playerLife} take 0 points away from loser`);
  		lifeLeft();
}
  	else if attackRoll() = 11 && 19;{
  		result(hit the other);
  		alert(`${playerLife} take 10 points away from loser`);
  		lifeLeft();

  }	else attackRoll() = 19 || 20 {
  		result(critical hit);
  		alert(`${playerLife} take 20 points away from loser`);
  		lifeLeft();
	}
//Fighter's health is now zero.
if (this.lifeLeft == 0) {
	ctx.heroHealth(this.playerLife - this.lifeLeft);
 { else }
 //TC: do this until it reaches 0--can't figure out what to do next.  
}

//Find a way to let player know who won AND who lost by name.

//Add a line if they both kill each other.

// Below your newly defined function, invoke `fight()`.

//Go to the browser and run the file you just created.

//Ask the user if they would like to play again.

//If they answer "yes" restart the game,

//If they type "no", thank them for playing and end the game.

//If they type anything else, ask them again.






}




