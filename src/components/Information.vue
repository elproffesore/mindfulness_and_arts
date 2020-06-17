<template>
<div>
  <h1 class="header">The Origin of Mindfulness</h1>
  <div class="information-wrapper">
    <img class="pics" src="pics/Monk.png">
    <p>Here you can see a traditional buddhist monk meditating. He is sitting and has closed his eyes
    to keep himself from distractions. Buddhist monks where one of the first monks who practiced mindfulness on a daily basis and build their lifes around it.
    Their goal is to get enlighted and attain wisdom. </p>
    <img src="pics/conversation1.png" style="grid-column: 1 / span 2;height:600px;margin:-80px" />
    <img src="pics/conversation2.png" style="grid-column: 1 / span 2;height:600px;margin-left:-80px" />
    <img src="pics/teacher.png" style="height:300px" >
    <ol>
      <li>Better management of stress and anxiety, making us relate better to these
feelings</li>
<br>
 <li>Better identification of our emotions, helping us to understand that we should
not run away from our feelings, only accept them</li>
<br>
<li>Improves the attention and teaches us to put aside information that is not necessary or that distracts us.</li>

    </ol>
      <img src="pics/paperplane.png" style="grid-column: 1 / span 2;height:600px;margin-top:-100px" >
  <p style="grid-column: 1 / span 2;margin-top:-100px">Introducing mindfulness to children can be done in many ways. Our goal is to  introduce art based mindfulness which can benefit kids in so many ways. Children in preschool and primary education are in the process of development. In this time they are learning how to cultivate self-awareness, awareness of others and the world. To be aware of themselves and others they first need to know how to be present and that is what mindfulness teaches them.
Art is the form in which children are most comfortable with and where their creativity flows. Combining it with mindfulness results in a playful, easy and creative way to make children acknowledge their thoughts and emotions.
<br>
<br>
“Art has the role in education of helping children become like themselves instead of more like everyone else.” - Sydney Guerewitz Clemens
</p>

  </div>
</div>
</template>
<script>
export default {
  name: "Information"
}
</script>

<style module>
.information-wrapper{
  display: grid;
  grid-template-columns: 400px 500px;
  grid-row-gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: justify;
  margin: 50px 100px;

}
.pics{
  height:300px;
}
.kid{
  height:250px;
  }
.text {
  text-align:center;
  display: grid;
  margin: 2vh 30vh 20vh 30vh;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  grid-column-gap: 100px;
}
.text > p,li{
  align-self: center;
  text-align:justify;
  font-family: 'Open Sans';
  font-size: 14pt;
}
.bubble {
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  width: 300px;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: #000;
}

.bubble-bottom-left:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 24px solid #fff;
  border-right: 12px solid transparent;
  border-top: 12px solid #fff;
  border-bottom: 20px solid transparent;
  left: 32px;
  bottom: -24px;
}
@media only screen and (max-width:700px){
  .text {
    text-align:center;
    display: grid;
    margin: 2vh 5vh 20vh 5vh;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    grid-column-gap: 100px;
  }
}
</style>
