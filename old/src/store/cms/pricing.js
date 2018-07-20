import api from '@/api/cms_api_price';

// Remember to update resetState mutation

const state = {
  sub: {
    status: false,
    error: false,
    content: [],
    singleContent: {},
    success: false,
    successMsg: 'Successfully updated',
    errorMsg: ''
    
  },
};

// getters
const getters = {
  status: state => state.sub.status,
  error: state => state.sub.error,
  content: state => state.sub.content,
  singleContent: state => state.sub.singleContent,
  success : state=>state.sub.success,
  successMsg: state=>state.sub.successMsg,
  errorMsg: state => state.sub.errorMsg
};

// actions
const actions = {
  
  
  createContent ({ dispatch, commit, state }, dargs) {
     
    let self = this;
    return api.createContents(dargs)
    .then((result) => {
       
        
      if (result.status === 200) {
        commit('setContent', result.data )
        
        return result.data
          commit('clearErrors');
      } else {
         

        commit('setError', result.error);
        return false;
      }
    });
  },
  deleteContent({ dispatch, commit, state }, dargs){
    return api.delContents(dargs)
    .then((result) => {   
        
      if (result.status === 200) {        
          return result.data
      } else {
        commit('setError', result.error);
        return false;
      }
    });
  },

  setSingContent ({ dispatch, commit, state }, dargs) {
     
        commit('setSingleContent', dargs );
  },


  getContent ({ dispatch, commit, state }, dargs) {
     
    let self = this;
    return api.getContents(dargs)
    .then((result) => {
       
        
      if (result.status === 200) {

        commit('setContent', result.data.message )
        
        return result.data.message
          commit('clearErrors');
      } else {
         

        commit('setError', result.error);
        return false;
      }
    });
  },
  updateContent({ dispatch, commit, state }, dargs) {
     
    let self = this;
    return api.updateContents(dargs)
    .then((result) => {
       
        
      if (result.status === 200) {
        commit('setContent', result.data )
        
        return result.data
          commit('clearErrors');
      } else {
         

        commit('setError', result.error);
        return false;
      }
    });
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
  setStatus(state){
    state.sub.success = true;
  },
  setSuccess(state, data){
    state.sub.success = true;
    state.sub.successMsg = data;
  },
  
  setContent(state, data){
    // debugger;
    state.sub.content = data;
  },
  setSingleContent(state, data){
    state.sub.singleContent = data;
  },

  resetState (state) {
    state.sub = {
      status: null,
      error: false,
    };
  },

  success (state) {
    state.sub.status = true;
  },

  failure (state) {
    state.sub.status = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations, 
};
