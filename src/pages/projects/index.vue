<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';
export default {
    name: 'ProjectsIndex',
    components: { ProjectCard },
    data() {
        return {
            projects: [],
        }
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
    <h1 class="text-center pt-4 pb-5">Vite Boolfolio</h1>
    <ProjectCard :projects="projects"></ProjectCard>
</template>

<style lang="scss">

</style>