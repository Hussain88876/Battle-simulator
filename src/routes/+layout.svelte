<script>
  import "$lib/css/app.css";
</script>

<svelte:head>
  <title>Pokémon Battle Simulator</title>
</svelte:head>



<main>
  <h1>Pokemon Battle Simulator </h1>
</main>

<div class="container">
  <slot />
</div>

<style>
  .container {
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
  h1 {
    text-align: center;
    text-decoration: solid;
    background-color:aqua; 
    margin: auto;
  }

</style>
