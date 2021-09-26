<template>
  <b-row>
    <b-col>
      <b-form-group
        :id="`input-group-${item._id}`"
        :label="item.label"
        :label-for="`input-${item._id}`"
      >
        <b-form-input
          :id="`input-${item._id}`"
          v-model="form[item.model]"
          :type="item.type"
          :placeholder="item.placeholder"
          required
        ></b-form-input>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
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
  }
}
</script>

<style></style>
