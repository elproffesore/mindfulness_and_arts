<template>
  <div class="ressources">


    <button id="back" @click="turnCarouselBack()">back</button>

    <div class="wrapper">
        <div class="card" v-for="(card,index) in cards" v-bind:id=" 'card' +index" >
            <img v-bind:src="card.picture" alt="cards picture">
            <h2 class="header">{{card.name}}</h2>
        </div>
    </div>

    <button id="next" @click="turnCarouselNext()">next</button>


  </div>
</template>


<script>

  export default {
    name:"ressources",
    data(){
      return{
        selected:0,
        cards:[
           {name:"Mindfulness \r Eating",picture:"./pics/mindeating.jpeg"},
           {name:"Mindfulness \r Fun",picture:"./pics/mindeating.jpeg"},
           {name:"Mindfulness \r Safari",picture:"./pics/mindeating.jpeg"},
           {name:"Mindfulness \r Sitting",picture:"./pics/mindeating.jpeg"},
           {name:"Mindfulness \r Squatting",picture:"./pics/mindeating.jpeg"}
      ]
    }
  },
  methods:{
      turnCarouselNext(){
        if((this.selected-1) >= 0){ //let old item fade out

            let ele = document.getElementById("card"+(this.selected-1))
            ele.classList.remove("turn-out")
            ele.style.opacity = "0"

        }
        document.getElementById("card"+this.selected).classList.remove("turn-in")
        let ele = document.getElementById("card"+this.selected)
        ele.classList.add("turn-out")
        this.selected < this.cards.length-1 ? this.selected++ : this.selected = 0;
        console.log(this.selected)
        document.getElementById("card"+this.selected).classList.add("turn-in")
      },

      turnCarouselBack(){

        if((this.selected+1) < this.cards.length){ // let old item fade out

            let ele = document.getElementById("card"+(this.selected+1))
            ele.classList.remove("turn-out")
            ele.style.opacity = "0"

        }

        document.getElementById("card"+this.selected).classList.remove("turn-in")
        let ele = document.getElementById("card"+this.selected)
        ele.classList.add("turn-out")
        this.selected > 0 ? this.selected-- : this.selected = this.cards.length-1;
        console.log(this.selected)
        document.getElementById("card"+this.selected).classList.add("turn-in")

      }
  }
}
</script>

<style module>
  .ressources{
    position:relative;
    -webkit-scrollbar: none;
    overflow: hidden;
    scrollbar-width: none
  }
  #back{
    z-index:1000;
    position:absolute;
    top:45%;
    left:10%;
  }
  #next{
    z-index:1000;
    position:absolute;
    top:45%;
    right:10%;
  }
  .wrapper{
    position:relative;
    left: calc(50% - (1000px / 2));
    width:1000px;
    height:503px;
    overflow:hidden;
  }
  .card{
    position:absolute;
    left:calc(50% - (325px / 2));
    background-color:rgb(255, 255, 255);
    box-shadow:7px 7px 5px rgb(210, 210, 210);
    height:475px;
    width:325px;
    text-align:center;
    border: 1.5px solid black;
    border-radius: 5px;
    perspective: 600px;
    transition: transform 1s, opacity 1s;
    transform-style: preserve-3d;
    margin: 0px 10px 0px 10px;
  }
  .card:hover{
    background-color: green;
  }
  .card:not(:first-child){
    opacity:0;
  }
  .card > img{
    width: 100%
  }
  .card > p{
    padding:25px;
  }
  .card > h2{
    margin-top:30px
  }
  .turn-out{
    animation: turn-out 0.7s ease forwards;
  }
  @keyframes turn-out{
    0%{transform:translate3d(0,0,0);opacity:1}
    50%{transform:translate3d(190px,0px,0px)}
    100%{transform:translate3d(0px,0px,0px);opacity:0}
  }
  .turn-in{
    animation: turn-in 0.7s ease forwards;
  }
  @keyframes turn-in{
    0%{transform:translate3d(0,0,0);opacity:0}
    50%{transform:translate3d(-190px,0px,0px)}
    100%{transform:translate3d(0px,0px,0px);opacity:1}
  }
</style>
