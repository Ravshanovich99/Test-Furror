<template>
  <form @submit.prevent="postProduct" class="form-input">
    <q-input outlined v-model="productName" label="Name" />
    <q-input outlined v-model="productCost" label="Cost" />
    <q-input outlined v-model="productAddress" label="Address" />
    <q-btn :loading="isLoading" color="secondary" label="Post" icon-right="send" type="submit" />
  </form>
</template>

<script>

export default {
  props: {
    productObject: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      productName: this.productObject ? this.productObject.name_uz : '',
      productCost: this.productObject ? this.productObject.cost : '',
      productAddress: this.productObject ? this.productObject.address : '',
      isLoading: false
    }
  },

  methods: {
    async postProduct() {
      this.isLoading = true

      if (this.productObject) {
        const data = {
          id: this.productObject.id,
          product_type_id: this.productObject.product_type_id,
          name_uz: this.productName,
          cost: this.productCost,
          address: this.productAddress,
          created_date: new Date()
        }
        await this.$store.dispatch('putProduct', data)
        this.showToast('edited')

      } else {
        const data = {
          product_type_id: 15,
          name_uz: this.productName,
          cost: this.productCost,
          address: this.productAddress,
          created_date: new Date()
        }
        await this.$store.dispatch('postProduct', data)
        this.showToast('posted')
      }

      this.isLoading = false
      this.$emit('closePopUp')
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
.form-input {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
