<template>
<div>
  <img src="figures.svg" alt="new" width="300px" x="500px" y="2000px">
  <svg viewBox="0 0 1500 2000">
    <g >
      <path class="path" xmlns="http://www.w3.org/2000/svg"
        d="M587.48 605.91C487.62 556.77 398.46 546.86 320 576.19C202.31 620.17 100.07 563.11 66.78 525.07C33.5 487.03 56.08 384.79 98.88 361.01C127.41 345.16 207.46 345.16 339.02 361.01C505.45 361.81 594.22 346.35 605.31 314.65C621.96 267.1 585.1 131.57 490 161.29C426.6 181.11 286.71 180.31 70.35 158.92" />
    </g>
  </svg>
  <div class="circle">

  </div>
  <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="cloud1">
    <g transform="translate(-19.348-8.325)" >
      <path
          d="m37.407 26.493c-.794-.624-1.789-.993-2.871-.993-2.547 0-4.621 2.055-4.685 4.616-2.63.997-4.502 3.564-4.502 6.57 0 3.552 2.611 6.488 5.999 6.951v.064h24v-.011c3.347-.197 5.999-3 5.999-6.435 0-3.312-2.468-6.04-5.645-6.405.013-.201.021-.406.021-.61 0-5.131-4.282-9.29-9.563-9.29-3.908 0-7.27 2.278-8.754 5.544"
          fill="#fff" fill-opacity=".847"/>
    </g>
    </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="cloud2">
    <g transform="translate(-19.348-8.325)" >
      <path
          d="m37.407 26.493c-.794-.624-1.789-.993-2.871-.993-2.547 0-4.621 2.055-4.685 4.616-2.63.997-4.502 3.564-4.502 6.57 0 3.552 2.611 6.488 5.999 6.951v.064h24v-.011c3.347-.197 5.999-3 5.999-6.435 0-3.312-2.468-6.04-5.645-6.405.013-.201.021-.406.021-.61 0-5.131-4.282-9.29-9.563-9.29-3.908 0-7.27 2.278-8.754 5.544"
          fill="#fff" fill-opacity=".847"/>
    </g>
    </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="cloud3">
    <g transform="translate(-19.348-8.325)" >
      <path
          d="m37.407 26.493c-.794-.624-1.789-.993-2.871-.993-2.547 0-4.621 2.055-4.685 4.616-2.63.997-4.502 3.564-4.502 6.57 0 3.552 2.611 6.488 5.999 6.951v.064h24v-.011c3.347-.197 5.999-3 5.999-6.435 0-3.312-2.468-6.04-5.645-6.405.013-.201.021-.406.021-.61 0-5.131-4.282-9.29-9.563-9.29-3.908 0-7.27 2.278-8.754 5.544"
          fill="#fff" fill-opacity=".847"/>
    </g>
  </svg> -->
</div>
</template>
<script>
export default {
  name: "Start",
  data: function() {
    return {
      percentage: 0
    }
  }
}
</script>

<style module>
svg {
  width: 10vw
}

#cloud1 {
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
  position: absolute
}

#cloud3 {
  animation: movement 25s linear infinite;
  margin-top: 10%;
  margin-left: 75%;
  opacity: 60%;
  z-index: -1;
  position: absolute;
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
}
</style>
