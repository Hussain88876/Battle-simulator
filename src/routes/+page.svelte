<script>

  import { battleStore } from "$lib/js/battle-store.js";
  import PokemonOperation from "$lib/components/PokemonOperation.svelte"; 
  import HealthBar from "$lib/components/HealthBar.svelte"; 
  import winnerImage from "$lib/images/king.png"

  

</script>

<ul>
  {#each $battleStore as pokemon (pokemon.dexNumber)} 
  
  <li class= "images" ><img src = {pokemon.imageUrl} alt ={pokemon.name}/> <HealthBar percentage={pokemon.hp}/> <PokemonOperation currentHp={pokemon.hp} maxHp= {pokemon.maxHp} name={pokemon.name} buttonEnabled={pokemon.canAttack}/>
  {#if pokemon.winner===true}
  <div class="winner">
    <img src = {winnerImage} alt="trophy"/>
  </div>

  {/if}
  </li>

  {/each}
</ul>










