<template>
  <div id="mainNavigation" :class="{ 'scrolled': isScrolled }">
    <nav role="navigation" class="navbar navbar-expand-md navbar-light">
      <a class="navbar-brand" href="#">
        <img src="../static/Gianluca&Anna.svg" height="80" alt="Logo" >
      </a>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <!-- Your main menu items -->
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#home" @click="closeNavbar">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#location" @click="closeNavbar">Location</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#rsvp" @click="closeNavbar">RSVP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#lista-nozze" @click="closeNavbar">Lista Nozze</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Mobile-only menu -->
    <div class="mobile-menu" v-if="isNavbarOpen">
      <div class="mobile-menu-content">
        <ul class="navbar-nav mx-auto">
          <!-- Your main menu items -->
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#home" @click="closeNavbar">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#location" @click="closeNavbar">Location</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#rsvp" @click="closeNavbar">RSVP</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#lista-nozze" @click="closeNavbar">Lista Nozze</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;

      this.$nextTick(() => {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
          if (this.isNavbarOpen) {
            mobileMenu.classList.add('opened');
          } else {
            mobileMenu.classList.remove('opened');
          }
        }
      })
    },
    handleScroll() {
    // Check if the user has scrolled down
    const scrolled = window.scrollY > 100;
    const mainNavigation = document.getElementById('mainNavigation');

    if (scrolled && !this.isScrolled) {
      // Add the class only when scrolling down
      mainNavigation.classList.add('scrolled');
    } else if (!scrolled && this.isScrolled) {
      // Remove the class when scrolling back to the top
      mainNavigation.classList.remove('scrolled');
    }

    // Update the isScrolled flag
    this.isScrolled = scrolled;
  },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
  }
};
</script>

<style>
#mainNavigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.navbar-toggler {
  margin-top: 8px; /* Adjust the margin for better alignment */
}

#mainNavigation.opened {
  background-color: #ffff; /* Change background color when menu is open */
}

#mainNavigation.scrolled {
  background-color: #ffff;

}
#mainNavigation.scrolled.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.collapse {
  display: none;
}

#mainNavigation a {
  font-family: 'Poppins', sans-serif;
  font-size: 16px; /* Increase font size for better readability */
  text-transform: uppercase;
  letter-spacing: 0px;
  font-weight: 600;
  color: #dfdfdf; /* Default color */
}

.nav-item a {
  color: #dfdfdf;
}

.nav-item a:hover {
  color: #fff;
}

.nav-item {
  min-width: 10vw;
}

#mainNavigation .py-3 {
  position: relative;
  /* z-index: 101; */
}

#navbarNavDropdown.collapsing .navbar-nav,
#navbarNavDropdown.show .navbar-nav {
  background: #01363b;
  padding: 12px;
}

/* Apply styles when scrolling */
#mainNavigation.scrolled a {
  color: #000; /* Change color on scroll */
}

/* Media query for small screens */
@media (max-width: 767px) {
  #mainNavigation {
    background-color: #fff; /* Set background color to white for screens below 767px */
  }
  .navbar-toggler {
    margin-left: auto; /* Center the toggle button on small screens */
    margin-right: auto; /* Center the toggle button on small screens */
    display: block; /* Make the button a block element to center it */
    width: 80%; /* Set width to 80px */
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px; /* Add spacing between menu items */
  }
  .navbar-brand {
    text-align: center; /* Center the navbar brand */
    width: 100%; /* Make the brand take up the full width */
    margin-right: 0; /* Remove the right margin */
  }
}

.mobile-menu {
  background-color: #fff; /* Set background color to white */
  padding: 12px;
  text-align: center;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}

.mobile-menu.opened {
  max-height: 500px;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Add the following styles to center the button with the logo */
.mobile-menu-content .navbar-toggler {
  margin-top: 12px;
}

/* Adjust the margin for better alignment */
.mobile-menu-content .navbar-nav {
  margin-top: 8px;
}
</style>