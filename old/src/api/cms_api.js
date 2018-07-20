import { Axios, token } from '../config';

// var token = localStorage.getItem('token')

export default {
    resource: { 
      allContent: '/cms/',
      updateContent: '/cms/update/',
      createContent: '/cms/create',
      deleteC: '/cms/deleteContent',
      mail: '/cms/enquiry', 
    },

    getContents (dargs) {
         
        return Axios.get(this.resource.allContent+dargs.page)
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

      mailer (dargs) {
         
        return Axios.post(this.resource.mail, dargs)
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