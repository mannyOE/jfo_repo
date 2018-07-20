import { Axios, token } from '../config';

// var token = localStorage.getItem('token')

export default {
    resource: { 
      allContent: '/cms/pricing/all',
      updateContent: '/cms/pricing/update/',
      createContent: '/cms/create',
      deleteC: '/cms/pricing/deleteContent' 
    },

    getContents (dargs) {
         
        return Axios.get(this.resource.allContent)
          .then(function (response) {
             
            if(response){

            }
            return response
    
          })
          .catch(function (error) {
            
            return error;
          });
      },

      delContents (dargs) {
         
        return Axios.post(this.resource.deleteC, dargs)
          .then(function (response) {
            return response
    
          })
          .catch(function (error) {
            
            return error;
          });
      },

      updateContents (dargs) {
         
        return Axios.post(this.resource.updateContent, dargs)
          .then(function (response) {
             
            if(response){

            }
            return response
    
          })
          .catch(function (error) {
            
            return error;
          });
      },
     
    
}