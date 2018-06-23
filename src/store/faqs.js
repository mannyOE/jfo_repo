import api from '@/apis/features';

// Remember to update resetState mutation
const state = {
  sub: {
    features: [],
    single: {},
    action: false,
  }
}

// getters
const getters = {
  features: state => state.sub.features,
  single: state => state.sub.single,
  action: state => state.sub.action,
}

// actions
const actions = {
  getLanding ({ dispatch, commit, state },dargs) {

    return api.getLand(dargs)
    .then(function (result) {
      // console.log(result);
      if(result.status){
        commit('setLanding', result.result);
      }
    })
  },

  saveItem ({ dispatch, commit, state }, args) {

    return api.createLand(args)
    .then(function (result) {
        if(result.status){
          commit('resetState');
        }
        return result;
    })
  },
  deletePost({ dispatch, commit, state }, args) {

    return api.deleteLand(args)
    .then(function (result) {
          return result;
    })
  },
  resetState ({ commit, state }) {
    commit('resetState');
  },
  setAction({commit, state}){
    commit('setAction');
  },
  setSingle({commit, state}, single){
    commit('setSingle', single);
  },
  unSetAction({commit, state}){
    commit('unSetAction');
  }
}

// mutations
const mutations = {
  loading (state) {
    state.sub.loading = true
  },
  setAction(state){
    state.sub.action = true
  },
  setSingle(state, single){
    state.sub.single = single
  },
  unSetSingle(state){
    state.sub.single = {}
  },
  unSetAction(state){
    state.sub.action = true
  },
  notLoading (state) {
    state.sub.loading = false
  },

  setLanding (state, lands) {
    state.sub.features = lands
  },

  setUserError (state, error) {
    state.sub.userError = error
  },

  setRedirectError (state, val) {
    state.sub.redirectError = val;
  },

  clearErrors (state) {
    state.sub.autherror = false;
    state.sub.redirectError = false;
    state.sub.loading = false;
    state.sub.error = false;
  },

  resetState (state) {
    state.sub = {
      features: [],
      single: {},
      action: false,
    };
  },

  notVerified (state) {
    state.sub.error = true;
    state.sub.autherrorMsg = "Please confirm you account from your email"
  },

  isAuthError (state) {
    state.sub.autherror = true;
  },

  notAuthError (state) {
    state.sub.autherror = false;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
