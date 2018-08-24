<template>
	<main>
		<section>
			<div class="inner-content">
				<strong class="sub-title">MY EXPERIENCE</strong>
				<h2 class="main-title tracking-in-contract-bck-top">STUDIO</h2>
				<div class="description fade-in-bottom">
					<p>
						89명의 남측 이산가족과 동반 가족 등 197명은 금강산 온정각에서<br> 점심을 먹고 숙소인 금강산호텔과 외금강호텔에 <br>
					</p>
				</div>
				<div class="button-box">
					<router-link to="About" class="button">About me <i class="fas fa-arrow-right"></i></router-link>
				</div>
				<div class="project-list">
					<ul>
						<li v-for="(project, index) in propsdata" v-bind:key="project.id">
							<a href="#" @click.prevent="viewPage(project, index)">
								<div class="img-box">
									<img v-bind:src="project.imgSrc" v-bind:alt="project.alt"></div>
								<div class="txt-box">
									<strong>{{ project.title }} /</strong> {{ project.title }}
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	section{
		.inner-content{
			padding:5%;
			box-sizing:border-box;
			text-align:left;
		}
	}
	
	.project-list{
		margin-top:1rem;
		animation:fade-in-bottom 1s;
		li{
			float:left;
			position:relative;
			width:23%;
			margin-bottom:2%;
			margin-right:2%;
			
			&:nth-child(4n){
				margin-right:0;
			}
		}
		
		.img-box{
			overflow:hidden;
			position:relative;
			box-shadow:0 20px 40px rgba(0, 0, 0, 0.2);
			
			img{
				display:block;
				width:100%;
				transform:scale(1.2);
				transition:transform .5s;
			}
			&.active img, &:hover img{
				transform:scale(1);
				transition:transform .5s;
			}
			&:after{
				content:'';
				position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;
				background:#000;opacity:0.5;
				transition:all .5s;
			}
			&.active:after, &:hover:after{
				opacity:0;
				transition:all .5s;
			}
			
		}
		
		.txt-box{
			margin-top:.5rem;
			font-size:.8rem
		}
	}
	
	@media (min-width:320px) and (max-width:1023px){
		section{
			.inner-content{
				padding:60px 20px;
			}
		}
		.project-list{
			li{
				width:48%;
			}
		}
	}
</style>

<script>

export default {
	props: ['propsdata', 'selectedItem'],
	
	methods: {
		viewPage(project){
			this.$emit('viewPage',  project);
		}
	}
}
</script>