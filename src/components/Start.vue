<template>
<div class="start_page">
  <svg viewBox="0 0 1200 2500">
    <path id="path" xmlns="http://www.w3.org/2000/svg" d="M-10,100 Q400,50 700,100 Q1050,200 1000,400 T 350,800 T 700,1500 T 0,2300" fill="none" />
  </svg>
  <div class="paragraphs">
    <transition name="fade">
      <p v-if="percent > 0.15" id="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. </p>
    </transition>
    <transition name="fade">

      <p v-if="percent > 0.40" id="paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. </p>
    </transition>
    <transition name="fade">
      <p v-if="percent > 0.85" id="paragraph3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. </p>
    </transition>
  </div>
  <div id="blatt" v-bind:style="{transform:position}">
    <img src="pics/leaf.svg"/>
  </div>
  <footer>
    <img src="pics/tree1.svg"/>
    <img src="pics/tree2.svg"/>
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
    position(){
      let p = this.$store.state.percent
      return this.getPosition(p)
    }
  },
  methods:{
    getPosition(){
      if(document.getElementById("path")){

        let perc = this.$store.state.percent
        let ele = document.getElementById("path");

        let length = ele.getTotalLength();
        let pointAtPercent = length*perc;
        let point = ele.getPointAtLength(pointAtPercent)

        let osziNumber = 0.8*Math.sin((pointAtPercent/1000))+1
        let osziDeg = 90*Math.sin(pointAtPercent/1000)
        return "translate("+point.x+"px,"+point.y+"px) rotate("+osziDeg+"deg)scale("+osziNumber+")"
      }else{
        return "translate(0px,0px)"
      }
    }
  }
}
</script>

<style module>
.start_page {
  position: relative;
  height: 2500px;
}
#blatt{
  position:absolute;
  left:-5%;
  top:0%;
  width:30px
}
#blatt > img{
  z-index:-1
}
p{
  z-index:1
}
#paragraph1 {
  position: absolute;
  top: 15%;
  right: 10%;
  width: 20vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}

#paragraph2 {
  position: absolute;
  top: 40%;
  left: 10%;
  width: 20vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}

#paragraph3 {
  position: absolute;
  top: 70%;
  right: 15%;
  width: 20vw;
  font-size: 14pt;
  font-family: 'Open Sans';
}
svg {
  width: 100%;
  height: 100%;
}
footer{
position:absolute;
bottom:0;
height:10vh
  }
  footer > img{
    width:50px
  }

.fade-enter-active,
.fade-leave-active {
  transition: opacity .75s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
