<template>
<div class="cards">
  <h1 class="header">Mindful exercise cards</h1>
  <button id="back" @click="turnCarouselBack()">
    <svg viewBox="0 0 20 20">
      <polygon points="0,10 20,20 20,0" fill="black" />
    </svg>
  </button>

  <div class="card" v-for="(card,index) in cards" v-bind:id="'card'+index">


    <div class="card-instruction">
      <section>
        <h2>Instruction</h2>
        <p v-for="(instruction) in card.instructions">
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
          <p>
            {{card.information}}
          </p>
          <div class="icons">
            <div>
              <i class="gg-pin"></i>
              <p>{{card.specs.location}}</p>
            </div>
            <div>
              <i class="gg-time"></i>
              <p>{{card.specs.time}}</p>
            </div>
            <div>
              <i class="gg-smile"></i>
              <p>{{card.specs.age}}</p>
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
          link:"./downloads/mindful_photography.png",
          picture: "./pics/photo.png",
          instructions: [
            "Take a camera",
            "Look around you, take deep breaths and listen carefully to the sounds around you.",
            "Take photos of everything that catches your attention"
          ],
          information: "This excercise should sharpen the eye of the kids to notice new things around them",
          specs:{time:"~45min",location:"Outside",age:"8+"}
        },
        {
          name:"clay",
          link:"./downloads/clay_activity.png",
          picture: "./pics/clay.png",
          instructions: [
            "Take a piece of clay",
            "Listen to the music, take deep breaths, feel the texture of clay, keep your eyes closed or open and start to sculpt by your feeling",
            "When you think you are finished open your eyes and see what you have sculpted"
          ],
          information: "This excercise helps kids to explore their feelings and how to express them through art",
          specs:{time:"~30min",location:"Inside or \n Outside",age:"4+"}
        },
        {
          name:"instrument",
          link:"./downloads/whats_playing.png",
          picture: "./pics/whats.png",
          instructions: [
            "Choose the instruments & take three deep breaths.",
            "Teacher or a child is going to play an instrument and the others have to close their eyes, listen and guess it.",
            "Comment their feelings about the activity. How was this exercise/game for you..."
          ],
          information: "This excercise helps kids to sharpen their ears and focus on the hearing.",
          specs:{time:"~15min",location:"Inside",age:"5+"}
        },
        {
          name:"shadow",
          link:"./downloads/body_shadows.png",
          picture: "./pics/shadow.png",
          instructions: [
            "Go to the playground and find your shadow.",
            "Make all kinds of shapes and movements with your body.",
            "Feel free to express your feelings."
          ],
          information: "This excercise helps kids to explore their imagination",
          specs:{time:"~20min",location:"Inside or \n Outside",age:"5+"}
        },

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
  top: calc(45vh - (20px / 2));
  left: 10%;
}

#next {
  z-index: 1000;
  position: absolute;
  top: calc(45vh - (20px / 2));
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
  width: calc(70vw * 0.35);
  transition: width 0.4s;
  height: 100%;
  overflow: hidden;
  background-color: white;
  z-index: 1000
}

.card-information-card {
  height: 100%;
  position: absolute;
  width: calc(70vw * 0.35);
}

.card-information-card::after {
  content: "";
  position: absolute;
  top: 10%;
  right: -15px;
  height: 80%;
  border-left: 1.5px solid rgba(0, 0, 0, 0.2)
}

.card-information-text {
  height: 100%;
  position: absolute;
  left: calc(70vw * 0.35);
  width: calc(70vw * 0.65);
  background-color: #4a86e8ff;
}
.icons {
  position: relative;
  bottom:-45%;
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
  font-family: 'Open Sans';
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
  width: calc(70vw * 0.65);
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
  100% {
    opacity: 1;
    z-index: 1000;
  }
}

@import "../assets/icons/pin.css";
@import "../assets/icons/time.css";
@import "../assets/icons/smile.css";
@import "../assets/icons/download.css";
</style>
