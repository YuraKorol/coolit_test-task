<template>
  <b-navbar toggleable="lg" type="dark" variant="secondary">
    <b-navbar-nav>
      <b-row>
        <b-col>
          <b-nav-item>
            <nuxt-link to="/">Home</nuxt-link>
          </b-nav-item>
        </b-col>
        <b-col>
          <b-nav-item>
            <nuxt-link :to="user ? `/profile/${user._id}` : '/signin'"
              >Profile</nuxt-link
            >
          </b-nav-item>
        </b-col>
      </b-row>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-button
        size="sm"
        class="my-2 my-sm-0"
        :variant="user ? 'danger ' : 'success'"
        @click="$emit('logout')"
      >
        {{ user ? 'Logout' : 'SignIn' }}
      </b-button>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    urlToProfile() {
      if (this.user) {
        return '/profile/' + this.user._id
      }
      return ''
    }
  }
}
</script>

<style></style>
