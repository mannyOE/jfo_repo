import { blackAxios } from '../api';

export default {
  resource: {
    login: '/login'
    
  },

  login (dargs) {
    /**
     * Get all skills on the platform
     */
    
    return blackAxios.post(this.resource.login, dargs)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
    
  
}
