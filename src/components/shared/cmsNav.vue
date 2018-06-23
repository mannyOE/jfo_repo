<template>
    <nav class="navbar navbar-default" style="height: 80px; background-color: #fff !important; padding-left: 70px;">
  <div class="container-fluid">
    <div class="navbar-header">
      <el-button type="button" size="medium" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
            <i class="fa fa-bars"></i>
      </el-button>
      
       <router-link class="navbar-brand" :to="{name: 'home'}">JFO</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="hol hidden-xs">jkdhgwehuw iew gewh gewftebfvbueywgefgwuiyfweg rwruiegiywiudwheiuwe</li>
        <li class="hol hidden-xs">jkdhgwehuw iew jkshdwnksjw ejjwiihejwhewuveyurohwuoiegguwueiweuiweiwue</li>
        <li class="link" :class="{'finAct': isActive('cms-home')}" >
            <router-link  :to="{name: 'cms-home'}">Home</router-link>
        </li>
        <li class="link" :class="{'finAct': isActive('cms-blog')}">
            <router-link :to="{name: 'cms-blog'}">Blog</router-link>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
export default {
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
    }
}
</script>



<style scoped>
.finAct {
    color: #d4af3f;
    font-weight: 900;
    font-size: 17px;
}

.link a,.navbar-brand {
    line-height: 40px;
    height: 100% !important;
    text-align: center;
}
.navbar-toggle {
    height: 65% !important;
    text-align: center;
    font-size: 30px;
}
.hol{
    color: #fff;
}
.btns {
    margin-top: 15px;
}
.collapse {
    width: 100%;
    margin-left: -35px;
    background-color: #fff;
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




