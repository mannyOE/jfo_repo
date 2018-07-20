<template>
    <nav class="navbar navbar-default bg-base-2" style="border: none; padding-left: 70px; padding-right: 20px;">
  <div class="">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="btn bg-base-2 pull-right visible-xs" @click="openMenu" >
        <i class="fa fa-bars"></i>
      </button>
      <div class="text-center">
       <router-link class="navbar-brand lopp visible-lg" :to="{name: 'Home'}"><img src="../../assets/Nester Global Solutions Logos-02.png" class="logo" > </router-link>
       <router-link class="navbar-brand hoila visible-xs" :to="{name: 'Home'}"><img src="../../assets/Nester Global Solutions Logos-02.png" class="logo" > </router-link>
      </div>
    </div>


    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="hidden-xs bg-base-2 alpha-9">
      <ul class="nav navbar-nav">
          <li class="hol hidden-xs">lubricationfhjsdkkuiew</li>
        <li class="links" >
            <router-link :class="{'finAct': isActive('features')}" :to="{name: 'features'}">Features</router-link>
        </li>
        <li class="links" >
            <router-link :class="{'finAct': isActive('pricing')}" :to="{name: 'pricing'}">Pricing</router-link>
        </li>
        <li class="links" >
             <router-link :class="{'finAct': isActive('blog')}" :to="{name: 'blog'}">Blog</router-link>
        </li>
        <li class="links" >
            <router-link :class="{'finAct': isActive('stories')}" :to="{name: 'stories'}">Customer Stories</router-link>
        </li>
        <li class="links">
            <router-link :class="{'finAct': isActive('sales')}" :to="{name: 'sales'}">Contact Sales</router-link>
        </li>
         <li class="nav-item divider hidden-xs">
        </li>
        <li class="links">
            <a href="http://app.nester.com.ng/login">Log in</a>
        </li>
      </ul>
      <form class="form-inline my-2 pos-add my-md-0 navbar-right text-center" >
        <a class="btn btn-styled btn-sm btn-base-5 text-uppercase btn-circle" href="http://app.nester.com.ng/signup">
            get started
        </a>
    </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->


</nav>



</template>
<script>
export default {
    data(){
        return {
            menu: false,
        }
    },
    methods: {
        isActive(page){
            if(page === this.$route.name){
                console.log(this.$route.name);
                return true;
            }
        },
        goLogin(){
            this.$router.push({name:'login'})
        },
        goSignup(){
            this.$router.push({name:'signup'})
        },
        openMenu(){
            this.$emit('menu');
        },
        goMenu(name){
            this.$router.push({name: name});
            this.menu = false;
        }
    }
}
</script>


<style scoped>
form.pos-add {
      position: relative;
    top: 37px;
    right: 40px;
}
.navbar-brand>img {
    bottom: 40px;
}
.navbar-default .navbar-nav>li>a {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    font-size: 14px;
    color: #FFFFFF  !important;
}
.nav {
  margin-top: 30px;
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
    color: #fff;
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
    font-weight: bold;
}
.hoila {
    line-height: 10px;
}
.lopp{
    line-height: 45px;
}
.active2 {
    background-color: darkslategray !important;
}

</style>




