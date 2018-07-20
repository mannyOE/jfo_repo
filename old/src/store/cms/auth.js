// Remember to update resetState mutation

const state = {
  sub: {
    status: false,
    error: false,  
  },
};

// getters
const getters = {
  status: state => state.sub.status,
  error: state => state.sub.error,
};

// actions
const actions = {
  setAuth({ dispatch, commit, state }, dargs) {
     commit('setStatus', dargs.status);
     commit('setError', dargs.error);
  },
  
  resetState ({ commit, state }) {
    commit('resetState');
  },
};

// mutations
const mutations = {
  
  setError (state, error) {
    state.sub.error = true;
    state.sub.errorMsg = error;
  },
  setStatus(state, status){
    state.sub.status = status;
  },
  setSuccess(state, data){
    state.sub.success = true;
    state.sub.successMsg = data;
  },
  

  resetState (state) {
    state.sub = {
      status: null,
      error: false,
    };
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations, 
};
