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
    storeBranch(state,data) {
      state.orderDetails.branch = data;
      localStorage.setItem('orderDetails', JSON.stringify(state.orderDetails));
    }
  },
  actions: {
    storeBranch(context,data) {
      context.commit('storeBranch',data);
    }
  },
  getters: {
    getOrderDetails(state) {
      return state.orderDetails;
    }
  }
});
