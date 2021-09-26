<template>
  <b-img class="profile__image_size" :src="img"></b-img>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.profile__image_size {
  width: 120px !important;
  height: 90px !important;
}
</style>
