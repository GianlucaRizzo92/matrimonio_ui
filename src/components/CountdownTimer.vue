<template>
  <div id="intro" class="text-center">
    <div class="background-image">
      <div class="mask">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white px-4">
            <h3 id="time-counter" class="border border-light my-4 p-4">
              <div class="countdown">
                <div class="countdown-item">
                  <div class="countdown-value">{{ days }}</div>
                  <div class="countdown-label">Days</div>
                </div>
              <div class="countdown-item">
                <div class="countdown-value">{{ hours }}</div>
                <div class="countdown-label">Hours</div>
              </div>
              <div class="countdown-item">
                <div class="countdown-value">{{ minutes }}</div>
                <div class="countdown-label">Minutes</div>
              </div>
              <div class="countdown-item">
                <div class="countdown-value">{{ seconds }}</div>
                <div class="countdown-label">Seconds</div>
              </div>
            </div>
          </h3>
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
};
</script>

<style scoped>
.background-image {
  background-image: url('../static/main-bg.jpg');
  position: relative;
  background-repeat: no-repeat;
  background-size: cover; /* Adjust the background size as needed */
  background-position: center;
  background-color: #110f16;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin-top: -2rem;
  margin-bottom: -5rem;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

#intro {
  /* height: 100vh; */
}

@media (max-width: 991px) {
  #intro {
    margin-top: 45px;
  }
  .countdown-value {
    font-size: 36px;
  }
  .countdown-label {
    font-size: 24px;
  }
}
</style>