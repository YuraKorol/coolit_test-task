<template>
  <b-container class="mt-5">
    <b-list-group>
      <UserItem :user="user" />
    </b-list-group>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  components: {
    UserItem: () => import('@/components/users/UserItem.vue')
  }
}
</script>

<style></style>
