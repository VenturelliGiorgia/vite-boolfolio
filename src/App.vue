<script>
import TheCard from "./components/TheCard.vue";
import axios from "axios";

export default {
  components: { TheCard },

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
  <div class="container">
    <div>
      <h1>I tuoi progetti</h1>
    </div>

    <TheCard :projects="projects"></TheCard>
  </div>
</template>

<style lang="scss">
@use "styles/main.scss";
</style>
