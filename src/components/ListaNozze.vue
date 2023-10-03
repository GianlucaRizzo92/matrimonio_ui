<template>
  <section class="dark">
    <div class="space">
      <h1 class="h1 text-center">Lista nozze</h1>
      <br>
        <h4 style="text-align: center;">Abbiamo la fortuna di avaere già il necessario caccia i soldi</h4>
        <br>
      <div class="row mx-0 justify-content-center">
        <div class="row">
          <div class="col-6">
            <div class="shop-section">
              <!-- <img src="../static/image1.jpg" alt="Image 1" class="logo-section" /> -->
              <div class="shop-name">
                Lista nozze presso:{{ shopName }}
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="divider"></div>
            <div class="logo-section">
              <!-- <img src="../static/image2.jpg" alt="Image 2" class="logo-section" /> -->
              <div class="shop-name">
                Viaggio di nozze
                <br />
                IBAN: {{ fakeIBAN }}
                <b-button variant="primary" size="sm" @click="copyIBAN">Copia</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
  export default {
    data() {
      return {
        shopName: ' Giancarli, Viale Lionello Matteucci, 1, 02100 Rieti RI',
        fakeIBAN: 'XX12 3456 7890 1234 5678 90',
      };
    },
    methods: {
      copyIBAN() {
        const el = document.createElement('textarea');
        el.value = this.fakeIBAN;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      },
    },
  };
  </script>
  
  <style>
  .dark {
    background: #F5EFE8;
    color: black;
    font-family: 'Monotype Corsiva'
  }
  .container {
    margin-top: 60px;
  }
  
  .shop-section {
    border-right: 2px solid #ccc;
    padding-right: 20px;
    min-height: 300px; /* Adjust the desired height value */
    display: flex;
    align-items: center;
    place-content: center
  }
  
  .shop-name {
    font-size: 20px;
    font-weight: bold;
  }
  
  .logo-section {
    padding-left: 20px;
    min-height: 300px; /* Adjust the desired height value */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .logo {
    text-align: right;
  }
  
  .iban {
    font-size: 14px;
    color: #777;
    display: flex;
    align-items: center;
  }
  
  .b-button {
    margin-left: 10px;
  }
  .space {
  padding-top: 5rem;
  }

/* .logo-section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
} */


  </style>