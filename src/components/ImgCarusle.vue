<template>
  <div>
    <img
      class="d-block img-fluid"
      title=" "
      :src="getImageUrl()"
      alt="Gianluca&AnnaSposi"
      :class="this.transitioning"
      :style="{ objectFit: 'cover', width: '100%', height: '100vh', objectPosition: objectPosition }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageConfigs: [
       { url: require('@/static/img5.jpg'), position: '32% center' },
       { url: require('@/static/img2.jpg'), position: '39% center'},
      { url: require('@/static/img4.jpg'), position: '47% center' }
      ],
      currentImageIndex: 0,
      imageUrl: '',
      objectPosition: '',
      transitioning: false,
    };
  },
  mounted() {
    this.preloadImages();
    this.updateImage();

    setInterval(() => {
      this.transitioning = true;
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imageConfigs.length;
        this.updateImage();
        this.transitioning = false;
      }, 1000);
    }, 4000);
  },
  methods: {
    getImageUrl() {
    return this.imageUrl;
  },
    preloadImages() {
    this.imageConfigs.forEach((config) => {
      const img = new Image();
      img.src = config.url;
    });
  },
    updateImage() {
      const { url, position } = this.imageConfigs[this.currentImageIndex];
      this.objectPosition = position;
      this.imageUrl = url;
    },
  },
};
</script>

<style scoped>
.fade-transition {
  transition: opacity 1s ease-in-out;
  opacity: 1;
}
img {
  object-position: 38% center;
}

@media only screen and (max-width: 767px) {
  img {
    object-position: 38% center;
  }
}
</style>
