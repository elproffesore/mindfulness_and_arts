<template>
<div class="start_page">
  <svg viewBox="0 0 1200 2400">
    <path id="path" xmlns="http://www.w3.org/2000/svg" d="M-10,150  Q1050,250 1000,550 T 400,1000 T 700,1400 T 755,1940"  fill="none" />
  </svg>
  <div class="paragraphs">
    <transition name="fade">
        <p v-if="percent > 0.10" id="paragraph1">
          <q>
            <i>In today's rush, we all think too much - seek too much - want too much - and forget about the joy of just being.
            </i>
          </q>
            - Eckhart Tolle
        </p>
    </transition>
    <transition name="fade">
        <p v-if="percent > 0.4" id="paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. </p>
    </transition>
    <transition name="fade">
        <p v-if="percent > 0.7" id="paragraph3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. </p>
    </transition>
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
    <p>AMiE is a Project from the European Project Semester of AP University Antwerp</p>
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
  height:2400px;
}
.scroll{
  position:absolute;
  height:30px;
  width:30px;
  top:60vh;
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
  top: 15%;
  right: 10%;
  width: 30vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}

#paragraph2 {
  position: absolute;
  top: 40%;
  left: 10%;
  width: 30vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}

#paragraph3 {
  position: absolute;
  top: 60%;
  right: 15%;
  width: 30vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}
footer {
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
