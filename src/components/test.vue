<template>
    <div>
      <div id="mainNavigation" :class="{ 'fixed-top': isNavbarFixed }">
        <nav role="navigation" :class="{ 'bg-red': isNavbarRed }">
          <div class="py-3 text-center border-bottom">
            <img src="../static/Senza titolo1.png" alt="" class="invert" style="max-width: 130px;">
          </div>
          <div class="navbar-expand-md">
            <div class="navbar-dark text-center my-2">
              <button class="navbar-toggler w-75" type="button" @click="toggleNavbar">
                <span class="navbar-toggler-icon"></span> <span class="align-middle">Menu</span>
              </button>
            </div>
            <div class="text-center mt-3" :class="{'collapse navbar-collapse': !isNavbarOpen}" id="navbarNavDropdown">
              <ul class="navbar-nav mx-auto ">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#home" @click="closeNavbar">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#location" @click="closeNavbar">Location</a>
                </li>
                <!-- <li class="nav-item">
                  <img src="../static/output-onlinepngtools.png" alt="" class="invert" style="max-width: 100px;">
                </li> -->
                <li class="nav-item">
                  <a class="nav-link" href="#rsvp" @click="closeNavbar">RSVP</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#lista-nozze" @click="closeNavbar">Lista Nozze</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
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
    <div class="about">
      <h2 :style="{ color: '#490D40', textAlign: 'center', paddingTop: '220px' }">Main Description</h2>
      <p :style="{ padding: '20px 80px' }">
        Roll on the floor purring your whiskers off intrigued by the shower burrow under covers, and play time, rub face on everything, intently sniff hand, or pelt around the house and up and down stairs chasing phantoms.
        Attack feet. Damn that dog shake treat bag under the bed drink water out of the faucet for lick butt love to play with owner's hair tie. Swat at dog give attitude.
      </p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavbarOpen: false,
        isNavbarFixed: false,
        isNavbarRed: false,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        countdownInterval: null,
        targetDate: new Date('2024-07-13T18:00:00Z') // Replace with your target date
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.startCountdown();
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  
    // Add or remove the 'opened' class based on isNavbarOpen
    const mainNavigation = document.getElementById('mainNavigation');
    if (this.isNavbarOpen) {
      mainNavigation.classList.add('opened');
    } else {
      mainNavigation.classList.remove('opened');
    }
  },
      closeNavbar() {
        this.isNavbarOpen = false;
      },
      handleScroll() {
        // Check the scroll position
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
        // Update states based on scroll position
        this.isNavbarFixed = scrollPosition > 0;
        this.isNavbarRed = scrollPosition > 100;
      },
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
  
  <style>
  #mainNavigation.fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    top: -100px; /* Initial top position when fixed */
    transition: opacity  top 0.5s ease;
  }
  
  #mainNavigation .bg-red {
    background-color: #ebc79e;
  }
  .collapse {
    display: none;
  }
  #mainNavigation.opened {
    top: 0; /* Adjust this value based on your design */
  }
  #mainNavigation a {
        font-family: 'Cabin', sans-serif;
        font-size:14px;
        text-transform:uppercase;
        letter-spacing:2px;
        text-shadow:1px 1px 2px rgba(0,0,0,0.4);
      }
      .nav-item a{
        color:#dfdfdf;
      }
      .nav-item a:hover {
        color:#fff
      }
      .nav-item{
        min-width:12vw;
      }
  #mainNavigation {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding-bottom: 120px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.763) 0%, rgba(0,0,0,0) 100%);
    transition: background-color 1s ease 0s;
    }
  
  .background-image {
    background-image: url('../static/main-bg.jpg');
    position: relative;
    background-repeat: no-repeat;
    background-size: cover; /* Adjust the background size as needed */
    background-position: center;
    background-color: #110f16;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    margin-top: -20rem;
    margin-bottom: -5rem;
  }
  .background-image .heading {
    color: white;
    text-align: center;
    padding-top: 200px;
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
    position: relative;
    z-index: 99;
  }
  #mainNavigation .py-3 {
    position: relative;
    z-index: 101; /* Set an even higher z-index for the inner content */
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
  #navbarNavDropdown.collapsing .navbar-nav,
  #navbarNavDropdown.show .navbar-nav{
    background: #01363b;
    padding: 12px;
  }
  
  </style>