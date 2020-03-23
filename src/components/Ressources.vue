<template>
  <div class="ressources">


    <button id="back" @click="turnCarouselBack()"> &#x279C; </button>

    <div class="wrapper">
        <div class="card" v-for="(card,index) in cards" v-bind:id=" 'card' +index" >
            <img v-bind:src="card.picture" alt="cards picture">
        </div>
    </div>

    <button id="next" @click="turnCarouselNext()"> &#x279C; </button>


  </div>
</template>


<script>

  export default {
    name:"ressources",
    data(){
      return{
        selected:0,
        cards:[
           {picture:"./pics/front.png"},
           {picture:"./pics/example.jpeg"},
           {picture:"./pics/example.jpeg"},
           {picture:"./pics/example.jpeg"},
           {picture:"./pics/example.jpeg"}
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
    top:40%;
    left:27%;
    transform: rotate(180deg);
  }
  #next{
    z-index:1000;
    position:absolute;
    top:40%;
    right:27%;
  }
  button{
    border:none;
    background-color: none;
    background: none;
    cursor: pointer;
    font-size: 2vw;
    padding: 0;
  }
  button:hover{
    color: rgb(62, 62, 62)
  }
  .wrapper{
    position:relative;
    left: calc(50vw - (100vw / 2));
    width:100vw;
    height: 100%;
    overflow:hidden;
  }
  .card{
    position:absolute;
    left:calc(50% - (20vw / 2));
    top:calc(50% - (30vw / 2));
    background-color:rgb(255, 255, 255);
    box-shadow:5px 5px 2px rgb(164, 164, 164);
    height:30vw;
    width:20vw;
    text-align:center;
    border: 1.75px solid black;
    border-radius: 15px;
    perspective: 600px;
    transition: transform 1s, opacity 1s;
    transform-style: preserve-3d;
  }
  .card:not(:first-child){
    opacity:0;
  }
  .card > img{
    width: 100%;
    height: 100%;
    border-radius: 15px;
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
