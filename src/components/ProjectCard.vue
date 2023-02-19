<script>
export default {
    props: {
        projects: Object
    },
}
</script>

<template>
    <div class="row">
        <div class="col-3" v-for="project in projects" :key="project.id">
            <div class="card text-center">
                <div class="card-img-top">
                    <img  class="img-fluid" :src="`http://127.0.0.1:8000/storage/${project.cover_img}`" alt=""/>
                    <img class="img-fluid" :src="`${project.cover_img}`" alt="" />

                    <!-- <span>{{ project.cover_img }}</span> -->
                </div>
                <div class="card-title">
                    <h2>{{ project.name }}</h2>
                </div>
                <div class="card-text pb-3">
                    <span>description: </span>
                    <span class="d-block p-2">{{ project.description.slice(0, 20) }}...</span>
                    <span>github: </span>
                    <button class="btn btn-primary">
                        <a class="text-white" href="{{ project.github_link }}">Link gitHub</a>
                    </button>
                    <span class="d-block"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>