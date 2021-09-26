<template>
  <b-form class="form__container_width" @submit.prevent="onSubmit">
    <b-container class="border p-4 mt-4">
      <Input v-for="item in schema" :key="item._id" :item="item" :data="data" />
      <div class="d-flex justify-content-end">
        <b-button type="submit" variant="success">Sign in</b-button>
      </div>
    </b-container>
  </b-form>
</template>

<script>
export default {
  components: {
    Input: () => import('@/components/ui/Input.vue')
  },
  props: {
    schema: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      form: this.data
    }
  },
  methods: {
    onSubmit() {
      return this.$emit('onSubmit', this.form)
    }
  }
}
</script>

<style scoped>
.form__container_width {
  min-width: 300px !important;
  width: 36% !important;
}
</style>
