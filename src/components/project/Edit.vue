<template>
	<div class="container">
		<div class="columns">
			<div class="column">
				<div class="card">
					<div class="card-header">
						<div class="card-header-title">
							<p>Edit Project</p>
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
							<b-button type="is-primary" @click="update(form.id)" expanded>Update</b-button>
						</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ProjectService from '@/api-services/project_service'
	export default{
		name:'ProjectEdit',
		data:()=>{
			return{
				form:{
					id:null,
					name:null,
					start_date:null,
					end_date:null,
					description:null,
				}
			}
		},
		created()
		{
			ProjectService.find(this.$route.params.id).then((response)=>{
				this.form = response.data.project;
			}).catch((error)=>{
				console.log(error);
			});
		},
		methods:{
			update(id){
				ProjectService.update(id,this.form).then((response)=>{
					this.$router.push({
					name:'Home'
					});
					if (response.status === 200) {
				this.$buefy.snackbar.open({
                    duration: 5000,
                    message: 'Success Update Project',
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
</script>