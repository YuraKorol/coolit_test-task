<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="mt-5">{{ config.title }}</h1>
    <FormGenerator :schema="schema" :data="data" @onSubmit="sendData" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { schema, data, config } from './config'

export default {
  data() {
    return {
      schema,
      data,
      config
    }
  },
  components: {
    FormGenerator: () => import('@/components/auth/FormGenerator.vue')
  },
  methods: {
    ...mapActions({
      signIn: 'signIn'
    }),
    sendData(userData) {
      this.signIn(userData)
    }
  }
}
</script>

<style></style>
