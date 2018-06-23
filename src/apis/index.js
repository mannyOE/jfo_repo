import { blackAxios } from '../api';

export default {
  resource: {
    create: 'admin/new_item/',
    landing: 'admin/all_landing/',
    delete: 'admin/deletePost/',
    
  },

  deleteLand (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.get(this.resource.delete + dargs)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
    createLand (dargs) {
    /**
     * Get all skills on the platform
     */
    return blackAxios.post(this.resource.create,
      {item: dargs})
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },

  getLand () {
    /**
     * Get all skills on the platform
     */
    return blackAxios.get(this.resource.landing)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  },
  
}
