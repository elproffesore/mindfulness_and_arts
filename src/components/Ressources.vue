<template>
<div class="ressources">
  <div class="wrapper-cards">
    <button id="back" @click="turnCarouselBack()">
      <svg viewBox="0 0 20 20">
        <polygon points="0,10 20,20 20,0" fill="black" />
      </svg>
    </button>

    <div class="card" v-for="(card,index) in cards" v-bind:id="'card'+index">


      <div class="card-instruction">
        <section>
          <h2>Instructions</h2>
          <p v-for="(instruction,indexInstruction) in card.instructions">
            {{indexInstruction+1}}. {{instruction}}
          </p>
        </section>
        <p> Hover to see more details </p>
      </div>


      <div class="card-information">
        <div class="card-information-card">
          <img class="card-front" v-bind:src="card.picture" alt="cards picture">
        </div>
        <div class="card-information-text">
          <section>
            <h2>Instructions</h2>
          </section>
        </div>
      </div>


    </div>

    <button id="next" @click="turnCarouselNext()">
      <svg viewBox="0 0 20 20">
        <polygon points="0,0 20,10 0,20" fill="black" />
      </svg>
    </button>
  </div>
</div>
</template>


<script>
export default {
  name: "ressources",
  data() {
    return {
      selected: 0,
      cards: [{
          picture: "./pics/front.png",
          instructions:[
            "Take a camera",
            "Look around you, take deep breaths and listen carefully to the sounds around you.",
            "Take photos of everything that catches your attention"
          ],
          information:{

          }
        },
        {
          picture: "./pics/example.jpeg"
        },
        {
          picture: "./pics/example.jpeg"
        },
        {
          picture: "./pics/example.jpeg"
        },
        {
          picture: "./pics/example.jpeg"
        }
      ]
    }
  },
  methods: {
    turnCarouselNext() {
      if ((this.selected - 1) >= 0) { //let old item fade out

        let ele = document.getElementById("card" + (this.selected - 1))
        ele.classList.remove("turn-out")
        ele.style.opacity = "0"

      }
      document.getElementById("card" + this.selected).classList.remove("turn-in")
      let ele = document.getElementById("card" + this.selected)
      ele.classList.add("turn-out")
      this.selected < this.cards.length - 1 ? this.selected++ : this.selected = 0;
      console.log(this.selected)
      document.getElementById("card" + this.selected).classList.add("turn-in")
    },

    turnCarouselBack() {

      if ((this.selected + 1) < this.cards.length) { // let old item fade out

        let ele = document.getElementById("card" + (this.selected + 1))
        ele.classList.remove("turn-out")
        ele.style.opacity = "0"

      }

      document.getElementById("card" + this.selected).classList.remove("turn-in")
      let ele = document.getElementById("card" + this.selected)
      ele.classList.add("turn-out")
      this.selected > 0 ? this.selected-- : this.selected = this.cards.length - 1;
      console.log(this.selected)
      document.getElementById("card" + this.selected).classList.add("turn-in")

    }
  }
}
</script>

<style module >
.ressources {
  position: relative;
  -webkit-scrollbar: none;
  overflow: hidden;
  scrollbar-width: none;
  height: 100%;
}

/*Buttons to skip to next card*/

#back {
  z-index: 1000;
  position: absolute;
  top: calc(30vh - (20px / 2));
  left: 10%;
}
#next {
  z-index: 1000;
  position: absolute;
  top: calc(30vh - (20px / 2));
  right: 10%;
}

button>svg {
  height: 20px;
}

button {
  border: none;
  background-color: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

button:hover>svg>polygon {
  fill: rgb(100, 100, 100)
}



/* The cards designs*/
.card {
  position: absolute;
  left: calc(50vw - (70vw / 2));
  height: 60vh;
  width: 70vw;
  border: 1.75px solid black;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  opacity: 0;
  z-index: 0;
  transition: transform 1s, opacity 1s;
}
.card:hover .card-information {
  width: 100%
}



.card-information {
  position: absolute;
  left: 0;
  background-color: white;
  width: calc(70vw * 0.3);
  transition: width 0.4s;
  height: 100%;
  overflow: hidden;
  background-color:white
}

.card-information-card {
  height: 100%;
  position: absolute;
  width: calc(70vw * 0.3);
}
.card-information-card::after{
  content:"";
  position:absolute;
  top:10%;
  right:-5px;
  height:80%;
  border-left: 1.5px solid rgba(0,0,0,0.2)
}

.card-information-text {
  height: 100%;
  position: absolute;
  left: calc(70vw * 0.3);
  width: calc(70vw * 0.7);
  background-color: rgb(100, 171, 79);
}
.card-front {
  position: relative;
  height:100%;
  width:100%;
}
.card:hover .card-information {
  width: 100%
}
#card0{
  opacity:1;
  z-index:1000;
}


.card-instruction {
  position: absolute;
  right: 0;
  width: calc(70vw * 0.7);
  height: 100%;
  background-color: white;
}
section{
  padding:25px;
  text-align:center;
  /*font-family: 'Open Sans';*/
  font-family: 'Bowlby One SC', cursive;
}
.card-instruction > p{
  font-size: 12pt;
  bottom:5px;
  left: 35px;
  color: rgba(0,0,0,0.7);
  text-align:bottom
}


.turn-out {
  animation: turn-out 1s ease-out forwards
}

@keyframes turn-out {
  0% {
    opacity: 1;
    z-index:1000;
  }

  /*50%{transform:translate3d(190px,0px,0px)}*/
  100% {
    opacity: 0;
    z-index:0;
  }
}

.turn-in {
  animation: turn-in 1s ease-in forwards
}

@keyframes turn-in {
  0% {
    opacity:0;
    z-index:0;
  }

  /*50%{transform:translate3d(-190px,0px,0px)}*/
  100% {
    opacity: 1;
    z-index:1000;
  }
}
</style>
