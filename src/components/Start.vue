<template>
<div class="start_page">
  <h1 class="header">Arts and Mindfulness in Education</h1>
  <svg viewBox="0 0 1200 2400">
    <path id="path" xmlns="http://www.w3.org/2000/svg" d="M-10,150  Q1050,250 1000,550 T 400,1000 T 700,1400 T 2000,1940"  fill="none" />
  </svg>
  <div class="paragraphs">
    <p v-bind:style="'opacity:'+ percent*4" id="paragraph1">
      <q>
        <i>Mindfulness means paying attention in a particular way; on purpose, in the present moment, and nonjudgmentally.
        </i>
      </q>
      <br>
        - Jon Kabat-Zinn (1994)
    </p>
        <p v-bind:style="'opacity:'+ (percent-0.15)*4" id="paragraph2">Mindfulness education is  the purposeful inclusion of mindfulness and mindful meditation principles, theories, and practices into education. It integrates topics such as empathy, self-awareness or techniques to calm and focus the mind.</p>
        <p v-bind:style="'opacity:'+ (percent-0.3)*4"  id="paragraph3">Using art based mindfulness helps children enjoy the process of making art rather than focusing on the end result. Doing activities like photography, drawing, body movement and even just listening in a more aware, focused way makes children cultivate self awareness and helps them recognize and embrace their emotions. </p>
  </div>
  <div id="blatt" v-bind:style="{transform:getPosition}">
    <img src="pics/leaf.svg" />
  </div>
  <transition name="fade">
  <div v-if="!percent" class="scroll">
    <svg>
      <path d="M0,10 15,30 L 30,10" stroke="black" fill="none" stroke-width="1.5px" />
    </svg>
  </div>
  </transition>
  <footer>
    <img src="pics/hill.svg" />
    <p>AMiE is a Project from the European Project Semester at AP University Antwerp</p>
  </footer>
</div>
</template>
<script>
export default {
  name: "Start",
  computed: {
    percent() {
      return this.$store.state.percent
    },
    getPosition() {
      let p = this.$store.state.percent
      if (document.getElementById("path")) {
        let ele = document.getElementById("path");

        let length = ele.getTotalLength();
        let pointAtPercent = length * (p*1.1);
        let point = ele.getPointAtLength(pointAtPercent)
        console.log(point)
        let osziNumber = 0.60 * Math.sin((pointAtPercent*0.001)) + 1
        let osziDeg = 110 * Math.sin(2*(pointAtPercent*0.001))
        return "translate(" + point.x + "px," + point.y + "px) rotate(" + osziDeg + "deg) scale(" + osziNumber + ")"
      } else {
        return "translate(0px,0px)"
      }
    }
  }
}
</script>

<style module>
.start_page {
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(166, 159, 233, 0.75) 100%);
  position: relative;
  height: 2400px;
  z-index:-2;
}
svg{
  height:2200px;
  width: 100%;
}
.scroll{
  position:absolute;
  height:30px;
  width:30px;
  top:80vh;
  left:calc(50% - 30px);
  animation-name: pointToScroll;
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
}
@keyframes pointToScroll {
  from {transform: translateY(0px);}
  to {transform: translateY(10px);}
}

#blatt {
  position: absolute;
  left: -5%;
  top: 0%;
  width: 40px
}

#blatt>img {
  z-index: 5
}

p {
  z-index: 10
}

#paragraph1 {
  position: absolute;
  top: 20%;
  right: 10%;
  width: 30vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}

#paragraph2 {
  position: absolute;
  top: 30%;
  left: 10%;
  width: 30vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}

#paragraph3 {
  position: absolute;
  top: 40%;
  right: 10%;
  width: 30vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}
footer {
  font-family: 'Open Sans';
  position: absolute;
  bottom: 0;
  width:100vw;
  z-index:-1;
}
footer > p{
  position:relative;
  justify-content:center;
  text-align:center;
  bottom:0;
  font-size: 3vh
}
footer > img {
  position: absolute;
  bottom:0px;
  left:-2px;
}
 .fade-enter-active,
.fade-leave-active {
  transition: opacity .75s;
}
.fade-enter,
.fade-leave-to
  {
  opacity: 0;
}
@media only screen and (max-width: 700px){
  #paragraph1,#paragraph2,#paragraph3{
    width:80%;
    left:10%
  }
}
</style>
