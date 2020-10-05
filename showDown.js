function fight() {
	let monster = prompt("What is the name of your Monster?");
	let hero = prompt("What is the name of your hero?");
	let monsterHealth = 50; 
  	let heroHealth = 50;
  	

  	while (heroHealth > 0 && monsterHealth  > 0) {
  		
  		monsterDice = Math.floor(Math.random() * 20);
      
      heroDice = Math.floor(Math.random() * 20);

  	  
  	 if (heroDice == 1 || heroDice == 2) {
  	 	//hero stabs for 9 point damage
  	 	//alert new health
		heroHealth = heroHealth - 5;
  	 	alert(`uh-oh! ${hero} stabs self!`);

  	}  	else if (heroDice >= 3 || heroDice <= 10) {
  		alert(`${hero} misses`);

  	}
	  	else if (heroDice >= 11 || heroDice <= 18) {
  		alert(`${hero} strikes ${monster}`);
  		villainHealth = villainHealth - 10;
  		

  }		else if (heroDice >= 19)  {
  		alert(`Critical hit ${hero} does double damage!`);
  		villainHealth = villainHealth - 20;
  		}


if (monsterDice == 1 || monsterDice == 2) {
  	 	//hero stabs for 9 point damage
  	 	//alert new health
		monsterHealth = monsterHealth - 5;
  	 	alert(`uh-oh! ${monster} stabs self!`);

  	}  	else if (monsterDice >= 3 || monsterDice <= 10) {
  		alert(`${monster} misses`);

  	}
	  	else if (monsterDice >= 11 || monsterDice <= 18) {
  		alert(`${monster} strikes ${hero}`);
  		villainHealth = villainHealth - 10;
  		

  }		else if (monsterDice >= 19)  {
  		alert(`Critical hit ${hero} does double damage!`);
  		villainHealth = villainHealth - 20;
  		}

//Fighter's health is now zero.
 alert(`${hero} has ${heroHealth} hitpoints left, ${monster} has ${villainHealth} left.`);
	}
}
	
//Find a way to let player know who won AND who lost by name.

//Add a line if they both kill each other.

// Below your newly defined function, invoke `fight()`.
fight();

//Go to the browser and run the file you just created.

//Ask the user if they would like to play again.

//If they answer "yes" restart the game,

//If they type "no", thank them for playing and end the game.

//If they type anything else, ask them again.






}



  while (heroHealth >=0 && villainHealth >= 0) {
    let heroDice = Math.floor(Math.random()*20)
    let monsterDice = Math.floor(Math.random()*20)

    if (heroDice == 1 || heroDice == 2) {
      // hero stabs himself for 5 damage
      // alert the new heath
      heroHealth = heroHealth - 5;
      alert(`Critical failure! ${hero} accidentally stabs self!`);
    } else if (heroDice >= 3 || heroDice <=10) {
      alert(`${hero} misses`);
    } else if (heroDice >= 11 || heroDice <= 18) {
      alert(`${hero} strikes ${monster}`);
      villainHealth = villainHealth - 10;
    } else if (heroDice >= 19) {
      alert(`Critical hit! ${hero} does double damage!`);
      villainHealth = villainHealth - 20;
    }
    if (monsterDice == 1 || monsterDice == 2) {
      // hero stabs himself for 5 damage
      // alert the new heath
      villainHealth = villainHealth - 5;
      alert(`Critical failure! ${monster} accidentally stabs self!`);
    } else if (monsterDice >= 3 || monsterDice <=10) {
      alert(`${monster} misses`);
    } else if (monsterDice >= 11 || monsterDice <= 18) {
      alert(`${monster} strikes ${hero}`);
      villainHealth = villainHealth - 10;
    } else if (heroDice >= 19) {
      alert(`Critical hit! ${hero} does double damage!`);
      villainHealth = villainHealth - 20;
    }
    
    alert(`${hero} has ${heroHealth} hitpoints left, ${monster} has ${villainHealth} left.`)
  }
}

