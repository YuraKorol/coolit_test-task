<template>
  <b-container class="mt-5">
    <b-list-group>
      <template v-if="users.length">
        <UserItem v-for="user in users" :key="user._id" :user="user" />
      </template>
      <b-list-group-item v-else> No users </b-list-group-item>
    </b-list-group>
  </b-container>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  components: {
    UserItem: () => import('./UserItem.vue')
  }
}
</script>

<style></style>
