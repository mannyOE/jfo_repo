import Vue from 'vue'
import Router from 'vue-router'


// Landing Pages
import LandingLayout from '@/components/landing/Layout'
import Testimonials from '@/components/landing/testimonials'
import Main from '@/components/landing/indexPage'
import Pricing from '@/components/landing/pricing'
import ContactSales from '@/components/landing/contact_sales'
import Features from '@/components/landing/features'
import Blog from '@/components/landing/blog'
import BlogSingle from '@/components/landing/blog_single'

// End Landing Pages



import store from '@/store'

// import axios from 'axios'

// axios.defaults.baseURL = 'http://178.62.51.68:3000/';

Vue.use(Router);
// Vue.use(VueAxios, axios);
 
export default new Router({

	mode: 'history',
	routes: [
	    
		{
			path: '/',
			name: 'Home',
			redirect: {name: 'home-page'},
			component: LandingLayout,
			children: [
				{
					path: '',
					name: 'home-page',
					component: Main
				},
				{
					path: 'features',
					name: 'features',
					component: Features
				},
				{
					path: 'pricing',
					name: 'pricing',
					component: Pricing
				},
				{
					path: 'blog',
					name: 'blog',
					component: Blog
				},
				{
					path: 'blog/single/:id/:title',
					name: 'blog-single',
					component: BlogSingle
				},

				{
					path: 'what-our-customers-are-saying',
					name: 'stories',
					component: Testimonials
				},
				{
					path: 'contact-sales',
					name: 'sales',
					component: ContactSales
				},
			]
		},
		
	    
  	]
});
