<template>
	<view class="content">
		<view class="user_list" v-for="(item, index) in userList" :key="index">
			<view class="avator_img"><image :src="item.avatar || '../../static/img/logo4.png'" mode=""></image></view>
			<view class="info_box">
				<view class="line">昵称：{{ item.nickName || '未授权' }}</view>
				<view class="line" :style="item.role == 1 || item.role == 2 ? 'color:red' : ''">角色：{{ item.roleName }}</view>
				<view class="line">创建时间：{{ item.createTime }}</view>
			</view>
			<view class="action_box" @click="handleSet(item)" v-if="item.role != 1">{{ item.role ? '取消管理员' : '设为管理员' }}</view>
		</view>
		<navigator url="./addBook"><uni-fab horizontal="right"></uni-fab></navigator>
	</view>
</template>

<script>
var _self;
import timeFormat from '../../common/timeFormat.js';
export default {
	data() {
		return {
			userList: []
		};
	},
	computed: {},
	onPullDownRefresh() {},
	onReachBottom() {},
	onLoad(options) {
		_self = this;
		uniCloud.callFunction({
			name: 'getAllUser',
			success(res) {
				_self.userList = res.result.data;
				_self.userList.forEach(item => {
					if (item.createTime) {
						item.createTime = timeFormat(item.createTime, 'yyyy-mm-dd hh:MM:ss');
					}
				});
			}
		});
	},
	methods: {
		handleSet(item) {
			if (item.role) {
				uni.showModal({
					title: '提示',
					content: '确定取消管理员吗',
					success(res) {
						uniCloud.callFunction({
							name: 'setAdmin',
							data: {
								id: item.openid,
								role: ''
							},
							success(res) {
								_self.userList = res.result.data;
								uni.showToast({
									title: '取消成功',
									icon: 'none'
								});
							}
						});
					}
				});
			} else {
				uni.showModal({
					title: '提示',
					content: '确定设置为管理员吗',
					success(res) {
						uniCloud.callFunction({
							name: 'setAdmin',
							data: {
								id: item.openid,
								role: 2
							},
							success(res) {
								_self.userList = res.result.data;
								uni.showToast({
									title: '设置成功',
									icon: 'none'
								});
							}
						});
					}
				});
			}
		}
	}
};
</script>

<style lang="scss">
.content {
	.user_list {
		width: 100%;
		padding: 24rpx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #999999;
		.avator_img {
			width: 15%;
			text-align: center;
			image {
				width: 60rpx;
				height: 60rpx;
				border-radius: 50%;
			}
		}
		.info_box {
			width: 60%;
			font-size: 28rpx;
			color: #333333;
		}
		.action_box {
			text-align: center;
			font-size: 30rpx;
			color: #333333;
			width: 25%;
		}
	}
}
</style>
