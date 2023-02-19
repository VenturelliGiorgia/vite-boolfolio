<script>
import ProjectCard from "./components/ProjectCard.vue";
import TheHeader from "./components/TheHeader.vue";
import axios from "axios";

export default {
  components: { ProjectCard, TheHeader },
  data() {
    return {
    }
  }
}
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use "styles/main.scss";
</style>
