<template>
    <div id="app" class="app">
      <Countdown-Timer id="home" />
    </div>
  </template>
  
  <script>
  import CountdownTimer from './CountdownTimer.vue'

  export default {
    components: {CountdownTimer },
  }
  </script>
  
  <style>
  .app {
  background-image: url('../static/main-bg.jpg');
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #110f16;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
    margin-top: -2rem;
    margin-bottom: -4rem;
  }
  </style>