<template>
	<div class="container">
		<div class="columns is-multiline">
			<div class="column is-one-third" v-for="(project,index) in projects" :key="index" @new-projects="newProjects">
				<div class="card">
					<div class="card-header">
						<div class="card-header-title is-centered">
							<p>{{ project.name }}</p>
						</div>
					</div>
					<div class="card-content">
						<b>Description :</b>
						<p>{{ project.description }}</p>
						<b>Timeline : </b>
						<br>
						<time datetime="2016-1-1">{{ project.start_date }} - {{ project.end_date  }}</time>
					</div>
					<div class="card-footer">
						<router-link :to="{name:'project.edit',params:{id:project.id}}" class="card-footer-item has-background-dark has-text-white">Edit</router-link>
						<div class="card-footer-item has-background-danger has-text-white" @click="confirmation(project.id,index)">Delete</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ProjectServices from '@/api-services/project_service';
	export default{
		name:'Home',
		data:()=>{
			return{
			projects:[]
			}
		},
		methods:{
			newProjects(project)
			{
				this.projects.push(project);
			},
			confirmation(id,index)
			{
				this.$buefy.dialog.confirm({
                    title: 'Deleting Project',
                    message: 'Are you sure you want to <b>delete</b> this project? This action cannot be undone.',
                    confirmText: 'Delete Project',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () =>{ 
                    this.deleteProject(id,index);
                    }
                });
			},
			deleteProject(id,index)
			{
				ProjectServices.delete(id).then((response)=>{
					if (response.status == 200) {
						this.$delete(this.projects,index);
					this.$buefy.notification.open({
                    duration: 5000,
                    message: `Delete Project Success`,
                    position: 'is-top-right',
                    type: 'is-success',
                })
				}else{
					this.$buefy.notification.open({
                    duration: 5000,
                    message: `Failed Delete Project`,
                    position: 'is-top-right',
                    type: 'is-danger',
                })
				}
					
				}).then((error)=>{
					console.log(error);
				})
			}
		},
		mounted()
		{
			ProjectServices.getAll().then((response)=>{
				this.projects = response.data.projects;
			}).catch((error)=>{
				console.log(error);
			});
		}
	}
</script>

<style>
	.container{
		padding:10px;
	}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
transform: translateX(10px);
  opacity: 0;
}
</style>