<template>
	<view class="manage-wrap">
		<view class="info-wrap">
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-my" :size="35"></cl-icon>
				</view>
				<view class="label">姓名</view>
				<cl-input border="false" class="input"></cl-input>
			</view>
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
				</view>
				<view class="label">电话</view>
				<cl-input border="false" class="input"></cl-input>
			</view>
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
				</view>
				<view class="label">邮箱</view>
				<cl-input class="input">
					<text slot="append">.com</text>
				</cl-input>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.manage-wrap {
		overflow: hidden;
		background-color: #eee;
		.info-wrap {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			width: 94vw;
			height: 94vh;
			margin: 1vh 3vw;
			.content-wrap {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				margin-top: 1vh;
				height: 86rpx;
				background-color: #fff;
			}
			.label {
				font-size: 35rpx;
				padding: 0 30rpx 0 0;
			}
			.input {
				width: 65vw;
				padding-right: 20rpx;
			}
			.icon {
				padding: 0 20rpx;
			}
		}
	}
	
</style>
