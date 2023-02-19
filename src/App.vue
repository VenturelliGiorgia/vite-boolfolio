<script>
import ProjectCard from "./components/ProjectCard.vue";
import TheHeader from "./components/TheHeader.vue";
import axios from "axios";

export default {
  components: { ProjectCard, TheHeader },

  data() {
    return {
      backendUrl: "http://127.0.0.1:8000",
      projects: []
    };
  },

  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects")
        .then((resp) => {
          console.log(resp.data);
          this.projects = resp.data;
        });

    }
  },

  mounted() {
    this.fetchProjects();
  }
}
</script>

<template>
  <TheHeader></TheHeader>
  <div class="container">
    <div  class="py-3">
      <h1>I tuoi progetti</h1>
    </div>

    <ProjectCard :projects="projects"></ProjectCard>
  </div>
</template>

<style lang="scss">
@use "styles/main.scss";
</style>
