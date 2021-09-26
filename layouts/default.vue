<template>
  <div>
    <Header :user="user" @logout="logout"></Header>
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  watch: {
    error: {
      handler(val) {
        this.toast(val)
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
      error: 'error'
    })
  },
  methods: {
    ...mapActions({
      logout: 'logout',
      loadUserFromLS: 'loadUserFromLS'
    }),
    toast(error) {
      this.$bvToast.toast(`${error.message}`, {
        title: `Warning`,
        toaster: 'b-toaster-bottom-right',
        solid: true,
        appendToast: error.append
      })
    }
  },
  mounted() {
    this.loadUserFromLS()
  },
  components: {
    Header: () => import('@/components/layouts/Header.vue')
  }
}
</script>

<style></style>
