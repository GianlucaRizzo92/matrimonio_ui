<template>
  <section class="light">
    <div
      class="container py-4"
      data-aos="fade-up"
      data-aos-delay="20"
      data-aos-duration="500"
    >
      <br />
      <br />
      <br />
      <h4>
        Benvenuti nel nostro sito web dedicato al matrimonio! Abbiamo creato
        questo sito come un modo comodo e interattivo per condividere con voi
        tutti i dettagli importanti che precedono il nostro matrimonio. Non
        vediamo l'ora di celebrare insieme a voi questo nuovo entusiasmante
        capitolo della nostra vita...
      </h4>
    </div>
    <div class="container py-4">
      <h1 class="h1 text-center" id="pageHeaderTitle">Location</h1>

      <article
        class="postcard light blue"
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="500"
      >
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="../static/Santuario_di_Poggio_Bustone_-_Panoramica.jpg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title blue">Santuario di Poggio Bustone</h1>
          <div class="postcard__subtitle small">
            <time datetime="2024-07-13 18:00:00">
              <i class="fas fa-calendar-alt mr-2"></i>Sab, 13 Luglio 2024 ore
              18:00
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat asperiores inventore beatae accusamus odit minima enim,
            commodi quia, doloribus eius!
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play blue">
              <button
                onclick="window.open( `https://www.google.it/maps/dir//Convento+San+Giacomo,+Piazzale+Missioni+Francescane,+snc,+02018+Poggio+Bustone+RI/@42.5043529,12.8905518,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132e540b42283029:0x6c054c573b0f484!2m2!1d12.893072!2d42.5044501!3e0`, '_blank');"
                class="menu-button"
              >
                <i class="fas fa-play mr-2"></i>Come arrivare
              </button>
            </li>

            <li class="tag__item play blue">
              <button
                onclick="window.open( `https://www.santuarivallesanta.com/santuari/poggio-bustone/`, '_blank');"
                class="menu-button"
              >
                <i class="fas fa-play mr-2"></i>Altre informazioni
              </button>
            </li>
          </ul>
        </div>
      </article>
      <article
        class="postcard light red"
        :class="{ expanded: isCardExpanded }"
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="500"
      >
        <a class="postcard__img_link" href="#">
          <img
            class="postcard__img"
            src="../static/vista-panoramica-esterna_2_13977.jpeg"
            alt="Image Title"
          />
        </a>
        <div class="postcard__text">
          <h1 class="postcard__title red">Colle Aluffi</h1>
          <div class="postcard__subtitle small">
            <time datetime="2024-07-13 20:30:00">
              <i class="fas fa-calendar-alt mr-2"></i>Sab, 13 Luglio 2024 ore
              20:30
            </time>
          </div>
          <div class="postcard__bar"></div>
          <div class="postcard__preview-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            fugiat asperiores inventore beatae accusamus odit minima enim,
            commodi quia, doloribus eius!
          </div>
          <ul class="postcard__tagbox">
            <li class="tag__item play blue">
              <button
                onclick="window.open( `https://www.google.com/maps/dir//Colle+Aluffi+Eventi,+Via+Chiesa+Nuova,+195,+02100+Rieti+RI/@42.4396516,12.8058796,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x132faaa0a231eb49:0x9a87736d0794782a!2m2!1d12.8058796!2d42.4396516!3e0`, '_blank');"
                class="menu-button"
              >
                <i class="fas fa-play mr-2"></i>Come arrivare
              </button>
            </li>
            <li class="tag__item play blue">
              <button
                @click="isCardExpanded = !isCardExpanded"
                class="menu-button"
              >
                <i class="fas fa-play mr-2"></i>Menù
              </button>
            </li>
          </ul>
          <div class="postcard__expanded-text" v-if="isCardExpanded">
            <h1 class="centered-list">Menù</h1>
            <ul class="centered-list">
              <li>
                <h3>Antipasto misto</h3>
                <h6>(Roba varia tipo pizza e riempio la linea)</h6>
              </li>
              <li>
                <h3>Pasta con i funghi</h3>
                <h6>(Pasta con i funghi e riempio linea)</h6>
              </li>
              <li>
                <h3>Gnocchi e guaciale</h3>
                <h6>(Roba varia tipo e riempio la linea)</h6>
              </li>
              <li>
                <h3>Pezzo di carne</h3>
                <h6>(Roba varia tipo e riempio la linea)</h6>
              </li>
              <li>
                <h3>Dolci e torta</h3>
                <h6>(Roba varia tipo e riempio la linea)</h6>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "CardMain",
  data() {
    return {
      isCardExpanded: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      AOS.init();
    });
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");
$main-green: #79dd09 !default;
$main-green-rgb-015: rgba(121, 221, 9, 0.1) !default;
$main-yellow: #bdbb49 !default;
$main-yellow-rgb-015: rgba(189, 187, 73, 0.1) !default;
$main-red: #bd150b !default;
$main-red-rgb-015: rgba(189, 21, 11, 0.1) !default;
$main-blue: #0076bd !default;
$main-blue-rgb-015: rgba(0, 118, 189, 0.1) !default;

/* This pen */
body {
  font-size: 16px;
  color: #ffffff;
  text-rendering: optimizeLegibility;
  font-weight: initial;
}

.dark {
  background: #110f16;
}

.light {
  background: #ebc79e;
  font-family: "Monotype Corsiva", cursive;
}

a,
a:hover {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#pageHeaderTitle {
  margin: 2rem 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
}

/* Cards */
.postcard {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 0 0 2rem 0;
  overflow: hidden;
  position: relative;
  color: #18151f;

  &.dark {
    background-color: #18151f;
  }
  &.light {
    background-color: #f5efe8;
  }

  .t-dark {
    color: #18151f;
  }

  a {
    color: inherit;
  }

  h1,
  .h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  .small {
    font-size: 80%;
  }

  .postcard__title {
    font-size: 1.75rem;
  }

  .postcard__img {
    max-height: 180px;
    width: 100%;
    object-fit: cover;
    position: relative;
  }

  .postcard__img_link {
    display: contents;
  }

  .postcard__bar {
    width: 50px;
    height: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #f5efe8;
    transition: width 0.2s ease;
  }

  .postcard__text {
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .postcard__preview-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    height: 100%;
  }

  .postcard__tagbox {
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
    margin: 20px 0 0 0;
    padding: 0;
    justify-content: center;

    .tag__item {
      display: inline-block;
      background: transparent;
      border-radius: 3px;
      padding: 2.5px 10px;
      margin: 0 5px 5px 0;
      cursor: default;
      user-select: none;
      transition: background-color 0.3s;

      &:hover {
        background: #f5efe8;
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-70deg, #f5efe8, transparent 50%);
    opacity: 1;
    border-radius: 10px;
  }

  &:hover .postcard__bar {
    width: 100px;
  }
}

@media screen and (min-width: 769px) {
  .postcard {
    flex-wrap: inherit;

    .postcard__title {
      font-size: 2rem;
    }

    .postcard__tagbox {
      justify-content: start;
    }

    .postcard__img {
      max-width: 300px;
      max-height: 100%;
      transition: transform 0.3s ease;
    }

    .postcard__text {
      padding: 3rem;
      width: 100%;
    }

    .media.postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      background: #18151f;
      top: -20%;
      height: 130%;
      width: 55px;
    }

    &:hover .postcard__img {
      transform: scale(1.1);
    }

    &:nth-child(2n + 1) {
      flex-direction: row;
    }

    &:nth-child(2n + 0) {
      flex-direction: row-reverse;
    }

    &:nth-child(2n + 1) .postcard__text::before {
      left: -23px !important;
      transform: rotate(4deg);
    }

    &:nth-child(2n + 0) .postcard__text::before {
      right: -12px !important;
      transform: rotate(-4deg);
    }
  }
}
@media screen and (min-width: 1024px) {
  .postcard__text {
    padding: 2rem 3.5rem;
  }

  .postcard__text:before {
    content: "";
    position: absolute;
    display: block;

    top: -20%;
    height: 130%;
    width: 55px;
  }

  .postcard.dark {
    .postcard__text:before {
      background: #18151f;
    }
  }
  .postcard.light {
    .postcard__text:before {
      background: #f5efe8;
    }
  }
}

/* COLORS */
.postcard .postcard__tagbox .green.play:hover {
  background: $main-green;
  color: black;
}
.green .postcard__title:hover {
  color: $main-green;
}
.green .postcard__bar {
  background-color: $main-green;
}
.green::before {
  background-image: linear-gradient(
    -30deg,
    $main-green-rgb-015,
    transparent 50%
  );
}
.green:nth-child(2n)::before {
  background-image: linear-gradient(
    30deg,
    $main-green-rgb-015,
    transparent 50%
  );
}

.postcard .postcard__tagbox .blue.play:hover {
  background: $main-blue;
}
.blue .postcard__title:hover {
  color: $main-blue;
}
.blue .postcard__bar {
  background-color: $main-blue;
}
.blue::before {
  background-image: linear-gradient(
    -30deg,
    $main-blue-rgb-015,
    transparent 50%
  );
}
.blue:nth-child(2n)::before {
  background-image: linear-gradient(30deg, $main-blue-rgb-015, transparent 50%);
}

.postcard .postcard__tagbox .red.play:hover {
  background: $main-red;
}
.red .postcard__title:hover {
  color: $main-red;
}
.red .postcard__bar {
  background-color: $main-red;
}
.red::before {
  background-image: linear-gradient(-30deg, $main-red-rgb-015, transparent 50%);
}
.red:nth-child(2n)::before {
  background-image: linear-gradient(30deg, $main-red-rgb-015, transparent 50%);
}

.postcard .postcard__tagbox .yellow.play:hover {
  background: $main-yellow;
  color: black;
}
.yellow .postcard__title:hover {
  color: $main-yellow;
}
.yellow .postcard__bar {
  background-color: $main-yellow;
}
.yellow::before {
  background-image: linear-gradient(
    -30deg,
    $main-yellow-rgb-015,
    transparent 50%
  );
}
.yellow:nth-child(2n)::before {
  background-image: linear-gradient(
    30deg,
    $main-yellow-rgb-015,
    transparent 50%
  );
}

@media screen and (min-width: 769px) {
  .green::before {
    background-image: linear-gradient(
      -80deg,
      $main-green-rgb-015,
      transparent 50%
    );
  }
  .green:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      $main-green-rgb-015,
      transparent 50%
    );
  }

  .blue::before {
    background-image: linear-gradient(
      -80deg,
      $main-blue-rgb-015,
      transparent 50%
    );
  }
  .blue:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      $main-blue-rgb-015,
      transparent 50%
    );
  }

  .red::before {
    background-image: linear-gradient(
      -80deg,
      $main-red-rgb-015,
      transparent 50%
    );
  }
  .red:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      $main-red-rgb-015,
      transparent 50%
    );
  }

  .yellow::before {
    background-image: linear-gradient(
      -80deg,
      $main-yellow-rgb-015,
      transparent 50%
    );
  }
  .yellow:nth-child(2n)::before {
    background-image: linear-gradient(
      80deg,
      $main-yellow-rgb-015,
      transparent 50%
    );
  }
}
.postcard.expanded {
  flex-basis: 100%;
}

.postcard.expanded .postcard__img {
  max-height: 300px;
}

.postcard.expanded .postcard__text {
  padding: 2rem;
}

.postcard.expanded .postcard__expanded-text {
  display: block;
  margin-top: 1rem;
  background: radial-gradient(circle at center, white, transparent 60%);
}

.postcard.expanded .postcard__tagbox {
  justify-content: flex-start;
}

@media screen and (min-width: 769px) {
  .postcard.expanded .postcard__text {
    padding: 3rem;
  }
}

.menu-button {
  border: none;
  background-color: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-decoration: underline;
}

.menu-button:focus {
  outline: none;
}

.centered-list {
  text-align-last: center;
  text-align: center;
  padding: 0;
}

.centered-list li {
  display: block;
  margin: 10px auto;
}
</style>
