<template>
  <div id="app">
    <div id="nav">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>
<script>
import NavBar from "@/components/layout/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style lang="scss">
@import "./assets/scss/_variables.scss";
</style>
