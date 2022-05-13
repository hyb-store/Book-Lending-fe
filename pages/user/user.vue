<template>
	<view class="content">
		<view class="header">
			<view class="userinfo">
				<view class="face">
					<open-data type="userAvatarUrl"></open-data>
				</view>
				<view class="info">
					<view class="username">
						<open-data type="userNickName"></open-data>
					</view>
					<view class="integral">积分:0</view>
				</view>
			</view>
			<!-- <uni-icons @click="" type="gear" size="20" color="#FFFFFF"></uni-icons> -->
		</view>
		<view class="list" v-for="(list, list_i) in severList" :key="list_i">
			<view class="li" v-for="(li, li_i) in list" @click="toPage(li.id)"
				:class="{ noborder: li_i == list.length - 1 }" hover-class="hover" :key="li.name">
				<uni-icons :type="li.icon" size="20" color="#333333"></uni-icons>
				<view class="text">{{ li.name }}</view>
				<uni-icons type="arrowright" size="18" color="#999999"></uni-icons>
				<button class="contactBtn" :open-type="li.openType" v-if="li.openType"></button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				userinfo: {},
				severList: [
					[{
						id: 1,
						name: '个人信息',
						icon: 'compose'
					}, {
						id: 2,
						name: '借书记录',
						icon: 'paperplane'
					}],
					[{
							id: 3,
							name: '我要借出',
							icon: 'personadd'
						},
						{
							id: 12,
							name: '在线客服',
							icon: 'headphones',
							openType: 'contact'
						}
					],
					[{
						id: 21,
						name: '管理',
						icon: 'list'
					}]
				]
			};
		},
		onLoad() {},
		methods: {
			//用户点击列表项
			toPage(id) {
				console.log(id)
				
				switch (id) {
					case 1:
						uni.navigateTo({
							url: '../userInfo/userInfo'
						})
					case 2:
						uni.navigateTo({
							url: '../browsingHistory/browsingHistory'
						});
						break;
					case 3:
						uni.navigateTo({
							url: '../lend/lend'
						});
						break;
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		.header {
			background-color: #ff6364;
			width: 92%;
			height: 30vw;
			padding: 0 4%;
			display: flex;
			align-items: center;

			.userinfo {
				width: 90%;
				display: flex;

				.face {
					flex-shrink: 0;
					width: 15vw;
					height: 15vw;

					image {
						width: 100%;
						height: 100%;
						border-radius: 100%;
					}
				}

				.info {
					display: flex;
					flex-flow: wrap;
					padding-left: 30rpx;

					.username {
						width: 100%;
						color: #fff;
						font-size: 40rpx;
					}

					.integral {
						display: flex;
						align-items: center;
						padding: 0 20rpx;
						height: 40rpx;
						color: #fff;
						background-color: rgba(0, 0, 0, 0.1);
						border-radius: 20rpx;
						font-size: 24rpx;
					}
				}
			}
		}

		.hover {
			background-color: #eee;
		}

		.list {
			width: 100%;
			border-bottom: solid 26rpx #f1f1f1;

			.contactBtn {
				width: 100%;
				height: 100rpx;
				position: absolute;
				left: 0;
				top: 0;
				background-color: transparent;
			}

			.li {
				position: relative;
				width: 92%;
				height: 100rpx;
				padding: 0 4%;
				border-bottom: solid 1rpx #e7e7e7;
				display: flex;
				align-items: center;

				&.noborder {
					border-bottom: 0;
				}

				.text {
					padding-left: 20rpx;
					width: 100%;
					font-size: 28rpx;
					color: #666;
				}

				.to {
					flex-shrink: 0;
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
</style>
