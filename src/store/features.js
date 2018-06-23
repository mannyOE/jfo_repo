import api from '@/apis/features';

// Remember to update resetState mutation
const state = {
  sub: {
    applications: [],
    stats: {},
    closed: []

  }
}

// getters
const getters = {
  applications: state => state.sub.applications,
  stats: state => state.sub.stats,
  closed: state => state.sub.closed,
}

// actions
const actions = {
  getAllApplications ({ dispatch, commit, state },dargs) {

    return api.getAll(dargs)
    .then(function (result) {
      // console.log(result);
      
      if(result.status){
        commit('setApplications', result.result);
        commit('setStats', result.stats);
        return true;
      }
      return false;
    })
  },
  initialize({ dispatch, commit, state }){
    return api.initialize(dargs)
    .then(function (result) {
      if(result.status){
        commit('setClosed', result.closed);
        return true;
      }
      return false
    })
  },
  filter({ dispatch, commit, state },dargs) {

    return api.filterIt(dargs)
    .then(function (result) {
      // console.log(result);
      if(result.status){
        commit('setApplications', result.result);
        commit('setStats', result.stats);
        return true;
      }
      return false;
    })
  },

  getUnattended({ dispatch, commit, state },dargs) {

    return api.getUn(dargs)
    .then(function (result) {
      // console.log(result);
      if(result.status){
        commit('setApplications', result.result);
        commit('setStats', result.stats);
        return true;
      }
      return false;
    })
  },

  saveItem ({ dispatch, commit, state }, args) {

    return api.save(args)
    .then(function (result) {
        if(result.status){
          return true
        }
        return false;
    })
  },
  getAllAccepted ({ dispatch, commit, state },dargs) {

    return api.getAccepted(dargs)
    .then(function (result) {
      // console.log(result);
      if(result.status){
        commit('setApplications', result.result);
        commit('setStats', result.stats);
        return true;
      }
      return false
    })
  },
  getAllRejects ({ dispatch, commit, state },dargs) {

    return api.getRejects(dargs)
    .then(function (result) {
      // console.log(result);
      if(result.status){
        commit('setApplications', result.result);
        commit('setStats', result.stats);
        return true;
      }
      return false
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
  setApplications(state, appli){
    state.sub.applications = appli
  },
  setStats(state, stats){
    state.sub.stats = stats
  },
  setClosed(state, closed){
    state.sub.closed = closed
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
