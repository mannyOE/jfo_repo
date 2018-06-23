<template>
	<div class="container">
		<h3>CHANGE HOME PAGE CONTENTS</h3>

		<div class="col-xs-6">
		  <h2>Existing Contents
		  	<el-button type="button" class="success pull-right" @click="createNew" v-html="editable?close:add">
		  	</el-button>
		  </h2>
		  <table class="table table-hover">
		    <thead>
		      <tr class="text-center">
		        <th class="text-center">Title</th>
		        <th class="text-center">Actions</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr v-for="(item, index) in content" :key="index">
		        <td><p class="text-truncate">{{item.title}}</p></td>
		        <td>
		        	<el-tooltip content="Preview" placement="bottom" effect="light">
						<el-button type="button" size="small" @click="previewContent(item)">
							<span class="fa fa-eye"></span>
						</el-button>
					</el-tooltip>
					<el-tooltip content="Edit" placement="bottom" effect="light">
						<el-button type="button" size="small" @click="editContent(item)">
							<span class="fa fa-edit"></span>
						</el-button>
					</el-tooltip>
					<el-tooltip content="Delete" placement="bottom" effect="light">
						<el-button type="button" size="small" @click="deleteCont(item)">
							<span class="fa fa-trash-o"></span>
						</el-button>
					</el-tooltip>
					
		        </td>
		      </tr>
		      <tr>
		      	<td colspan="2" class="text-center" v-if="content.length < 1">
		      		No Content Found
		      	</td>
		      </tr>
		    </tbody>
		  </table>
		</div>


		<div class="col-xs-6" v-if="editable" style="padding-bottom: 50px;">
			<div class="form-group">
				<label for="heading">Title</label>
				<el-input id="heading" v-model="singleContent.title"></el-input>
			</div>
			<div class="form-group">
				<label for="body">Content Body</label>
				<wysiwyg v-model="singleContent.body" />
			</div>
				<el-upload
					ref="upload" :auto-upload="false"
				  class="upload-demo" :file-list="fileList" :on-remove="handleRemove"
				  :action="getAction" :on-success="nextStage"
				  multiple :on-change="hasExceeded">
				  <el-button slot="trigger" size="small" type="primary" :disabled="notExceeded">Select File</el-button>
				  <el-button size="small" type="primary" @click="submitUpload">Save Changes</el-button>
				  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
				</el-upload>
		</div>
		<el-dialog
			title="Preview Item"
			:visible.sync="preview"
			width="60%"
			@close="preview = false">
			
			<div class="row" v-if="preview">
				<div class="col-xs-6">
					<h2 v-html="singleContent.title"></h2>
					<div v-html="singleContent.body"></div>
				</div>
				<div class="col-xs-6" v-if="singleContent.photo">
					<img :src="$API+'contents/'+singleContent.photo" width="300px">
				</div>
			</div>
			<span slot="footer">
				<el-button @click="preview = false">Close</el-button>
			</span>
		</el-dialog>
		

	</div>
</template>

<script type="text/javascript">
	import { mapGetters, mapActions, mapMutations } from 'vuex'
	export default {
		components: {

		},
		data(){
			return {
				editable: false,
				add: "<i class='fa fa-plus'></i> Add",
				close: "<i class='fa fa-minus'></i> Close",
				notExceeded: false,
				fileList: [],
				preview: false,
			}
		},
		mounted(){
			// this.fetchData();
		},
		methods: {
			...mapActions('cmsLanding', ['setSingContent','getContent','createContent','updateContent','deleteContent']),
			fetchData(){
				var args = {
					page: 'landing'
				};
				this.getContent(args).then(res=>{
					console.log(res);
				})
			},
			hasExceeded(file, fileList){
				if(fileList.length >= 1){
					this.notExceeded = true;
				}else{
					this.notExceeded = false;
				}
			},
			nextStage(response, file, fileList){
				console.log(response);
				debugger;
	        	if(!this.singleContent.id){
			        	this.singleContent.id = new Date().getTime();
			        	this.singleContent.page = 'landing';
			        	this.singleContent.op = 1;
	        		}else{
	        			this.singleContent.op = 2;
	        		}
	        		// this.single.photo = '';
		        	this.singleContent.photo = response.file;
		        	this.updateContent(this.singleContent).then(()=>{
		        		this.fetchData();
						this.setSingContent({});		        		
		        	});
	        },
			handleRemove(file, fileList){
				console.log(fileList);
				
				if(fileList.length >= 1){
					this.notExceeded = true;
				}else{
					this.notExceeded = false;
				}
			},
			editContent(item){

				this.setSingContent(item);
				this.editable = true;
			},

			previewContent(item){

				this.setSingContent(item);
				this.preview = true;
			},
			deleteCont(item){
				var args = {
					id: item.id,

				};
				if(item.photo.length > 0){
					args.photo = item.photo
				}
				this.deleteContent(args).
				then(res=>{
					if(res.status){
						var indie = this.content.indexOf(item)
						this.content.splice(indie, 1);
					}
				})
			},
			submitUpload() {
		       if(this.$refs.upload.uploadFiles.length > 0){
		        	this.$refs.upload.submit();
	        	}else{
	        		if(!this.singleContent.id){
			        	this.singleContent.id = new Date().getTime();
			        	this.singleContent.page = 'landing';
			        	this.singleContent.op = 1;
	        		}else{
	        			this.singleContent.op = 2;
	        		}
	        		// this.single.photo = '';
		        	this.updateContent(this.singleContent).then(()=>{
		        		this.fetchData();
		        		this.setSingContent({});
		        		console.log(this.singleContent);		        		
		        	});
	        	}
		    },
			createNew(){
				// if(this.editable){
				// 	this.setSingContent({});
				// }
					
				// this.setSingContent({});
				this.editable = !this.editable;
			}

		},
		computed: {
			...mapGetters('cmsLanding', ['singleContent','content','success','error','errorMsg','successMsg','status']),
			getAction(){
				if(this.singleContent.photo){
					return this.$API+'cms/saveImage/'+this.singleContent.photo;
				}else{
					return this.$API+'cms/saveImageInitial'
				}
			}
		}
	}
</script>

<style type="text/css">
	input.el-upload__input {
		display: none !important;
	}
	li.el-upload-list__item.is-ready{
		height: 25px !important;
	}
	.text-truncate {
	width: 260px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

}
</style>