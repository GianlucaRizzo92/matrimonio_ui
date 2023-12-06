<template >
  <section class="rsvp">
    <div class="container py-4" data-aos="fade-up" data-aos-delay="20" data-aos-duration="500">
      <div style="margin-top:2rem; text-align: center">
        <span style="font-size: 48px; font-family:'Monotype Corsiva', cursive">Répondez, s'il vous plaît</span>
      </div>
      <div style="text-align: center">
        <span style="font-size: 22px; font-family:'Monotype Corsiva', cursive">(Inserisci qui i dati per confermare la partecipazione)</span>
      </div>

      <div class="row mx-0 justify-content-center">

        <div class="col-md-7 col-lg-5 px-lg-2 col-xl-4 px-xl-0 card">
          <form class="w-100 p-4 text-dark" @submit.prevent="submitForm">
            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black" style="font-family:'Monotype Corsiva', cursive">Nome e Cognome</span>
              <input name="name" type="text" class="form-control border-secondary bg-transparent" v-model="name" />
            </label>
            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black" style="font-family:'Monotype Corsiva', cursive">Email</span>
              <input name="email" type="text" class="form-control border-secondary bg-transparent" v-model="email" />
            </label>

            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black" style="font-family:'Monotype Corsiva', cursive">Numero di ospiti</span>
              <input name="people" type="number" class="form-control border-secondary bg-transparent"
                placeholder="1" v-model="people" />
            </label>

            <label class="d-block mb-4">
              <span class="d-block mb-2 text-black" style="font-family:'Monotype Corsiva', cursive">Note aggiuntive</span>
              <textarea name="note" class="form-control border-secondary bg-transparent" rows="3"
                placeholder="" v-model="note"></textarea>
            </label>

            <div class="mb-3" style="text-align: center;">
              <button style="font-family:'Monotype Corsiva', cursive" type="submit" class="btn btn-primary px-3" :disabled="isFormDisabled">
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
import Swal from 'sweetalert2';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  data() {
    return {
      name: '',
      email: '',
      people: null,
      note: '',
      successMessage: '',
      errorMessage: ''
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
      this.$emit('start-request')
      try {
        const response = await axios.post('https://matrimonio-next.vercel.app/api/form', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.data.status && response.data.status === 'success') {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'La partecipazione è stata confermata con successo. Per maggiori info non esitare a contattarci.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Si è verificato un problema. Se l\'errore persiste non esitare a contattarci',
          });
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Si è verificato un problema. Se l\'errore persiste non esitare a contattarci',
        });
      } finally {
        this.$emit('start-request')
        this.name = null,
        this.email = null,
        this.people = null,
        this.note = null
      }
    },
  }
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
