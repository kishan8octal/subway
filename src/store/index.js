// store.js
import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      orderDetails: localStorage.getItem('orderDetails') ? 
      JSON.parse(localStorage.getItem('orderDetails')) : {}
    };
  },
  mutations: {
    storeData(state,data) {
      state.orderDetails = data;
      localStorage.setItem('orderDetails', JSON.stringify(state.orderDetails));
    }
  },
  actions: {
    storeData(context,data) {
      context.commit('storeData',data);
    }
  },
  getters: {
    getOrderDetails(state) {
      return state.orderDetails;
    }
  }
});
