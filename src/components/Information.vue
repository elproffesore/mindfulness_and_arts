<template>
<div>
  <div class="text">
    <h2 class="header" v-bind:style="{opacity: 1-(percent)}">The Problem</h2>
    <p v-bind:style="{opacity: 1-(percent)}">
      Today a lot of people feel more stressed and more people suffer from stress and anxiety symptoms.

      Also kids are affected of this. Nowadays, kids have a lot of stimulus and in consequence, they are always distracted

      and they aren't used to be calm and relaxed. New technologies are a very useful tool for kids, but they are also a big distraction for them.

      Their ability to concentrate and focus on long term goals suffer from fast rewarding systems of mobile apps.

      Teachers are affected too, because each time is harder to them to maintain the kids focus on one task or on the lesson.

      The multitasking also drains cognitive energy to multiple tasks which directly affects the ability to concentrate for a longer time on one specific task.

      In consequence they often can't concentrate while they teach and sometimes have burnout syndromes due to high pressure which is produced by their fast paced environment.
    </p>
    <h2 class="header" v-bind:style="{opacity: (percent-0.10)}">The Solution</h2>
    <p v-bind:style="{opacity: (percent-0.10)}">
      In preschool, children at the age 3-6 years old are so nervous because of a lot of activities and changes happening during the day. So, how can we take the advantage of that time to relax them?

      Mindfulness is a tool that we can usually use to gain the full attention and concentration from children, it can be useful to improve the process and

      acknowledgement of their emotions, which is so important in that age to train their brains to regulate and manage stressful situations and reduce them.

      In conclusion, it is a way to gain positives thoughts for children and the teacher and finally, to create a more peaceful environment.

      Also the transition from kindergarten to primary school can be very stressful for the children. Some of them adjust very easily but others face a lot of anxiety and insecurities.

      Mindfulness can help them get in a more comfortable and safe state. If they get to that state of mind it makes the teaching process much easier and enjoyable both for teacher and children.
    </p>
  </div>
</div>
</template>
<script>
export default {
  name: "Information",
  computed:{
    percent(){
      return this.$store.state.percent
    }
  }
}
</script>

<style module>
.text {
  text-align:center;
  display: grid;
  margin: 2vh 30vh 20vh 30vh;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  grid-column-gap: 100px;
}
p{
  align-self: center;
  text-align:justify;
  font-family: 'Open Sans';
  font-size: 14pt;
}
</style>
