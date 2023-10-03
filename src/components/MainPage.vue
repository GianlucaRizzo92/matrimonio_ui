<template>
    <div id="app">
        <main-navbar/>
        <!-- <countdown-timer/> -->
        <Card-main id="location"/>
        <RSVP id="rsvp" />
        <Lista-Nozze id="lista-nozze"/>
        <Main-Footer/>
    </div>
  </template>
  
  <script>
  import CardMain from './CardMain.vue'
  import RSVP from './RSVP.vue'
  import ListaNozze from './ListaNozze.vue'
  import MainFooter from './MainFooter.vue'
  import MainNavbar from './MainNavbar.vue'
  // import CountdownTimer from './CountdownTimer.vue'

  export default {
  components: {
    CardMain,
    ListaNozze,
    RSVP,
    MainFooter,
    MainNavbar,
    // CountdownTimer
  }
  }
  </script>

<style>
.app {
  background-color: #110f16;
  font-family: 'Monotype Corsiva';
}
</style>