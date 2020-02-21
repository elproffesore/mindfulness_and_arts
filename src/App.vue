<template>
<div class="main">
  <div class="buttons">
    <button v-on:click="new_view('ressources')">Ressources</button>
    <button v-on:click="new_view('information')">Information</button>
    <button v-on:click="new_view('impressum')">Impressum</button>
  </div>
  <h1 v-on:click="new_view('start')">Mindfulness in Education</h1>
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
  created:function(){
    window.addEventListener('scroll', () => {this.$store.dispatch("update_percent")})
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

button {
  background-color: #ff8e3c;
  color: #0d0d0d;
  border: 2px solid black;
  border-radius: 5px;
  font-family: 'Bowlby One SC', cursive;
  font-size: 12pt;
  padding: 0px 10px 0px 10px;
  margin: 1vh 5vw 1vh 5vw;

}

button:hover {
  background-color: #e6843e;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
}
.main{
  margin-top: 5vh
}
.buttons {
  display: flex;
  justify-content: center
}
</style>
