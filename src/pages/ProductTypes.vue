<template>
  <q-page class="flex flex-center">

    <div v-if="productTypes" class="q-pa-md">
      <q-table :data="productTypes" row-key="name" />
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageProductTypes',

  computed: {
    productTypes() {
      return this.$store.getters.getProductTypes
    }
  },

  async mounted() {

    await this.$store.dispatch('getProductTypes')
  }
}
</script>
