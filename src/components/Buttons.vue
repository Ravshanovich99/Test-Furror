<template>
  <q-btn :label="btnText" :color="btnType" @click="$emit('click')" />
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      default: 'primary'
    },
    btnText: {
      type: String,
      required: true,
    }
  },

}
</script>

<style>

</style>