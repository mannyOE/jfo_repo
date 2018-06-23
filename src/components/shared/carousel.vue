<template>
    <el-carousel :interval="5000" arrow="always" height="600px" @change="triggerAnimation">
    <el-carousel-item>
       <div class="row carousel-contents">
		   <div class="col-lg-6" :class="{'animated slideInLeft': activeItem==0}">
			   <div class="hidden-xs text-content">
                   I entertain no illusion about the ponderousness of the challenges I am about to undertake. I am confident that by God's grace, we, together, can move our constituency FORWARD 
               </div>
                <div class="text-center visible-lg" style="margin-top: 20px;">
                   <el-button type="info" size="medium" @click="volunteer" round>Join The Movement</el-button>
                <el-button type="success" size="medium" @click="donate" round>Donate</el-button>
               </div>
		   </div>
           <div class="col-lg-6"  :class="{'animated pulse': activeItem==0}">
               <img :src="require('@/assets/img/jfo2.png')" class="img-fluid" style="width: 110%" alt="">
               <div class="text-center visible-xs">
                   <el-button type="info" size="medium" @click="volunteer" round>Join The Movement</el-button>
                <el-button type="success" size="medium" @click="donate" round>Donate</el-button>
               </div>
           </div>
	   </div>
    </el-carousel-item>
	<el-carousel-item>
       <div class="row carousel-contents">
		   <div class="col-lg-6" :class="{'animated pulse': activeItem==1}">
               <img :src="require('@/assets/img/jfo1.png')" class="img-fluid" style="width: 110%" alt="">
               <div class="text-center visible-xs">
                   <el-button type="primary" icon="fa fa-facebook" circle></el-button>
                    <el-button type="success" icon="fa fa-instagram" circle></el-button>
                    <el-button type="warning" icon="fa fa-twitter" circle></el-button>
               </div>
           </div>
		   <div class="col-lg-6 hidden-xs" :class="{'animated slideInUp': activeItem==1}">
			   <div class="text-content">
                    it is time for us to be different in our approach so we can achieve a better result; it is time for us to be THE DIFFERENCE. 
               </div>
               <div class="text-center" style="margin-top: 20px;">
                   <el-button type="primary" icon="fa fa-facebook" circle></el-button>
                    <el-button type="success" icon="fa fa-instagram" circle></el-button>
                    <el-button type="warning" icon="fa fa-twitter" circle></el-button>
               </div>
               
		   </div>
	   </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
    data(){
        return {
            activeItem: null,
        }
    },
    methods: {
        triggerAnimation(newI, oldI){
            this.activeItem = newI;
        },
        donate(){
            this.$router.push({name: 'donate'});
        },

        volunteer(){
            this.$router.push({name: 'volunteer'});
        }
    },

    computed: {
       
    }
}
</script>


<style scoped>
.text-content {
   padding-top: 120px;
   text-align: center; 
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif  
}

  .carousel-contents {
	  padding: 30px;
	  font-size: 26px;
  }
</style>



