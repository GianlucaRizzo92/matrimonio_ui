<template>
  <div>
    <img
      class="d-block img-fluid"
      title=" "
      :src="imageUrl"
      alt="Description of the image"
      :class="{ 'fade-transition': transitioning }"
      :style="{ objectFit: 'cover', width: '100%', height: '100vh', objectPosition: objectPosition }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageConfigs: [
      { url: require('@/static/img1.jpg'), position: '46.5% center' },
      { url: require('@/static/img2.jpg'), position: '43% center'},
      { url: require('@/static/img3.jpg'), position: '37% top' }
      ],
      currentImageIndex: 0,
      imageUrl: '',
      objectPosition: '',
      transitioning: false,
    };
  },
  mounted() {
    this.updateImage(); // Set an initial image and object position

    // Change the image and object position every 3 seconds
    setInterval(() => {
      this.transitioning = true;
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imageConfigs.length;
        this.updateImage();
        this.transitioning = false;
      }, 1000); // Adjust this delay to match the transition duration
    }, 4000);
  },
  methods: {
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
  transition: opacity 1s ease-in-out; /* Adjust the duration and easing as needed */
  opacity: 1;
}

img {
  object-position: 38% center; /* Default value for small screens */
}

@media only screen and (max-width: 767px) {
  img {
    object-position: 38% center; /* Default value for small screens */
  }
}
</style>
