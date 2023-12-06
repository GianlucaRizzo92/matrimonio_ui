<template>
  <div style="color: black;">
    <div
      class="container py-4"
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-duration="500"
    >
      <h4>
        Benvenuti nel nostro sito web dedicato al matrimonio! Abbiamo creato
        questo sito come un modo comodo e interattivo per condividere con voi
        tutti i dettagli importanti che precedono il nostro matrimonio. Non
        vediamo l'ora di celebrare insieme a voi questo nuovo entusiasmante
        capitolo della nostra vita...
      </h4>
    </div>

    <div style="background-color: #f7f7f7;" data-aos="fade-up"
      data-aos-delay="20"
      data-aos-duration="500">
      <div style="margin-top:2rem; text-align-last: center">
  
        <span style="font-size: 50px; font-family:'Monotype Corsiva', cursive; ">13 luglio 2024</span>
      </div>
      <div id="intro" class="text-center">
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="px-4">
              <h3 id="time-counter" class="border border-light my-4 p-4">
                <div class="countdown">
                  <div class="countdown-item">
                    <div class="countdown-value">{{ days }}</div>
                    <div class="countdown-label">Giorni</div>
                  </div>
                <div class="countdown-item">
                  <div class="countdown-value">{{ hours }}</div>
                  <div class="countdown-label">Ore</div>
                </div>
                <div class="countdown-item">
                  <div class="countdown-value">{{ minutes }}</div>
                  <div class="countdown-label">Minuti</div>
                </div>
                <div class="countdown-item">
                  <div class="countdown-value">{{ seconds }}</div>
                  <div class="countdown-label">Secondi</div>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownInterval: null,
      targetDate: new Date('2024-07-13T18:00:00Z') // Replace with your target date
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = this.targetDate - now;

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          this.stopCountdown();
          // Do something when the countdown is finished
        }
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.countdownInterval);
    }
  }
}
</script>

<style>
.h4 {
  font-family: 'Monotype Corsiva', cursive; 
}
.span {
  font-family: 'Monotype Corsiva', cursive; /* Set font */
  font-size: xx-large
}
.countdown {
  display: flex;
  justify-content: center;
  align-items: center; /* Center vertically */
}
.countdown-item {
  text-align: center;
  margin-right: 10px;
  font-family: 'Monotype Corsiva', cursive; /* Set font */
}
.countdown-value {
  font-size: 50px;
}

.countdown-label {
  font-size: 34px;
}

@media screen and (max-width: 767px) {
  .countdown {
    flex-direction: column; /* Stack items vertically on small screens */
  }
  .countdown-item {
    margin-bottom: 10px; /* Add some space between stacked items */
  }
}
</style>