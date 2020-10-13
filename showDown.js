function fight() {
	let monster = prompt("What is the name of your Monster?");
	let hero = prompt("What is the name of your hero?");
	let monsterHealth = 50; 
  let heroHealth = 50;
  
  while (heroHealth >= 0 && villainHealth >= 0) {
      let heroDice = (Math.floor(Math.random()*20 + 1));
      let monsterDice = (Math.floor(Math.random()*20 + 1));

    if (heroDice == 1 && heroDice == 2) {
      // hero stabs himself for 5 damage
      // alert the new heath
      heroHealth = heroHealth - 5;
      alert(`Critical failure! ${hero} accidentally stabs self!`);
    } else if (heroDice >= 3 && heroDice <=10) {
      alert(`${hero} misses`);
    } else if (heroDice >= 11 && heroDice <= 18) {
      alert(`${hero} strikes ${monster}`);
      monsterHealth = monsterHealth - 10;
    } else if (heroDice >= 19) {
      alert(`Critical hit! ${hero} does double damage!`);
      monsterHealth = monsterHealth - 20;
    }
    if (monsterDice == 1 && monsterDice == 2) {
      // hero stabs himself for 5 damage
      // alert the new heath
      monsterHealth = monsterHealth - 5;
      alert(`Critical failure! ${monster} accidentally stabs self!`);
    } else if (monsterDice >= 3 && monsterDice <=10) {
      alert(`${monster} misses`);
    } else if (monsterDice >= 11 && monsterDice <= 18) {
      alert(`${monster} strikes ${hero}`);
      monsterHealth = monsterHealth - 10;
    } else if (heroDice >= 19) {
      alert(`Critical hit! ${hero} does double damage!`);
      monsterHealth = monsterHealth - 20;
    }
    
    alert(`${hero} has ${heroHealth} hitpoints left, ${monster} has ${monsterHealth} left.`);
  }

  }if(monsterDice >= 3 && monsterDice <= 10) {
heroHealth = heroHealth - 0;
alert(
  `${monster} has rolled ${monsterDice}, ${monster} miss ${hero}'s health is ${heroHealth}`);
      }
    if (heroDice >= 11 && heroDice <= 18) {
          monsterHealth -= 10;
    alert(`${hero} has rolled ${heroDice}, ${hero} Hits for 10 damage! ${monster}'s health is
       ${monsterHealth}`);
    } else if (monsterDice >= 11 && monsterDice <= 18) {
        heroHealth -= 10;
    alert(`${monster} has rolled ${monsterDice}, ${monster} Hits for 10 damage! ${hero} health          is ${heroHealth}`);
}
    if (heroDice == 19 && heroDice == 20) {
      monsterHealth -= 20;
    alert(`${hero} has rolled ${heroDice}, Critical HIT! ${monster}'s new health is ${monsterHealth}`);

  } else if (monsterDice == 19 && monsterDice == 20) {
      heroHealth -= 20;

alert(`${monster} has rolled ${monsterDice}, Critical HIT! ${hero}'s new health is ${heroHealth}`);
  }

  if (monsterHealth <= 0 && heroHealth <= 0) {
   alert(`Both ${hero} and ${monster} are dead!`);
}
  if (monsterHealth <= 0) {
    alert(`${hero} has Won!`);

  }else{

alert(`${monster} has won!`);
}

fight();

