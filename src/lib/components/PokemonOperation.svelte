<script>
    import { battleStore } from "$lib/js/battle-store.js";
   import { attack } from "$lib/js/battle-store.js";  
    import { createEventDispatcher } from 'svelte';
    export let currentHp; 
    export let maxHp;
    export let name; 
    export let buttonEnabled = false;  
    
    
    const dispatch = createEventDispatcher();





    function dispatchPokemon(attackerName) {
    
    dispatch('attack', { attackerName });
    
   
    let defender =$battleStore.find(defendingPokemon => !defendingPokemon.canAttack);
    

    attack(attackerName,defender);

  }
</script>



<div class="text"> <b>{name}  <br>  HP:  {currentHp} / {maxHp} <br>
     <button on:click= { () => dispatchPokemon(name)} disabled={!buttonEnabled} > Attack! </button>
    
    </div>







    

