<template >
  <section class="rsvp">
    <div class="container py-4" data-aos="fade-up" data-aos-delay="20" data-aos-duration="500">
      <h1 class="h1 text-center">Répondez, s'il vous plaît</h1>
      <h4 style="text-align: center;" class="h4">(Inserisci qu i dati per confermare la partecipazione)</h4>
      <div class="row mx-0 justify-content-center">

        <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 card">
          <form class="w-100 p-4 text-dark" @submit.prevent="submitForm">
            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Nome e Cognome</span>
              <input name="name" type="text" class="form-control border-secondary bg-transparent text-light" v-model="name" />
            </label>
            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Email</span>
              <input name="email" type="text" class="form-control border-secondary bg-transparent text-light" v-model="email" />
            </label>

            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Numero di ospiti</span>
              <input name="people" type="number" class="form-control border-secondary bg-transparent text-light"
                placeholder="1" v-model="people" />
            </label>

            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black">Note aggiuntive</span>
              <textarea name="note" class="form-control border-secondary bg-transparent text-light" rows="3"
                placeholder="" v-model="note"></textarea>
            </label>

            <div class="mb-3" style="text-align-last: center;">
              <button type="submit" class="btn btn-primary px-3" :disabled="isFormDisabled">
                Invia RSVP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="imgPrincipale"
    data-aos="fade-up"
      data-aos-delay="20"
      data-aos-duration="500">
      <img src="../static/green-flower.png" alt="" class="img-fluid">
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
    async submitForm() {
      const formData = {
        name: this.name,
        email: this.email,
        people: this.people,
        note: this.note,
      };

    try {
      const response = await axios.post('https://matrimonio-next.vercel.app/api/form', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
},
    closeModal() {
      this.modalVisible = false;
      this.successMessage = '';
      this.errorMessage = '';
    },
  }
</script>

<style>
.h1 {
  font-family: 'Monotype Corsiva'
}
.h4 {
  font-family: 'Monotype Corsiva'
}
body {
  /* padding: 2rem 0; */
  background: #F5EFE8;
  font-family: 'Monotype Corsiva'
}

.rsvp {
  font-family: 'Monotype Corsiva';
}

.space {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.card {
  border: none;
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #18151f;
  background: #f1f1f1;
}
.text-dark{
  font-family: 'Monotype Corsiva'
}
.img {
  border: 0;
  height: auto;
  vertical-align: top;
  margin: 0 0 15px;
  max-width: 100%;
}
.imgPrincipale {
    margin-top:-5rem;
    text-align: center;
    line-height: 20px;
}
</style>
