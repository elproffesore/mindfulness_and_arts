<template>
<div class="ressources_page">
  <div class="card" v-for="card in cards">
    <img v-bind:src="card.picture" alt="cards picture">
    <h2>{{card.name}}</h2>
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
    padding:15px;
    margin:auto;
    height:55vh;
    width: 22.5vw;
    text-align:center;
    border-radius: 2px;
    box-shadow: 0px 6px 5px 1px rgb(128, 128, 128)
  }
  .ressources_page{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  img{
    width: 100%;
  }
  h2{
    margin-top:30px
  }
</style>
