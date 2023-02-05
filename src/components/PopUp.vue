<template>
  <div class="q-pa-md q-gutter-sm">


    <q-dialog v-model="icon">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Add Product</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="popup-section">

          <FormInputs :productObject="productObject" @closePopUp="closePopUp" />

        </q-card-section>

      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import FormInputs from '../components/FormInputs.vue'

export default {
  components: {
    FormInputs
  },


  props: {
    productObject: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      icon: false,
    }
  },

  methods: {
    showPopUp() {
      this.icon = true
    },

    closePopUp() {
      this.icon = false
    }
  }
}
</script>

<style scoped>
.popup-section {
  width: 500px;
}
</style>
