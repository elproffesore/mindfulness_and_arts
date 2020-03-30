<template>
<div class="cards">
  <button id="back" @click="turnCarouselBack()">
    <svg viewBox="0 0 20 20">
      <polygon points="0,10 20,20 20,0" fill="black" />
    </svg>
  </button>

  <div class="card" v-for="(card,index) in cards" v-bind:id="'card'+index">


    <div class="card-instruction">
      <section>
        <h2>Instructions</h2>
        <p v-for="instruction in card.instructions">
          {{instruction}}
        </p>
      </section>
      <p class="hover-information"> Hover to see more details </p>
    </div>


    <div class="card-information">
      <div class="card-information-card">
        <img class="card-front" v-bind:src="card.picture" alt="cards picture">
      </div>
      <div class="card-information-text">
        <section>
          <h2>Information</h2>
          <div class="information">
            <p>{{card.information}}</p>
          </div>
          <div class="icons">
            <div>
              <i class="gg-pin"></i>
              <p>Outside</p>
            </div>
            <div>
              <i class="gg-time"></i>
              <p>~15min</p>
            </div>
            <div>
              <i class="gg-smile"></i>
              <p>6+ years</p>
            </div>
            <a v-bind:href="card.link" download>
              <i class="gg-software-download"></i>
              <p>Card</p>
            </a>
          </div>
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
</template>


<script>
export default {
  name: "cards",
  data() {
    return {
      selected: 0,
      cards: [{
          name:"photo",
          link:"./downloads/Mindfulness_Photography.png",
          picture: "./pics/photo_front.png",
          instructions: [
            "Take a camera",
            "Look around you, take deep breaths and listen carefully to the sounds around you.",
            "Take photos of everything that catches your attention"
          ],
          information: "This excercise should sharpen the eye of the kids to notice \n new things around them"
        },
        {
          name:"clay",
          link:"./downloads/clay.png",
          picture: "./pics/clay_front.png",
          instructions: [
            "Take a camera",
            "Look around you, take deep breaths and listen carefully to the sounds around you.",
            "Take photos of everything that catches your attention"
          ],
          information: {

          }
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
.cards {
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

#card0 {
  opacity: 1;
  z-index: 1000;
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
  background-color: white;
  z-index: 1000
}

.card-information-card {
  height: 100%;
  position: absolute;
  width: calc(70vw * 0.3);
}

.card-information-card::after {
  content: "";
  position: absolute;
  top: 10%;
  right: -5px;
  height: 80%;
  border-left: 1.5px solid rgba(0, 0, 0, 0.2)
}

.card-information-text {
  height: 100%;
  position: absolute;
  left: calc(70vw * 0.3);
  width: calc(70vw * 0.7);
  background-color: #4a86e8ff;
}
.icons {
  position: relative;
  bottom:-40%;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.icons p{
  align-self:center;
  font-size:10pt
}
.icons a{
  text-decoration:none
}
.hover-information {
  vertical-align: bottom;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10pt;
}

.card-front {
  position: relative;
  height: 100%;
  width: 100%;
}

.card-instruction {
  position: absolute;
  right: 0;
  width: calc(70vw * 0.7);
  height: 100%;
  background-color: white;
  z-index: 500;
}

section {
  padding: 20 100px;
  text-align: center;
  font-family: 'Bowlby One SC', cursive;
  height: 75%;
}

.turn-out {
  animation: turn-out 1s ease-out forwards
}

@keyframes turn-out {
  0% {
    opacity: 1;
    z-index: 1000;
  }

  /*50%{transform:translate3d(190px,0px,0px)}*/
  100% {
    opacity: 0;
    z-index: 0;
  }
}

.turn-in {
  animation: turn-in 1s ease-in forwards
}

@keyframes turn-in {
  0% {
    opacity: 0;
    z-index: 0;
  }

  /*50%{transform:translate3d(-190px,0px,0px)}*/
  100% {
    opacity: 1;
    z-index: 1000;
  }
}

@import "../assets/pin.css";
@import "../assets/time.css";
@import "../assets/smile.css";
@import "../assets/download.css";
</style>
