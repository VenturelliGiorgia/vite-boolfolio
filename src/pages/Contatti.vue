<script>
import axios from "axios";
import { store } from "../store";

export default {
    name: 'Contatti',
    data() {
        return {
            loading: false,
            submitResult: "",
            form: {
                title: "",
                email: "",
                message: "",
                attachment: "",
            },
        }
    },
    methods: {
        onFormSubmit() {
            this.loading = true;
            axios.post(store.backendUrl + "/api/contacts", this.form)
                .then(resp => {
                    this.submitResult = "success";
                    this.loading = false;
                })
                .catch((e) => {
                    if (e.response && e.response.data) {
                        this.submitResult = e.response.data.message;
                    } else {
                        this.submitResult = e.message;
                    }

                    this.loading = false;
                });
        },
    },
}
</script>

<template>
    <div class="container">
        <h1>Pagina Contatti</h1>
        <div class="alert alert-success mt-5" v-if="submitResult === 'success'">
            <span>Form inviato correttamente. Ti risponderemo il prima possibile</span>
        </div>
        <div class="alert alert-danger mt-5" v-else-if="submitResult">
            <span> Sembra che ci sia stato un errore. Ti invitiamo a riprovare pià tardi.<br>
                {{ submitResult }}</span>
        </div>
        <form @submit.prevent="onFormSubmit" v-if="submitResult !=='success'" >
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
                <input type="file" class="form-control" id="attachmentInput" />
            </div>

            <div class="d-flex justify-content-center gap-3">
                <button class="btn btn-secondary" typeof="reset"> Annulla </button>
                <button class="btn btn-success"> Invia </button>
            </div>
        </form>
    </div>
</template>

<style scoped lang="scss">

</style>