<template>
	
<div class="" v-if="exist">
    <div class="row" >
        <div class="col-md-12 ">
            <div class="container" >
                <div class="text-center" style="margin-top: 5%;">
                    <h4 class="headd">Our Pricing</h4>
                    <p class="headdd" style="margin-top: +2%">
                        We offer a flexible pricing structure tailored specifically to your business needs.
                        Choose your plan that best suits your business needs.
                    </p>
                    <div class="btn-group bg-base-2" style="margin-top: 4%;">
                        <button class="btn bg-base-2 btn-default" :class="{'activeItem': plan==='1'}" @click="plan = '1'">
                            Monthly
                        </button>
                        <button class="btn bg-base-2 btn-default" :class="{'activeItem': plan==='2'}" @click="plan = '2'">
                            Quarterly
                        </button>
                        <button class="btn bg-base-2 btn-default" :class="{'activeItem': plan==='3'}" @click="plan = '3'">
                            Yearly
                        </button>
                    </div>
                </div>

                <div class="row" style="margin-top: +2%; margin-left: +3%;">

                    <div class="col-xs-12 col-md-4"  v-for="(plon, index) in pricingDiam" :key="index" >
                        <div class=" tabs" style="background: rgba(212,175,63,0.1);">
                            <h6>{{plant.find(e=>e.value==plon.plan).label}}</h6>
                            <h5>₦ {{plon.price}} <small v-html="tariff(plon.package)"></small></h5>
                            <div class="benefits text-center" v-html="plon.features">
                                
                            </div>
                            <a class="btn btn-default get-s" href="http://app.nester.com.ng/signup">Get Started</a>
                            
                        </div>

                    </div>
                    


                    

                </div>

            </div>

        </div>

        <div class="col-md-12 bg-base-2 alpha-8" >
            <div class="container " >
                <div style="margin-top: 50px;" class="text-center">
                    <h5 style="font-size: 28px;line-height: 39px; color: #fff; font-weight: 600;">
                        Over 300 businesses rely on Nester for delivery tracking
                    </h5>

                    <div class="row" style="margin-top: 30px; margin-left: +2%;" >
                        <div class="col-md-6 col-xs-12 text-center" v-for="(each, index) in tesoCont" :key="index">
                            <div class="box" >
                                <img :src="$API+'contents/'+each.photo"  width="20%" class="center-block" style="margin-bottom: 9%;">
                                <h6 style="color: #fff" v-html="JSON.parse(each.title).title"></h6>
                                <p style="color: #fff" class="text-center">{{JSON.parse(each.title).affiliation}}</p>
                                <small style="color: #fff" v-html="each.body">
                                </small>
                            </div>
                        </div>
                        

                    </div>

                </div>
            </div>
        </div>
        <div class="col-xs-12">
            <h4 class="text-center" style="margin-top: 8%; color: #1b0f00; font-size: 36px; line-height: 44px;"> Frequently Asked Questions </h4>

            <div class="col-md-12" style="margin-top: 5%; margin-bottom: 5%;">
                <div class="container" >
                    <div class="row" >
                        
                        <div class="col-md-6 col-xs-12 col-lg-6 faqs" v-if="exist" >
                            <div class="card" v-for="(content, index) in allContent.first" :key="index">
                                <div class="card-header collapsed"  data-toggle="collapse" :data-target="'#first'+index" >
                                    <h5 class="mb-0">
                                        <span v-html="content.title"></span>
                                        <small class="" >
                                            <i class="ion-chevron-down" ></i>
                                        </small>
                                    </h5>
                                </div>
                                <div :id="'first'+index" class="collapse"  >
                                    <div class="card-body" v-html="content.body">
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                        <div class="col-md-6 col-xs-12 col-lg-6 faqs" v-if="exist" >
                            <div class="card" v-for="(content, index) in allContent.second" :key="index">
                                <div class="card-header collapsed"  data-toggle="collapse" :data-target="'#second'+index" >
                                    <h5 class="mb-0">
                                        <span v-html="content.title"></span>
                                        <small class="" >
                                            <i class="ion-chevron-down" ></i>
                                        </small>
                                    </h5>
                                </div>
                                <div :id="'second'+index" class="collapse"  >
                                    <div class="card-body" v-html="content.body">
                                    </div>
                                </div>
                            </div>

                            

                        </div>
                    </div>

                </div>
            </div>
        </div>



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
                plan: '1',
                plant: [{label:'Starter', value: '1'},{label:'Business', value: '2'},{label:'Enterprise', value: '3'}],
			}
		},
		mounted(){
			this.fetchData();
		},
		methods: {
			...mapActions('cmsLanding', {landingGet: 'getContent'}),
			fetchData(){
				var args = {
					page: 'faqs'
				};
				this.landingGet(args).then(res=>{
                    this.fetchPricingData();
				})
            },
            ...mapActions('cmsPricing', {pricingGet: 'getContent'}),
            ...mapActions('cmsTest', {testGet: 'getContent'}),
			fetchPricingData(){
				var args = {
					page: 'landing'
				};
				this.pricingGet(args).then(res=>{
					this.fetchTestData();
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
            tariff(plan){
                if(plan=='1'){
                    return '/MO';
                }
                if(plan=='2'){
                    return '/QTR';
                }
                if(plan=='3'){
                    return '/YR'
                }
            },
            html(fr){
                
                // console.log(fr.replace(/<[^>]+>/g, '\n'));
                var init = fr.replace(/<[^>]+>/g, '\n');
               
                return init.replace(/\n/g, "<br/>");             
            }
            
			
			

		},
		computed: {
            ...mapGetters('cmsLanding', {landingContent:'content'}),
            ...mapGetters('cmsPricing', {pricingContent: 'content'}),
             ...mapGetters('cmsTest', {testContent: 'content'}),
			allContent(){
                if(this.landingContent){
                    var length = this.landingContent.length;
                    var half = Math.floor(length/2);
                    var fola = {};
                    fola.first = this.landingContent.slice(0, half);
                    fola.second = this.landingContent.slice(half, length);

                    return fola;
                }
            },
            pricingDiam(){
                var fr = this.pricingContent.filter(e=>e.package==this.plan);
                return fr.sort((a, b)=>{a.id-b.id})
            },
            tesoCont(){
                if(this.testContent){
                    return this.testContent.slice(0,2);
                }
            },
            
		}
	}
</script>


<style scoped>
ul li{
    list-style-type: none !important;
}
body{
    width: 100% !important;
    height: 100%;
    margin: auto;
    
}

.activeItem {
    background-color: #fff !important;
    color: #000 !important;
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
    color: #fff;
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
.h44{
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
    margin-top: 5%;
    padding: 2%;
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
    
    padding-bottom: 4%;
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
    padding: 0% 12%;
    

}
.benefits span{
    font-size: 16px !important;
    color: #9b9b9b !important;
    line-height: 24px !important;
}
.benefits ul {
    list-style-type: none !important;
    font-size: 16px !important;
    color: #9b9b9b !important;
    line-height: 14px !important;
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
    height: 300;
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
    border: transparent !important;
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

<style>
.benefits div, .benefits span {
    font-size: 16px;
    color: #9b9b9b;
    line-height: 24px;
}
</style>
