<template>
<div class="start_page">
  <div class="paragraphs">
    <transition name="fade">
      <p v-if="percent > 5" id="paragraph1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. </p>
    </transition>
    <transition name="fade">

      <p v-if="percent > 40" id="paragraph2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. </p>
    </transition>
    <transition name="fade">
      <p v-if="percent > 80" id="paragraph3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. </p>
    </transition>
  </div>
  <!-- <img src="figures.svg" alt="new" width="300px" x="500px" y="2000px"> -->
  <svg>
    <path class="path" xmlns="http://www.w3.org/2000/svg" d="M150 100 1050 100 S 1050 500 150 500 150 800 1050 800" fill="none" stroke="red" stroke-width="1px" />
  </svg>
</div>
</template>
<script>
export default {
  name: "Start",
  computed: {
    percent() {
      return this.$store.state.percent
    }
  }
}
</script>

<style module>
.start_page {
  position: relative;
  height: 2000px;
}

#paragraph1 {
  position: absolute;
  top: 10%;
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

/* #cloud1 {
  animation: movement 20s linear infinite;
  margin-top: 5%;
  margin-left: 30%;
  opacity: 75%;
  z-index: -1;
  position: absolute;
  transform: scale(1.5)
}

#cloud2 {
  animation: movement 30s ease infinite;
  opacity: 80%;
  margin-left: 50%;
  z-index: -1;
}

#cloud3 {
  animation: movement 25s linear infinite;
  margin-top: 10%;
  margin-left: 75%;
  opacity: 60%;
  z-index: -1;
  transform: scale(0.75)
}

@keyframes movement {
  0% {
    transform: scale(0.5);
  }

  50% {
    margin-left: 75%;
  }

  100% {
    transform: scale(1)
  }
} */
</style>
