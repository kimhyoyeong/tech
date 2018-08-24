<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view class="view" v-bind:propsdata="projectList, selectedItem" @viewPage="viewPage"></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Home from './components/home.vue'
import About from './components/about.vue'
import Project from './components/project.vue'
import ProjectView from './components/projectView.vue'
import json from './data/data.json'

export default {
	data() {
		return {
			projectList: [],
			selectedItem: 0
		}
	},
	methods:{
		viewPage(project){
			this.selectedItem = project.id;
			this.$router.push('/ProjectView/${this.selectedItem}');
		}
	},
	components: {
		'Header': Header,
		'Footer': Footer,
		'Home': Home,
		'About': About,
		'Project': Project,
		'ProjectView': ProjectView
	},
	created() {
		if (json.projects.length > 0) {
			for (var i = 0; i < json.projects.length; i++) {
				this.projectList.push(json.projects[i]);
			}
		}
	},
	beforeRouteUpdate (to, from, next) {
		const toDepth = to.path.split('/').length
		const fromDepth = from.path.split('/').length
		this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		next()
	}
}
</script>
<style lang="scss" src="./styles/common.scss"></style>
