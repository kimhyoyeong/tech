import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'notosans-fontface'
import 'typeface-montserrat'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 라우트 컴포넌트 정의
const home = App.components.Home
const About = App.components.About
const Project = App.components.Project
const ProjectView = App.components.ProjectView

// 라우트 정의
const routes = [
	{path: '/', component: home},
	{path: '/About', component: About},
	{path: '/Project', component: Project},
	{path: '/ProjectView/:id', component: ProjectView}
]

// 라우터 인스턴스 생성
const router = new VueRouter({
	mode: 'history', // history 모드를 사용하면 주소창에 hash가 없어집니다.
	routes // routes: routes 의 약어
})


new Vue({
	render: h => h(App),
	router
}).$mount('#app')
