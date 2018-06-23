import api from '@/apis/features'
// Remember to update resetState mutation
const state = {
    sub: {
      
    }
  }
  
  // getters
  const getters = {
   
  }
  
  // actions
  const actions = {
    submit ({ dispatch, commit, state }, args) { 
      return api.sendEmail(args)
      .then((report)=>{
        return report;
      })
    },
  
  }
  
  // mutations
  const mutations = {
   
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
  }
  