<template>
	<main>
		<section>
			<div class="inner-content">
				<strong class="sub-title">MY EXPERIENCE</strong>
				<h2 class="main-title tracking-in-contract-bck-top">About me</h2>
				<div class="description fade-in-bottom">
					<p>
						89명의 남측 이산가족과 동반 가족 등 197명은 금강산 온정각에서<br> 점심을 먹고 숙소인 금강산호텔과 외금강호텔에 <br>
						여장을 푼 뒤 오후 3시부터 금강산호텔에서 <br>북측 가족 185명과 감격의 상봉을 한다. 분단 이후 만날 수 없었던 남북의 가족이 <br>
					</p>
				</div>
				<div class="link-box fade-in-bottom">
					<ul>
						<li><a href="mailto:kimhyo0089@gmail.com"><i class="fas fa-envelope"></i> kimhyo0089@gmail.com</a></li>
						<li><a href="https://github.com/kimhyoyeong/" target="_blank"><i class="fab fa-github"></i> https://github.com/kimhyoyeong</a></li>
						<li><i class="fas fa-phone"></i> 010.5632.2473</li>
					</ul>
				</div>
				
				<div class="button-box">
					<router-link to="Project" class="button">view project <i class="fas fa-arrow-right"></i></router-link>
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
	
	.parallax-item{
		position:absolute;top:0;right:35%;
		font-size:10rem;
	}
	.link-box{
		margin-top:1rem;
		li{
			margin-top:.5rem;
			font-size:.8rem;
		}
	}
</style>
