<!-- This is the section about the project and about the students-->
<template>
<div class="about">
  <div class="about-description">
    <h1 class="header">What is this Project all about?</h1>
    <div style="display:flex;flex-direction:row">
      <img class="pics" src="pics/Monk1.png" />
      <p id="text-section-about">
        The "Arts and Mindfulness in Education" Project was set up by the AP Hodgeschool of Antwerp. This is the first semester of several where students
        will work on different solutions to introduce and implement mindfulness and arts as a combination into education.
        This semester the project group focused on creating a card game which can be used by teachers to introduce mindfulness to younger children.
        In addition this website itself was part of the project. There are many possible solutions and tools which can be created in the future for this topic.
        For example this website could function as a discussion board where teachers could exchange their experiences and the ressources they used.
      </p>
    </div>
  </div>
  <h2 class="header">The Students from this semester</h2>
  <div class="student-card-wrapper">
    <!-- This is a for loop which creates a div for every student in students with a unique id -->
    <div class="student-card" v-for="(student,index) in students" :id="'card_'+index">
      <img v-bind:src="student.pic" />
      <br>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>{{student.name}}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i class="gg-pin" /></td>
            <td>{{student.country}}</td>
          </tr>
          <tr>
            <td><i class="gg-pen" /></td>
            <td>{{student.studys}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      //This is the Section of the Module where i specified the student array
      students: [{
        name: "Karla",
        country: "Croatia",
        studys: "Primary Education",
        pic: "pics/karla.png"
      }, {
        name: "Lynn",
        country: "Belgium",
        studys: "Graphic and Mediadesign",
        pic: "pics/lynn.png"
      }, {
        name: "Marina",
        country: "Spain",
        studys: "Kindergarten Teacher",
        pic: "pics/marina.png"
      }, {
        name: "Carmen",
        country: "Spain",
        studys: "Kindergarten Teacher",
        pic: "pics/carmen.png"
      }, {
        name: "Philipp",
        country: "Germany",
        studys: "Print and Mediatechnologies",
        pic: "pics/philipp.png"
      }]
    }
  },
  methods: {

  }
}
</script>
<style module>
.about {
  width: 80vw;
  margin: auto auto 100px auto;
  font-family: 'Open Sans';
}

.student-card-wrapper {
  margin: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 75px;
}

.student-card {
  text-align: center;
  height: 350px;
  width: 150px;

}

.student-card>img {
  text-align: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgb(143, 143, 143);
  overflow: hidden;

}

td {
  padding: 10px
}

h2,
.student-card-name {
  font-family: 'Bowlby One SC', cursive;
  text-align: center;
}

.student-card-text,
td,
p {
  font-family: 'Open Sans';
}

.about-description>p {
  text-align: center;
}

.about-description>div {
  width: 90%;
}

.about-description {
  margin-bottom: 50px;
}

#text-section-about {
  font-size: 14pt;
  text-align: justify;
  width: 80%;
}

/*These Two are just the Designs of the two icons which can be found in the assets directory*/
@import "../assets/icons/pin.css";
@import "../assets/icons/pen.css";
</style>
