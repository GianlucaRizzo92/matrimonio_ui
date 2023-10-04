<template >
  <section class="light">
    <div class="space" data-aos="fade-up" data-aos-delay="20" data-aos-duration="500">
      <h1 class="h1 text-center">Répondez, s'il vous plaît</h1>
      <h4 style="text-align: center;">(Inserisci qu i dati per confermare la partecipazione)</h4>
      <div class="row mx-0 justify-content-center">

        <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 card">
          <form class="w-100 rounded p-4 text-dark" @submit="submitForm">
            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Nome</span>
              <input name="name" type="text" class="form-control border-secondary bg-transparent text-light"
                placeholder="Nome e Cognome" v-model="name" />
            </label>
            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Email</span>
              <input name="email" type="text" class="form-control border-secondary bg-transparent text-light"
                placeholder="Email" v-model="email" />
            </label>

            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Numero di persone</span>
              <input name="people" type="number" class="form-control border-secondary bg-transparent text-light"
                placeholder="1" v-model="people" />
            </label>

            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Note aggiuntive</span>
              <textarea name="note" class="form-control border-secondary bg-transparent text-light" rows="3"
                placeholder="" v-model="note"></textarea>
            </label>

            <div class="mb-3">
              <button type="submit" class="btn btn-primary px-3" :disabled="isFormDisabled">
                Invia RSVP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      name: '',
      email: '',
      people: 0,
      note: '',
      successMessage: '',
      errorMessage: '',
    };
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    })
  },
  computed: {
    isFormDisabled() {
      return this.name === '' || this.email === '' || this.people === 0;
    },
  },
  methods: {
    submitForm() {

      const formData = {
        name: this.name,
        email: this.email,
        people: this.people,
        note: this.note,
      };
      try {
        axios.post('https://matrimonio-next.vercel.app/api/form', formData)
      } catch (error) {
        console.log(error);
      }

    },
    closeModal() {
      this.modalVisible = false;
      this.successMessage = '';
      this.errorMessage = '';
    },
  },
};
</script>

<style>
body {
  /* padding: 2rem 0; */
  background: #F5EFE8;
}

.light {
  font-family: 'Monotype Corsiva';
  background: #F5EFE8;
}

.space {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.card {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #18151f;
  background: linear-gradient(45deg, rgba(189, 20, 11, 0.158), #F5EFE8);
}
</style>
