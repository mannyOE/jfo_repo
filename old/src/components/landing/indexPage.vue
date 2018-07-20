<template>

<div class="" v-if="exist">
    <div class="row">

        <section class="background-image-holder bg-base-2">
    <div class="holder-item has-bg-cover bg-size-cover dodo">
        <!-- <span class="mask bg-base-2 alpha-8"></span> -->
        <div class="container slice-lg slice--offset-top">
            <div class="row cols-xs-space align-items-center text-center text-md-left justify-content-center">
                <div class="col-lg-2 col-md-1"></div>
                <div class="col-lg-8 col-xs-12 col-md-10">
                    <div class="text-center pt-50">

                       <h3 class="text-lg text-white  c-white font-48">{{allContent[0].title.replace(/^\s+|\s+$/g,'')}}</h3>
                        <p class="text-lg text-white  c-white font-16 lh-40 " v-html="allContent[0].body.replace(/(<([^>]+)>)/ig,'')">
                        </p>
                        <div class="row mt-4">
                            <div class="col-xs-12 col-md-6 text-center">
                                 <a class="btn btn-styled btn-white btn-circle mt-4" href="http://app.nester.com.ng/signup">START A FREE TRIAL</a>
                            </div>
                            <div style="height: 20px" class="col-xs-12 col-md-1 visible-xs"></div>
                            <div class="col-xs-12 text-center col-md-6">
                                <router-link class="btn btn-styled btn-white btn-circle mt-4" :to="{name: 'sales'}">REQUEST A DEMO</router-link>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="slice-xl py-0 sct-color-1 sct-color-1">
<div class="spotlight-top">
    <div class="container-fluid">
        <div class="row">
        <div class="col-md-7 col-xs-12 pt-10 pl-20">

            <h4 class="text-title">{{allContent[1].title}}</h4>
            <p class="text-sub" v-html="allContent[1].body.replace(/(<([^>]+)>)/ig,'')"></p>

        </div>
<!-- <<<<<<< HEAD
        <div class="col-md-5 col-xs-12 pt-20">
======= -->
        <div class="col-md-5 col-xs-122">
<!-- >>>>>>> 21c86a46b180a1b6911f36655a118fc21ec1af59 -->
            <!-- <img src="ico/163072-OWFHA3-668.png" class=""> -->
            <img :src="$API+'contents/'+allContent[1].photo" width="70%" class="img-center max-width" >
        </div>
        </div>

    </div>
</div>
</section>
<div class="container-fluid pt-50">
    <span class="delimiter delimiter--style-3 section-divider"></span>
</div>

<section class="slice-xl pt-83 sct-color-1 sct-color-1">
    <div class="spotlight-top">
        <div class="container-fluid">
            <div class="row">
                    <div class="col-md-5">
                            <!-- <img src="ico/107342-OMY79V-29.png" class="img-center"> -->
                            <img :src="$API+'contents/'+allContent[2].photo" width="70%" class="img-center max-width" >
                        </div>
            <div class="col-md-7 pt-83">
                <h4 class="text-title" v-html="allContent[2].title">
                </h4>
                <p class="text-sub" v-html="allContent[2].body.replace(/(<([^>]+)>)/ig,'')">
                </p>

            </div>

            </div>

        </div>
    </div>
</section>
 <section class="slice-xl pt-36 sct-color-1 sct-color-1 bg-base-2">
    <!-- <span class="mask mask-dark--style-1"></span> -->
    <div class="spotlight-top">
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-12 col-xs-12">
                <h4 class="text-title c-white  text-center" v-html="allContent[3].title">
                </h4>
                <p class="text-sub-2 c-white pt-83 text-center" v-html="allContent[3].body.replace(/(<([^>]+)>)/ig,'')">
                </p>
                <div class="row">
                    <div class="col-md-4 feat col-xs-12 text-center" >
                        <img :src="$API+'contents/'+allContent[4].photo" >
                        <!-- <h4 class="h44" v-html="allContent[4].title"></h4> -->
                        <p class="fe-bod" v-html="allContent[4].body.replace(/(<([^>]+)>)/ig,'')">
                        </p>
                    </div>
                    <div class="col-md-4 feat col-xs-12 text-center" >
                        <img :src="$API+'contents/'+allContent[5].photo" >

                        <!-- <h4 class="h44" v-html="allContent[5].title"></h4> -->
                        <p class="fe-bod" v-html="allContent[5].body.replace(/(<([^>]+)>)/ig,'')">
                        </p>
                    </div>
                    <div class="col-md-4 feat col-xs-12 text-center" >
                        <img :src="$API+'contents/'+allContent[6].photo" >
                        <!-- <h4 class="h44" v-html="allContent[6].title"></h4> -->
                        <p class="fe-bod" v-html="allContent[6].body.replace(/(<([^>]+)>)/ig,'')">
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 feat col-xs-12 text-center" >
                    <img :src="$API+'contents/'+allContent[7].photo" >

                    <!-- <h4 class="h44" v-html="allContent[7].title"></h4> -->
                    <p class="fe-bod" v-html="allContent[7].body.replace(/(<([^>]+)>)/ig,'')">
                    </p>
                </div>
                <div class="col-md-4 feat col-xs-12 text-center" >
                    <img :src="$API+'contents/'+allContent[8].photo" >

                    <!-- <h4 class="h44">{{allContent[8].title}}</h4> -->
                    <p class="fe-bod" v-html="allContent[8].body.replace(/(<([^>]+)>)/ig,'')">
                    </p>
                </div>
                <div class="col-md-4 feat col-xs-12 text-center" >
                    <img :src="$API+'contents/'+allContent[9].photo" >

                    <!-- <h4 class="h44">{{allContent[9].title}}</h4> -->
                    <p class="fe-bod" v-html="allContent[9].body.replace(/(<([^>]+)>)/ig,'')">
                    </p>
                </div>
                </div>
            </div>

            </div>

        </div>
    </div>
    </section>
    <section class="slice sct-color-2 border-top border-bottom">
                        <div class="container">
                            <div class="section-title section-title--style-1 text-center mb-4">
                                <p class="text-title text-grey text-center">
                                    Hear what our customers have to say about us!
                                    
                                </p>
                                <span class="section-title-delimiter clearfix d-none"></span>
                            </div>

                            





                            <div class="testi">
                                <el-carousel :interval="5000" arrow="always" indicator-position="none">
                                <el-carousel-item v-for="test in testContent" :key="item">
                                  <div class="row ">
                                                <div class="col-md-6" style="padding-left: 150px;">
                                                  <img :src="$API+'contents/'+test.photo"  class="testi-img" >
                                                   </div>
                                                <div class="col-md-6">
<h5> " <span v-html="test.body.replace(/(<([^>]+)>)/ig,'')"></span> "</h5>
                        <p v-html="JSON.parse(test.title).title"></p>
                        <p v-html="JSON.parse(test.title).affiliation"></p>
                                                     </div>
                                                </div>
                                </el-carousel-item>
                              </el-carousel>
                            </div>
                        </div>
                    </section>





    </div>
</div>
<div v-else>
    <loader/>
</div>
</template>


<script type="text/javascript">
    import loader from './loader'
	import { mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
		components: {
            loader
		},
		data(){
			return {
				exist: false,
			}
		},
		mounted(){
			this.fetchData();
		},
		methods: {
			...mapActions('cmsLanding', {landGet:'getContent'}),
            ...mapActions('cmsTest', {testGet: 'getContent'}),
            fetchData(){
				var args = {
					page: 'landing'
				};
				this.landGet(args).then(res=>{
                   this.fetchTestData()
				})
            },
            fetchTestData(){
				var args = {
					page: 'testimonials'
				};
				this.testGet(args).then(res=>{
                    this.exist = true;
					console.log(res);
				})
			},



		},
		computed: {
			...mapGetters('cmsLanding', {landingCont: 'content'}),
             ...mapGetters('cmsTest', {testContent: 'content'}),
            allContent(){
                if(this.landingCont){
                    this.exist = true;
                    return this.landingCont;
                }
            },
            tesoCont(){
                if(this.testContent){
                    var rand = this.testContent[Math.floor(Math.random() * this.testContent.length)];
                    return rand;
                }else{
                    return null;
                }
            }
		}
	}
</script>



<style scoped>

.swiper-button-next, .swiper-button-prev {
  background-color: transparent !important;
}
body{
    width: 100% !important;
    height: 100%;
    margin: auto;

}

nav li{
    display: inline-block;
}
.navbar i{
    font-size: 2.0rem;
    color: #4a4a4a;
}
.navbar-toggler-icon{
    color: #4a4a4a;
}
.pp p{
    font-size: 16px;
    line-height: 32px;
}
/*.navbar-nav.navbar-center {*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*transform: translatex(-50%);*/
/*}*/
.navbar-nav.navbar-right {
    position: absolute;
    right: 2%;
    transform: translatex(-50%);
}
.part{
    height: 100vh;
}
.navbar-brand{
    color: #d4af3f !important;
    font-size: 24px;
    letter-spacing: 2.86px;
    margin: auto;
    line-height: 45px;
    font-weight: bold;
}
.navbar-nav a{
    letter-spacing: 0.88px;
    font-size: 14px;
    text-transform: uppercase;
    color: #1b0f00;
    text-align: center !important;
    font-weight: 500;
}
.log{
    background: #1b0f00;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 10px 25px;
}
.h44 {
    color: #fff !important;
    font-weight: 650;
}
.fe-bod {
    color: #fff !important;
    font-size: 14px;
    text-align: center;
    margin-top: -10px;
}
.sign{
    background: #d4af3f;
    color: #fff;
    text-transform: uppercase;
    font-size: 12px;
    padding: 10px 25px;
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
h4{
    color: #1b0f00;
}
.manage-all{
    font-size: 32px; font-weight: bold; line-height: 40px;
    color: #1b0f00;
}
.nester-is{
    font-size: 16px; line-height: 28px; margin-top: 22px;
}
.half{
    /*background-image: url("../img/Home Page/Rectangle 2.png");*/
    height: auto;
    background: #ebd8a8;
    /*padding-top: 1.5%; padding-bottom: 1.5%;*/

}
.ttop{

    padding: 5% 10% 10% 10%;
    text-align: center;
}
.start{
    text-transform: uppercase;
    background: #fff;
    border-radius: 3px;
    border: 1px solid #fff;
    color: #1b0f00;
    margin-right: 1%;
    font-size: 14px;
    padding: 5% 10%;
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.1);
}
.demor:hover, .r-demo:hover{
    background: #1b0f00;
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.2);
    color: #fff;
    border: none;
}

.start:hover{
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.2);
    background: #fff;
    border-radius: 3px;
    border: 1px solid #fff;
    color: #1b0f00;
}
.demor{
    background: #1b0f00;
    color: #fff !important;
    transition: .2s ease-in-out;
    margin-left: 1%;
    text-transform: uppercase;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid #1b0f00;
    padding: 5% 10%;
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.1);
}
.r-demo{
    letter-spacing: 1.4px;
    background: #fff;
    transition: .2s ease-in-out;
    color: #1b0f00;
    margin-left: 1%;
    text-transform: uppercase;
    border-radius: 3px;
    font-size: 12px;
    border: 1px solid #1b0f00;
    padding: 10px 25px;
    /*box-shadow: 0 5px 40px 0 rgba(27,15,0,0.1);*/
}
.part2{
    height: 140vh;
}
.img-v{
    transition: 0.5s ease-in-out;
}
.img-v:hover{
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
}
.text-title{
    margin-top: 10%;
}
.head1{
    font-size: 30px; font-weight: bold; line-height: 37px;
    color: #1b0f00;
    margin-top: 5%;
}
.headd1{
    color: #4a4a4a;
    font-size: 18px;
    line-height: 36px;

}
.headd{
    font-size: 30px; font-weight: bold; line-height: 40px;
    color: #1b0f00;
}
.headdd{
    font-size:16px; line-height: 28px;
}
.head2{
    font-size: 28px;
    line-height: 42px;
    color: #1b0f00;
    font-weight: 600;
}
p{
    color: #9b9b9b;
}
.feat p, .ttop p{
    font-size: 16px;
}
.feat{
    margin-top: 20px;
        height: 340px;
    padding: 30px 10px 30px 10px;
    transition: .3s ease-in-out;
}
.feat:hover{
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.2);
    border-radius: 3px;
    transition: .3s ease-in-out;
}
.hear{
    color: #fff;
    font-size: 32px;
    line-height: 39px;
    /*text-align: center;*/
    font-weight: bold;
    margin-top: 4%;
}
.down{
    background-image: url('./background.svg') !important;
    padding-bottom: 4%;
}
.dodo {
    background-image: url('./ico/Scene-1.png') !important;
    background-position: left center;
}
.ready{
    /*background: rgba(212,175,63,0.1);*/
    background-color: #EBDBA8;
    height: 20%;
    padding: 3% 8%;
}
.ready button{
    background: #1b0f00;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    box-shadow: 0 10px 30px 0 rgba(27,15,0,0.1);
    padding: 5% 25%;
}
.ready button:hover{
    background: #1b0f00;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;

}
.ready small{
    color: #1b0f00;
    font-size: 1.8rem;
    line-height: 2.3rem;
}
.ready h4{
    color: #1b0f00;
    font-size: 3.0rem;
    line-height: 3.7rem;
    font-weight: 600;
}
.foot{
    padding: 1% 5%;
    background: #4a4a4a;
    color: #fff;
}
a{
    color: #000 !important;
}
.benefits{
    height: 430px;
    padding: 12%;

}
.benefits p{
    font-size: 16px;
    color: #9b9b9b;
    line-height: 24px;
}
.tabs h5{
    border-bottom: 1px solid #d8d8d8;
    padding: 6% 5%;
    color: #1b0f00;
    font-size: 24px;
    font-weight: 600;
}
.tabs h5 small{
    color: #1b0f00;
    font-weight: 500;
    font-size: 14px;
}
.tabs h6{
    border-bottom: 1px solid #d8d8d8;
    padding: 8% 5%;
    color: #1b0f00;
    font-size: 16px;
    font-weight: 600;
}
.get-s{
    border: 1px solid #d4af3f;
    background: #fff;
    border-radius: 3px;
    color: #d4af3f;
    font-size: 14px;
    line-height: 19px;
    padding: 10px 25px;
    text-transform: uppercase;
}
.tabs{
    width: 80% !important;
    margin: 20% 2%;
    text-align: center;
    background: #fff;
    border-radius: 3px;
    border: none;
    padding-bottom: 8%;

}
.box{
    border-radius: 5px;
    padding: 6% 5%;
    margin: 10%;
    height: 90%;
    box-shadow: 0 10px 30px 0 rgba(27,15,0,0.1);
}
.box:hover{
    box-shadow: 0 10px 30px 0 rgba(27,15,0,0.2);
}
.box h6{
    color: #1b0f00;
    font-size: 18px;
    line-height: 25px;
}
.box p{
    color: #888;
    font-size: 16px;
    line-height: 19px;
}
.box small{
    color: #4a4a4a;
    font-size: 16px;
    line-height: 27px;
}
.theforms{
    margin: 5% 1%;
    text-align: left !important;
    padding: 1% 10%;
}
.theforms label{
    color: #1b0f00;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2%;
}
.theforms input{
    border: 1px solid #9b9b9b !important;
    margin-bottom: 4%;
    font-size: 16px !important;
    line-height: 32px;
    border-radius: 3px;
    background: transparent !important;
    color: #9b9b9b;
    padding: 3% 2%;
}
.theforms textarea{
    border: 1px solid #9b9b9b !important;
    margin-bottom: 15%;
    font-size: 18px !important;
    line-height: 32px;
    border-radius: 3px;
    background: transparent !important;
    color: #9b9b9b;
    height: 62%;
}
.ttt label{
    text-align: center !important;
}
.theforms input, textarea:active, .theforms input, textarea:focus{
    border: 1px solid #1b0f00;
}
.theforms button{
    padding: 8px 40px;
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    background: #d4af3f;
    border-radius: 3px;
    transition: 0.2s ease-in-out;
}
.theforms button:hover{
    font-size: 14px;
    background: #d4af3f;
    border-radius: 3px;
    transition: 0.2s ease-in-out;
    box-shadow: 0 5px 60px 0 rgba(27,15,0,0.2);
    border: none;
    color: #fff;
    padding: 8px 40px;

}
.bot{
    padding: 4% 1px;
}
.bot small{
    margin-top: 6%;
}
.bot small a{
    color: #4a4a4a !important;
    font-size: 1.4rem;
    line-height: 2.8rem;
    font-weight: 500;
}
.bot h4{
    color: #1b0f00;
    font-size: 2.0rem;
    font-weight: 600;
    line-height: 3.6rem;
}
.blogs{
    /*padding: 8%;*/
    border-radius: 5px;
    margin-bottom: 15%;
    /*margin-right: 5%;*/
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.05);
    overflow: hidden;
}
.blogs button{
    background: #1b0f00;
    color: #fff;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
}
.blogs button:hover{
    background: #1b0f00;
    color: #fff;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.1);

}

.blogs:hover, .blog:hover, .blogb:hover{
    box-shadow: 0 5px 60px 0 rgba(27,15,0,0.2);
}
.blogs h6, .blog h6, .blogb h6{
    color: #1b0f00;
    font-size: 16px;
    font-weight: 550;
}
.blog small, .blogb small{
    font-size: 16px;
    line-height: 28px;
}
.blog p, .blogs p, blogb p{
    font-size: 14px;
    color: #9b9b9b;
}
.blogs h5{
    color: #1b0f00;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
}
.blogs input{
    border: 1px solid #a4a4a4;
    border-radius: 3px;
    color: #888888;
    font-size: 14px;
    margin-top: 15%;
}
.blogs .get{
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    background: #d4af3f;
    margin-top: 15%;
    width: 100%;
    margin-bottom: 25%;
    padding-top: 4% ;
    padding-bottom: 4% ;
    transition: 0.3s ease-in-out;
}
.blogs .get:hover{
    border: none;
    box-shadow: 0 5px 40px 0 rgba(27,15,0,0.2);
    text-transform: uppercase;
    color: #fff;
    font-size: 14px;
    background: #d4af3f;
}
.blog{
     padding: 13%;
     border-radius: 5px;
     /*margin-bottom: 15%;*/
     text-align: center;
     box-shadow: 0 5px 40px 0 rgba(27,15,0,0.1);
 }
.blogb{
    padding: 7%;
    background: rgba(212,175,63,0.3);
    border-radius: 5px;
    /*margin-bottom: 15%;*/
    /*text-align: center;*/
    box-shadow: 0 10px 30px 0 rgba(27,15,0,0.1);
}
.blogb a{
    text-transform: uppercase;
    color: #1b0f00;
    font-size: 16px;
    /*margin-top: 10%;*/
    font-weight: 550;
    text-decoration: none;
}
.blogb p{
    font-size: 16px;
}
label.required:after{
    color: red;
    content: '*' ;
}
.btn-group{
    border-radius: 3px;
    background: #d4af3f;
    padding: 0.5%;

}
.btn-group .btn-default{
    background: #d4af3f;
    color: #fff;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 550;
    padding: 10px 25px;
}
.btn-group .btn-default:hover{
    background: #fff;
    color: #1b0f00;
}
.faqs .card{
    box-shadow: 0 10px 20px 0 rgba(27,15,0,0.1);
    border-radius: 3px;
    border: none;
    background: #fff;
    margin-top: 5%;
}
.faqs .card:hover{
    box-shadow: 0 10px 20px 0 rgba(27,15,0,0.2);

}
.faqs .card i{
    float: right;
    font-size: 20px;
    color: #4a4a4a;
}
.faqs .card .card-header{
    padding: 5%;
    color: #4a4a4a;
    font-size: 18px;
    line-height: 23px;
    font-weight: 500;
    background: #fff;
    border: none;
    border-radius: 3px;
}
.faqs .card .card-body{
    color: #9b9b9b;
    font-size: 18px;
    line-height: 27px;
    padding: 10%;
    background: #fff;
    border-radius: 3px;
}
.car h5{
    color: #fff;
    font-style: italic;
    font-size: 18px;
    line-height: 48px;
    font-weight: 500;
    padding: 5% 20%;
}
.car p{
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    margin-top: 2%;
}
.car small{
    color: #fff;
    /*font-weight: bold;*/
    font-size: 14px;
    line-height: 25px;
    text-transform: uppercase;
}
</style>

<style type="text/css">
    
</style>
