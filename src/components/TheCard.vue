<script>
export default {
    props: {
        projects: Object
    },
}
</script>

<template>
    <div class="row g-3">
        <div class="col-3" v-for="project in projects" :key="project.id">
            <div class="card text-center" style="height: 350px">
                <div class="card-img-top">
                    <img  class="img-fluid" :src="`http://127.0.0.1:8000/storage/${project.cover_img}`" alt=""/>
                    <!-- <span>{{ project.cover_img }}</span> -->
                </div>
                <div class="card-title">
                    <h2>{{ project.name }}</h2>
                </div>
                <div class="card-text">
                    <span>description: </span>
                    <span>{{ project.description.slice(0, 20) }}...</span>
                    <br>
                    <span>github: </span>
                    <span class="d-block">{{ project.github_link }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>