<template>
  <div id="app" class="app">
    <main-page/>
  </div>
</template>

<script>
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
  font-family: 'Monotype Corsiva';
  background-color:#f7f7f7
}
::-webkit-scrollbar {
    width: 7px; 
}

::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 6px;
}

::-webkit-scrollbar-track {
    background-color: #f1f1f1;
}
</style>
