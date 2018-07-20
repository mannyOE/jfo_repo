<template>
    <div>
        <Nav @menu="openMenu"/>
        <router-view style="margin-top: -20px"></router-view>
        <Footer/>
        <el-dialog
	      :visible.sync="menu"
	      width="90%"
	      @close="menu = false" :show-close="false">
	      	<ul class="nav navbar-nav bg-base-2 menue alpha-9">
		       <li class="hol hidden-xs">lubricationfhjsdkkuiew</li>
		        <li class="links" >
		            <a href="#" :class="{'finAct': isActive('home-page')}" 
		            @click.prevent="goMenu('Home')">Home</a>
		        </li>
		        <li class="links" >
		            <a href="#" :class="{'finAct': isActive('features')}" 
		            @click.prevent="goMenu('features')">Features</a>
		        </li>
		        <li class="links" >
		            <a href="#" :class="{'finAct': isActive('pricing')}" 
		            @click.prevent="goMenu('pricing')">Pricing</a>
		        </li>
		        <li class="links" >
		             <a href="#" :class="{'finAct': isActive('blog')}" 
		             @click.prevent="goMenu('blog')">Blog</a>
		        </li>
		        <li class="links" >
		            <a href="#" :class="{'finAct': isActive('stories')}" 
		            @click.prevent="goMenu('stories')">Customer Stories</a>
		        </li>
		        <li class="links">
		            <a href="#" :class="{'finAct': isActive('sales')}" 
		            @click.prevent="goMenu('sales')">Contact Sales</a>
		        </li>
		         <li class="nav-item divider hidden-xs"> 
		        </li>
		        <li class="links">
		            <a href="">Log in</a>
		        </li>
           <form class="form-inline my-2 my-md-0 navbar-right text-center" >
            <button class="btn mr-sm-2 my-sm-0 sign btn-circle"  @click.prevent="">
                get started
            </button>
        </form>
          </ul>
	  </el-dialog>
    </div>
</template>

<script>
import Nav from '@/components/landing/nav'
import Footer from '@/components/landing/footer'

export default {
    components: {Nav, Footer},
    data(){
    	return {
    		menu: false
    	}
    },
    methods: {
    	openMenu(){
    		this.menu = true;
    	},
    	 isActive(page){
            if(page === this.$route.name){
                console.log(this.$route.name);
                return true;
            }
        },
        goMenu(name){
            this.$router.push({name: name});
            this.menu = false;
        }
    }
}
</script>
<style type="text/css">
    .v-modal {
        background-color:#031d5b !important;color:#FFF !important
    }
</style>



<style scoped>
.menue {
	margin-top: -60px;
	margin-left: -20px;
	width: 112%;
	margin-bottom: -30px;
    padding-bottom: 10px;
}
.finAct {
    font-weight: 700 !important;
    font-size: 17px !important;
}
.links a,.navbar-brand {
    line-height: 40px;
    height: 100% !important;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.88px;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff !important;
    text-align: center !important;
    font-weight: 500;
}
.links a:hover{
	color: #031d5b !important;
}
.log{
    background: #1b0f00;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 10px 25px;
    margin-top: 15px;
}
.sign{
    background: #d4af3f;
    margin-top: 15px;
    margin-left: 18px;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 8px 35px;
}
.sign:hover, .sign:focus, .sign:active{
    background: #d4af3f;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    box-shadow: 0 10px 40px 0 rgba(212,175,63,0.2);
}
.log:hover, .log:focus, .log:active{
    background: #1b0f00;
    color: #031d5b;
    text-transform: uppercase;
    font-size: 12px;
    box-shadow: 0 10px 40px 0 rgba(212,175,63,0.2);
}
.navbar-toggle:hover,.navbar-toggle:focus,.navbar-toggle:active{
    background-color: transparent !important;
}
.navbar-toggle {
    height: 65% !important;
    text-align: center;
    font-size: 30px;
}
.hol{
    color: transparent;
}
.btns {
    margin-top: 15px;
}
.collapse {
    margin-left: -35px;
}
.navbar-brand{
    color: #d4af3f !important;
    font-size: 24px;
    letter-spacing: 2.86px;
    margin: auto;
    line-height: 45px;
    font-weight: bold;
}
.active2 {
    background-color: darkslategray !important;
}

</style>
