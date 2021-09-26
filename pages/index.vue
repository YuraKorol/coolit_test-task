<template>
  <div>
    <ListOfUsers :users="users" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      users: 'users'
    })
  },
  methods: {
    ...mapActions({
      loadUsersToLS: 'loadUsersToLS'
    })
  },
  mounted() {
    this.loadUsersToLS()
  },
  components: {
    ListOfUsers: () => import('@/components/users/ListOfUsers.vue')
  }
}
</script>
