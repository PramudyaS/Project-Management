<template>
	<div class="container">
		<div class="columns">
			<div class="column">
				<div class="card">
					<div class="card-header">
						<div class="card-header-title">
							<p>Create New Project</p>
						</div>
					</div>
					<div class="card-content">
						<form>
							<b-field label="Name">
								<b-input v-model="form.name"></b-input>
							</b-field>
							<b-field label="Start Date">
								<b-input type="date" v-model="form.start_date"></b-input>
							</b-field>
							<b-field label="End Date">
								<b-input type="date" v-model="form.end_date"></b-input>
							</b-field>
							<b-field label="Description">
								<b-input type="textarea" v-model="form.description"></b-input>
							</b-field>
							<div class="buttons">
								<b-button type="is-primary" @click="store" expanded>Submit</b-button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	import ProjectService from '@/api-services/project_service';
	export default{
		name:'ProjectCreate',
		data:()=>{
			return{
				show:false,
				isActive:false,
				isSuccess:false,
				form:{
					name:null,
					start_date:null,
					end_date:null,
					description:null
				}
			}
		},
		methods:{
			store()
			{
				if (!this.form.name || !this.form.start_date || !this.form.end_date || !this.form.description) {
					this.$buefy.notification.open({
                    duration: 5000,
                    message: `Fill All Form Before Submit Data`,
                    position: 'is-top-right',
                    type: 'is-danger',
                })
				}else{
				ProjectService.store(this.form).then((response)=>{
				this.$emit('newProjects',response.data.project);
				this.$router.push({
					name:'Home'
				});
				if (response.status === 200) {
				this.$buefy.snackbar.open({
                    duration: 5000,
                    message: 'Success Add New Project',
                    type: 'is-success',
                    position: 'is-bottom-left',
                    actionText: 'Detail',
                    queue: false,
                    onAction: () => {
                        this.$buefy.toast.open({
                            message: 'Action pressed',
                            queue: false
                        })
                    }
                });
					}
				}).catch((error)=>{
					console.log(error);
				});
				}
			}
		}
	}
</script>
