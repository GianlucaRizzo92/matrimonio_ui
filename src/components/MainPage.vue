<template>
    <div id="app">
        <main-navbar/>
        <img-carusle/>
        <!-- <countdown-timer/> -->
        <CalendarAndTimer/>
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
  import CalendarAndTimer from './CalendarAndTimer.vue'
  import ImgCarusle from './ImgCarusle.vue'

  export default {
  components: {
    CardMain,
    ListaNozze,
    RSVP,
    MainFooter,
    MainNavbar,
    // CountdownTimer,
    CalendarAndTimer,
    ImgCarusle
  }
  }
  </script>

<style>
.app {
  font-family: 'Monotype Corsiva';
}
.main-navbar{
  z-index: 1;
}
</style>