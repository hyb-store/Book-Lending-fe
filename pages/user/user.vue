<template>
	<view class="content">
		<view class="header">
			<view class="userinfo" v-if="isLogin">
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
			<view class="userinfo" v-else>
				<view class="face">
					<image src="../../static/img/头像-男.png" mode=""></image>
				</view>
				<view class="login-btn">
					<view class="username" @click="handleLogin">
						立即登录
					</view>
					<cl-confirm ref="confirm"> </cl-confirm>
				</view>
			</view>
			<!-- <uni-icons @click="" type="gear" size="20" color="#FFFFFF"></uni-icons> -->
		</view>
		<view v-if="isLogin">
			<view class="list" v-for="(list, list_i) in severList" :key="list_i">
				<view class="li" v-for="(li, li_i) in list" @click="toPage(li.id)"
					:class="{ noborder: li_i == list.length - 1 }" hover-class="hover" :key="li.name">
					<uni-icons :type="li.icon" size="20" color="#333333"></uni-icons>
					<view class="text">{{ li.name }}</view>
					<uni-icons type="arrowright" size="18" color="#999999"></uni-icons>
				</view>
			</view>
			<view class="list">
				<view class="log-out" hover-class="hover" @click="handleLogout">
					<uni-icons type="gear" size="20" color="#333333"></uni-icons>
					<view class="text">退出登录</view>
					<uni-icons type="arrowright" size="18" color="#999999"></uni-icons>
				</view>
				<cl-confirm ref="confirm"> </cl-confirm>
			</view>
		</view>
	</view>
</template>
<script>
	import { baseUrl } from '../../common/constant.js'
	export default {
		data() {
			return {
				isLogin: true,
				userinfo: {},
				severList: [
					[{
						id: 1,
						name: '个人信息',
						icon: 'compose'
					}, {
						id: 2,
						name: '借书记录',
						icon: 'list'
					}],
					[{
							id: 3,
							name: '我要借出',
							icon: 'paperplane'
						},
						{
							id: 12,
							name: '我的图书',
							icon: 'shop',
						}
					],
				]
			};
		},
		onLoad() {
			
		},
		onShow() {
			const userInfo = uni.getStorageSync('user_info')
				
			if (!userInfo) {
				this.isLogin = false
			}
		},
		methods: {
			handleLogin() {
				this.$refs["confirm"].open({
					title: "提示",
					message: "确认授权登录？",
				})
				.then(() => {
					this.isLogin = true
					uni.login({
						provider: 'weixin',
						success(res) {
							const code = res.code
							
							uni.request({
								url: baseUrl + 'user/login',
								method: "GET",
								data: {
									code: code
								},
								
								success: (res) => {
									console.log(res)
									let userInfo = res.data.data.user
									uni.setStorageSync("user_info", userInfo)

								}
							})
						}
					})
				})
				.catch(() => {
					// this.$refs.toast.open("已取消登录～");
				});
			},
			handleLogout() {
				this.$refs["confirm"].open({
					title: "提示",
					message: "是否退出登录？",
				}).then(() => {
					uni.clearStorageSync()
					console.log(this.isLogin)
					this.isLogin = false
				}).catch(() => {
					// this.$refs.toast.open("已取消退出登录～");
				});
			},
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
					case 12:
						uni.navigateTo({
							url: '../myBook/myBook'
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
				
				.login-btn {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					padding-left: 30rpx;
					width: 100%;
					color: #fff;
					font-size: 40rpx;
				}

				.info {
					display: flex;
					flex-direction: column;
					padding-left: 30rpx;

					.username {
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

			.log-out {
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
