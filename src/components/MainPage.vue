<template>
    <div id="app">
        <main-navbar/>
        <img-carusle/>
        <CalendarAndTimer/>
        <Card-main id="location"/>
        <RSVP id="rsvp" @start-request="startRequest"/>
        <Lista-Nozze id="lista-nozze"/>
        <Main-Footer/>
        <div v-if="loading" class="loading-overlay">
          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
          </div>
        </div>
    </div>
</template>

  <script>
  import CardMain from './CardMain.vue'
  import RSVP from './RSVP.vue'
  import ListaNozze from './ListaNozze.vue'
  import MainFooter from './MainFooter.vue'
  import MainNavbar from './MainNavbar.vue'
  import CalendarAndTimer from './CalendarAndTimer.vue'
  import ImgCarusle from './ImgCarusle.vue'

  export default {
    components: {
      CardMain,
      ListaNozze,
      RSVP,
      MainFooter,
      MainNavbar,
      CalendarAndTimer,
      ImgCarusle
    },
    data() {
      return {
        loading: false,
      }
    },
    methods: {
    startRequest() {
      this.loading = !this.loading;
    },
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
.loading-overlay {
  /* Add your overlay styles here */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>