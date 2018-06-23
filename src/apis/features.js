import { blackAxios } from '../api';

export default {
  resource: {
    all: 'application/all_application/',
    accepted: 'application/accepted/',
    rejects: 'application/rejects/',
    update: 'application/update/',
    una: 'application/unattended',
    filter: 'application/filter',
    init: 'application'
    
  },

  getAll (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.get(this.resource.all)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
  sendEmail (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.post('web/sendmail', dargs)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
  initialize(){
    return blackAxios.get(this.resource.init)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
  getUn (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.get(this.resource.una)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },

  filterIt (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.post(this.resource.filter, dargs)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
    save (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.post(this.resource.update, dargs)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },

  getRejects (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.get(this.resource.rejects)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
  getAccepted (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.get(this.resource.accepted)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
  
}
