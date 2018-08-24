<template>
	<main>
		<section>
			<div class="inner-content">
				<!--<div class="project-view">
					<h3 class="title">{{this.propsdata[this.selectedItem].title}}</h3>
					<div class="description">
						<p>{{this.propsdata[this.selectedItem].des}}</p>
					</div>
					<div class="button-box">
						<a href="#" class="button" v-if="this.propsdata[this.selectedItem].pc!=''">PC <i class="fas fa-link"></i></a>
						<a href="#" class="button" v-if="this.propsdata[this.selectedItem].moblie!=''">Moblie <i class="fas fa-link"></i></a>
					</div>
				</div>-->
				
				<input type="radio" id="radio" name="name"><label for="radio">선택</label>
				<input type="checkbox" id="checkbox"><label for="checkbox">선택</label>

			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
	
	input[type='radio'], input[type='checkbox']{
		width:0;height:0;
		opacity:0;
		&+label{
			vertical-align:middle;
		}
		&+label:before{
			content:'';
			display:inline-block;
			width:20px;height:20px;
			background:url('//gscdn.hackers.co.kr/champ/img/event/layer/input_sp.png') no-repeat;
		}
	}
	input[type='radio']{
		&:checked+label:before{
			background-position:-22px -22px;
		}
	}
	input[type='checkbox']{
		&:checked+label:before{
			background-position:0 -22px;
		}
	}
	

	/*input[type='checkbox']{
		position:relative;
		opacity:0;
		&+label:before{
			content:'';
			display:inline-block;
			width:20px;height:20px;
			background:#fff;
			border:1px solid #c9c9c9;
			vertical-align:middle;
			box-sizing:border-box;
		}
		&:checked+label:before{
			background:#395cc1;
		}
		&:checked+label:after{
			content:'';
			position:absolute;top:5px;left:5px;
			width:8px;height:5px;
			transform:rotate(-45deg);
			border:{
				width:0 0 2px 2px;
				style:solid;
				color:#fff;
			}
		}
	}*/
	/*input[type="radio"], input[type="checkbox"]{
		position:absolute;
		top:-9999;
		opacity:0;
		& + label{
			vertical-align:middle;
		}
	}
	input[type="radio"] + label:before,
	input[type="checkbox"] + label:before{
		content:'';
		width:26px;
		height:20px;
		border:2px solid #45555F;
		font-size:24px;
		display:table-cell;
		text-align:center;
		padding:0 2px;
	}
	input[type="radio"]:checked + label:before,
	input[type="checkbox"]:checked + label:before{
		content:'';
		font-size:24px;
		width:26px;
		height:20px;
		text-align:center;
		display:table-cell;
		padding:0 2px;
		border:2px solid #45555F;
		color:#8EC549;
	}*/
	
	section{
		.inner-content{
			padding:5%;
			box-sizing:border-box;
			text-align:left;
		}
	}
	.button-box{
		.button{
			margin-right:.5rem
		}
		
	}
	
	
</style>

<script>
export default {
	props: ['propsdata', 'selectedItem']
}
</script>

