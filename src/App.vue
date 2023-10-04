<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<script>
// import MainNavbar from './components/MainNavbar.vue';
// import CountdownTimer from './components/CountdownTimer.vue';
import MainPage from './components/MainPage.vue';
 
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
.app{
  font-family: 'Monotype Corsiva'
}
::-webkit-scrollbar {
    width: 7px; /* width of the scrollbar */
}

::-webkit-scrollbar-thumb {
    background-color: grey; /* color of the thumb */
    border-radius: 6px; /* roundness of the thumb */
}

::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* color of the track */
}
</style>
