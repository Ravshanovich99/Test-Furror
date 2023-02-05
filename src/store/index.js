import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import devEnv from 'app/dev.env'
import moment from 'moment'

Vue.use(Vuex)


const state = () => ({
  product: null,
  productTypes: null
})

const mutations = {

  setProduct(state, data) {
    for (const elem of data) {
      elem.created_date = moment(elem.created_date).format('DD-MM-YYYY')
    }
    state.product = data
  },

  setProductTypes(state, data) {
    state.productTypes = data
  }
}


const getters = {
  getProduct: state => state.product,
  getProductTypes: state => state.productTypes
}


const actions = {
  async getProduct({ commit }) {
    try {
      const { data } = await axios.get(devEnv.BASE_URL)
      commit('setProduct', data)
    } catch (error) {
      console.log(error);
    }
  },

  async getProductTypes({ commit }) {
    try {
      const { data } = await axios.get(`${devEnv.BASE_URL}/get-product-types`)
      commit('setProductTypes', data)
    } catch (error) {
      console.log(error);
    }
  },

  async postProduct({ dispatch }, data) {
    try {
      const response = await axios.post(devEnv.BASE_URL, data)
      dispatch('getProduct')
    } catch (error) {
      console.log(error);
    }
  },

  async putProduct({ dispatch }, data) {
    try {
      const response = await axios.put(devEnv.BASE_URL, data)
      dispatch('getProduct')
    } catch (error) {
      console.log(error);
    }
  },

  async deleteProduct({ dispatch }, id) {
    try {
      const response = await axios.delete(`${devEnv.BASE_URL}/${id}`)
      dispatch('getProduct')
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})