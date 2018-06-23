<template>
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
   @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" :router="true">
    <el-menu-item index="/" class="navbar-brand">J F O</el-menu-item>
    <el-menu-item index="/blog" class="pull-right"></el-menu-item>
    <el-menu-item index="/volunteer" class="pull-right">Join the Movement</el-menu-item>
    <el-menu-item class="pull-right" index="">
        <a href="https://www.gofundme.com/baba-ojonugwa-jfo-4-house-of-rep?teamInvite=TYIY4BiClUf3Xw6oiHdMroUZtJLEyh7J75B67B8QMGP1ckprpPelhnkTY0AMSz0V" target="_blank" style="text-decoration: none; height: 100%; width: 100%;">Donate Here</a>
    </el-menu-item>
  <!-- <el-menu-item index="/blog" class="pull-right">Blog</el-menu-item>
  <el-menu-item index="/" class="pull-right">Home</el-menu-item> -->
</el-menu>
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
        handleSelect(i, j){
            this.activeIndex = i;
        },
        goSignup(){
            this.$router.push({name:'signup'})
        },
    },
    data(){
        return {
            activeIndex: '0'
        }
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

.navbar-brand{
    color: #d4af3f !important;
    font-size: 24px;
    letter-spacing: 2.86px;
    margin: auto;
    line-height: 32px;
    font-weight: bold;
}
.active2 {
    background-color: darkslategray !important;
}

</style>




