<template>
<div class="main">
  <div class="head">
    <img src="pics/logo.png" style="height:50px;position:absolute;left:2vw;top:2vw"alt="">
    <div class="buttons">
      <div  class="button" v-on:click="new_view('start')"><a>Start</a></div>
      <div  class="button" v-on:click="new_view('cards')"><a>Cards</a></div>
      <div  class="button" v-on:click="new_view('information')"><a>Information</a></div>
      <div  class="button" v-on:click="new_view('about')"><a>About</a></div>
    </div>
  </div>
  <div class="components">
    <Start v-if="view=='start'"></Start>
    <Cards v-if="view=='cards'"></Cards>
    <Information v-if="view=='information'"></Information>
    <About v-if="view=='about'"></About>
  </div>
</div>
</template>
<script>
import Start from "./components/Start.vue";
import Cards from "./components/Cards.vue";
import Information from "./components/Information.vue";
import About from "./components/About.vue";
export default {
  name: "app",
  components: {
    Start,
    Cards,
    Information,
    About
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
body{
  background: white;
  margin:0;
}
h1 {
  text-align: center;
  font-size: 35pt;
  color: #0d0d0d;
  margin: 10px 0px 10px 0px;
  cursor: pointer;
  text-shadow: 2px 2px 5px rgb(215, 215, 215);
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
.header{
  font-family: 'Bowlby One SC', cursive;
}
.buttons {
  display: flex;
  justify-content: center
}
.head{
  padding-top: 2vh;
  height: 5vh
}
.components{
  height:95vh;
}
</style>
