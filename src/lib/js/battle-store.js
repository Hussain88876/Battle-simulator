import { writable } from "svelte/store";
import { pokedex } from "./pokedex.js";


export const battleStore = writable(getTwoRandomPokemon());

let defenderHp;

/**
 * Performs an attack, from the given attacking pokemon to the given defending pokemon.
 *
 * @param {*} attacker The attacking pokemon
 * @param {*} defender The defending pokemon
 */
export function attack(attacker, defender) {

  let maxDamage =  Math.floor(Math.random() * (20-10 +1 )) +10;
  
  let criticalHitChance = Math.random();

  if(criticalHitChance===0.1) {

    maxDamage=40; 

  }

  let defenderHp;
  if(maxDamage<=defender.hp){
    defenderHp= defender.hp-maxDamage; 
   

  } else {
    defenderHp=defender.hp-defender.hp; 
  }


  updatingHp(defenderHp); 

  updatingTurns(); 
  updatingWinners();



  if (!attacker.canAttack) return; 

  
}


 /** battleStore.subscribe(console.log);
*/

function getTwoRandomPokemon() {
  let index1 =  Math.floor(Math.random() * (pokedex.length ));
  let index2 =   Math.floor(Math.random() * (pokedex.length ));

  // TODO Add code to randomize index1 and index 2; loop until the two values are different.

  while (index1 ===index2) {

   index1 =  Math.floor(Math.random() * (pokedex.length ));

  }

  

  return [
    { ...pokedex[index1], hp: pokedex[index1].maxHp, canAttack: true, winner:false},
    { ...pokedex[index2], hp: pokedex[index2].maxHp, canAttack: false, winner:false }
  ];
}

function updatingHp (defenderHp) {

  battleStore.update((battlers) => {
    let pokemonOne = battlers[0]
    let pokemonTwo=battlers[1]


  if (pokemonOne.canAttack===false) {
    return ( [{...pokemonOne, hp:defenderHp}, pokemonTwo]);

  } else if(pokemonTwo.canAttack===false) {
    return ([pokemonOne, {...pokemonTwo, hp:defenderHp}]); 
  }
  
  
    return battlers;
  });

  

}

function updatingTurns() {
  battleStore.update((battlers) => {
    let pokemonOne = battlers[0]
    let pokemonTwo=battlers[1]


  if (pokemonOne.canAttack===false && pokemonTwo.canAttack===true) {
    return ( [{...pokemonOne, canAttack:true}, {...pokemonTwo, canAttack:false}]);

  } else if(pokemonTwo.canAttack===false && pokemonOne.canAttack===true) {
    return ( [{...pokemonOne, canAttack:false}, {...pokemonTwo, canAttack:true}]); 
  }
  
  
    return battlers;
  });

}

function updatingWinners() {
  console.log("UpdatingLosers is being called")
  battleStore.update((battlers) => {
    let pokemonOne = battlers[0]
    let pokemonTwo=battlers[1]


  if (pokemonOne.hp===0) {
    return ( [{...pokemonOne, winner:false}, {...pokemonTwo, winner:true}]);
    

  } else if(pokemonTwo.hp===0) {
    return ( [{...pokemonOne, winner: true}, {...pokemonTwo, winner:false}]); 
    
  }
  
  
    return battlers;
  });

  

}


