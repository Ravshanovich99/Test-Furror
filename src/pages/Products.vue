<template>
  <q-page class="flex flex-center">

    <div v-if="product" class="q-pa-md">
      <q-table :data="product" :selected-rows-label="getSelectedString" selection="single" :selected.sync="selected" />

      <PopUp ref="popup" :productObject="selected[0]" />

      <div class="btns-container">
        <Buttons v-if="selected.length === 0" :btnType="'primary'" :btnText="'Add Product'"
          @click="$refs.popup.showPopUp()" />

        <Buttons v-if="selected.length === 1" :btnType="'warning'" :btnText="'Edit Product'"
          @click="$refs.popup.showPopUp()" />


        <Buttons v-if="selected.length === 1" :btnType="'red'" :btnText="'Delete product'" @click="deleteProduct" />
      </div>
    </div>



  </q-page>
</template>

<script>
import PopUp from '../components/PopUp.vue'
import Buttons from '../components/Buttons.vue'

export default {
  name: 'PageProducts',
  components: {
    PopUp,
    Buttons
  },

  data() {
    return {
      selected: []
    }
  },


  computed: {
    product() {
      return this.$store.getters.getProduct
    },
  },

  async mounted() {
    await this.$store.dispatch('getProduct')
  },

  methods: {

    getSelectedString() {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.$store.state.product.length}`
    },

    async deleteProduct() {
      await this.$store.dispatch('deleteProduct', this.selected[0].id)
      this.selected = []
      this.showToast('deleted')
    },

    showToast(message) {
      this.$q.notify({
        message: `Successfully ${message}!`,
        color: 'primary'
      })
    }
  }
}
</script>

<style scoped>
.btns-container {
  display: flex;
  gap: 10px;
}
</style>