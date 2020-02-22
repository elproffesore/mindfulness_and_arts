<template>
<div class="main">
  <div class="head">
    <div class="buttons">
      <div  class="button" v-on:click="new_view('start')"><a>Start</a></div>
      <div  class="button" v-on:click="new_view('ressources')"><a>Ressources</a></div>
      <div  class="button" v-on:click="new_view('information')"><a>Information</a></div>
      <div  class="button" v-on:click="new_view('impressum')"><a>Impressum</a></div>
    </div>
    <h1 v-on:click="new_view('start')">Mindfulness in Education</h1>
  </div>
  <div class="components">
    <Start v-if="view=='start'"></Start>
    <Ressources v-if="view=='ressources'"></Ressources>
    <Information v-if="view=='information'"></Information>
    <Impressum v-if="view=='impressum'"></Impressum>
  </div>
</div>
</template>
<script>
import Start from "./components/Start.vue";
import Ressources from "./components/Ressources.vue";
import Information from "./components/Information.vue";
import Impressum from "./components/Impressum.vue";
export default {
  name: "app",
  components: {
    Start,
    Ressources,
    Information,
    Impressum
  },
  created: function() {
    window.addEventListener('scroll', (e) => {
      this.$store.dispatch("update_percent")
    })
  },
  methods: {
    new_view(view) {
      this.$store.dispatch('change_view', view)
    }
  },
  computed: {
    view() {
      return this.$store.state.view
    }
  }
}
</script>
<style module>
h1 {
  text-align: center;
  font-size: 45pt;
  color: #0d0d0d;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
}

.button {
  color: #0d0d0d;
  background: none;
  font-family: 'Bowlby One SC', cursive;
  font-size: 12pt;
  padding: 0px 10px 0px 10px;
  margin: 1vh 3vw 1vh 3vw;
  cursor:pointer

}
.button > a{
  position:relative
}
.button > a:before{
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffb74b;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
.button > a:hover:before {
  cursor:pointer;
 visibility: visible;
 -webkit-transform: scaleX(1);
 transform: scaleX(1);
}
.main {
  margin-top: 5vh
}

.buttons {
  display: flex;
  justify-content: center
}
</style>
