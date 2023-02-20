<script>
import axios from "axios";
import { store } from "../store";

export default {
    name: 'Contatti',
    data() {
        return {
            form: {
                title: "",
                email: "",
                message: "",
                attachment: "",
            },
        }
    }
}
</script>

<template>
<div class="container">
    <h1>Pagina Contatti</h1>
    <form>
        <div class="mb-3">
            <label for="titleInput" class="form-label">Titolo</label>
            <input type="text" class="form-control" id="titleInput" v-model="form.title" />
        </div>
    
        <div class="mb-3">
            <label for="emailInput" class="form-label">Email</label>
            <input type="email" class="form-control" id="emailInput" v-model="form.email" />
        </div>
    
        <div class="mb-3">
            <label for="messageInput" class="form-label">Messaggio</label>
            <textarea class="form-control" id="messageInput" v-model="form.message"></textarea>
        </div>
    
        <div class="mb-3">
            <label for="attachmentInput" class="form-label">Allegato</label>
            <input type="file" class="form-control" id="attachmentInput"/>
        </div>
    
        <div class="d-flex justify-content-center gap-3">
            <button class="btn btn-secondary" typeof="reset">
                Annulla
            </button>
            <button class="btn btn-success"> Invia </button>
        </div>
    </form>
</div>
</template>

<style scoped lang="scss">

</style>