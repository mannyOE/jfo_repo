import api from '@/apis/login';

// Remember to update resetState mutation
const state = {
  sub: {
    loggedIn: false,
    message: '',
  }
}

// getters
const getters = {
  loggedIn: state => state.sub.loggedIn,
  message: state => state.sub.message,
}

// actions
const actions = {
  loginAdmin ({ dispatch, commit, state }, args) {

    return api.login(args)
    .then(function (result) {
      // console.log(result);
      if(result.status){
        commit('setLoggedIn', result.status);
        return result.status;
      }else{
        commit('setMessage', result.message);
        return result.status
      }
    })
  },
  resetState ({ commit, state }) {
    commit('resetState');
  },
  logout ({ commit, state }) {
    commit('unsetLoggedIn');
  },
  
}

// mutations
const mutations = {
  setLoggedIn (state, status) {
    state.sub.loggedIn = status
  },
  setMessage (state, msg) {
    state.sub.message = msg
  },

  unsetLoggedIn (state) {
    state.sub.loggedIn = false
  },

  resetState (state) {
    state.sub = {
      loggedIn: false,
      message: '',
    };
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
