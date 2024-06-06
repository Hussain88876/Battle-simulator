<script>

     export let percentage= 100; 

     function colorChange(percentage) {
        if(percentage <= 20) {
            return "red"
        } else {
            return "lightgreen"
        }
        

     }
        $: color=colorChange(percentage); 

     
       
</script>

<div class = outer>
    <div class =inner style="width: {percentage}%; background-color: {color}; ">

    </div>
    

</div>

<style>
.inner, .outer {
    height: 40px;
    border-radius: 10px;
}

.outer{
    width:100%;
    margin: 30px,auto;
    background-color: lightsteelblue;
    padding: auto; 
}

.inner{
    width: 100%;
    background-color: lightgreen;
    transition:
    width 2s,
    rotate 2s;
}

</style>