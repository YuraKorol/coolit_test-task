<template>
  <b-list-group-item class="d-flex align-items-center">
    <UserImg :img="user.img" />
    <b-row>
      <b-col>
        <span class="ml-4">Login: {{ user.login }}</span>
        <span class="ml-4">Email: {{ user.email }}</span>
      </b-col>
    </b-row>
  </b-list-group-item>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    UserImg: () => import('@/components/users/UserImg.vue')
  }
}
</script>

<style></style>
