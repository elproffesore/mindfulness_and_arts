<template>
<div class="ressources_page">
  <div class="card" v-for="card in cards">
    <!-- <img v-bind:src="card.picture" alt="cards picture"> -->
    <h2 class="header">{{card.name}}</h2>
  </div>
</div>
</template>


<script>

  export default {
    name:"ressources",
    data:function(){
      return{
        cards:[
           {name:"Mindfulness \r Eating",picture:"./pics/mindeating.jpeg"},
           {name:"Mindfulness \r Fun",picture:"./pics/mindeating.jpeg"},
           {name:"Mindfulness \r Safari",picture:"./pics/mindeating.jpeg"}
        ]
      }
    }
  }
</script>

<style module>
  .card{
    height: 100px;
    width: 100px;
    transform: rotate(90deg);
    transform-origin: top right;
    background: green;
    text-align:center;
    border-radius: 2px;
    box-shadow: 0px 6px 5px 1px rgb(128, 128, 128)
  }
  .ressources_page{
    overflow-y: auto;
    overflow-x: hidden;
    transform: rotate(-90deg);
    transform-origin: top right;
    width: 100px;
    height: 300px;
    display:grid;
    grid-template-columns: 1fr 1fr;
  }
  h2{
    margin-top:30px
  }
</style>
