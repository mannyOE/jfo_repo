<template>
    <div class="container row">
        <div class="col-xs-12 col-lg-4"></div>
        <div class="col-xs-12 col-lg-6 text-center">
            <h2>Please Fill out the form</h2>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                        <label for="name" class="pull-left">Full Name</label>
                        <el-input v-model="volunteer.name" placeholder="Full Name Here" id="name"></el-input>
                    </div>
                    <div class="form-group">
                        <label for="phone" class="pull-left">Your Phone Number</label>
                        <el-input v-model="volunteer.phone" placeholder="Full Phone Number Here" id="phone"></el-input>
                    </div>
                    <div class="form-group">
                        <label for="email" class="pull-left">Your Email</label>
                        <el-input v-model="volunteer.email" placeholder="Full Name Here" id="email"></el-input>
                    </div>
                    <div class="form-group">
                        <label for="why" class="pull-left">What is your address?</label>
                        <el-input v-model="volunteer.address" placeholder="Address Here" id="why"></el-input>
                    </div>
                    <div class="form-group">
                        <el-button native-type="submit" type="success">Submit</el-button>
                    </div>
            </form>
        </div>
        <div class="col-xs-12 col-lg-3"></div>   
        <el-dialog
            :visible.sync="success"
            width="350px"
            @close="success = false">
            <h2 class="text-center">Submitted Successfully</h2>
            <p class="text-center">We appreciate your interest in volunteering to join us.
            Someone will get back to you within the day.
            Once again, Thank you.</p>
            <span slot="footer">
                <el-button @click="success = false">Close</el-button>
            </span>
        </el-dialog>
             
    </div>
</template>

<script>
	import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    data(){
        return {
            volunteer: {},
            success: false
        }
    },
    methods: {
        ...mapActions('volunteer', ['submit']),
        submitForm(){
            
            this.submit(this.volunteer)
            .then((result)=>{
                if(result.status){
                    this.success = true;
                }
            })
        }
    }
}
</script>

