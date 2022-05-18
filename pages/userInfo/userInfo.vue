<template>
	<view class="manage-wrap">
		<view class="info-wrap">
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-my" :size="35"></cl-icon>
				</view>
				<view class="label">姓名</view>
				<cl-input v-model="username" border="false" class="input" placeholder="(必填)"></cl-input>
			</view>
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
				</view>
				<view class="label">电话</view>
				<cl-input v-model="phone_num" border="false" class="input" placeholder="(必填)"></cl-input>
			</view>
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
				</view>
				<view class="label">邮箱</view>
				<cl-input v-model="email" class="input" border="false"  placeholder="快去完善你的邮箱吧～"></cl-input>
			</view>
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
				</view>
				<view class="label">性别</view>
				<cl-select v-model="gender" :options="list" border="true" class="input"></cl-select>
			</view>
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
				</view>
				<view class="label">地址</view>
				<cl-input v-model="address" border="false" class="input"  placeholder="快去完善你的地址吧～"></cl-input>
			</view>
			<view class="content-wrap">
				<view class="icon">
					<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
				</view>
				<view class="label">角色</view>
				<cl-select v-model="role" :options="list1" border="true" class="input"></cl-select>
			</view>
			<view class="check-wrap">
				<view class="check-title">
					<view class="icon">
						<cl-icon name="cl-icon-pay" :size="35"></cl-icon>
					</view>
					<view class="label">喜欢的书集类型</view>
				</view>
				<cl-checkbox-group v-model="val2" class="check-box">
					<cl-checkbox label="1">编程语言</cl-checkbox>
					<cl-checkbox label="2">数据库</cl-checkbox>
					<cl-checkbox label="3">算法</cl-checkbox>
					<cl-checkbox label="4">计算机系统</cl-checkbox>
					<cl-checkbox label="5">网络编程</cl-checkbox>
					<cl-checkbox label="6">设计模式</cl-checkbox>
					<cl-checkbox label="7">消息队列</cl-checkbox>
				</cl-checkbox-group>
			</view>

			<cl-message ref="message"></cl-message>
			<view class="btn-wrap">
				<cl-button type="primary" size="default" :disabled="isDisabled" @tap="handleSubmit">提交修改</cl-button>
			</view>
			<cl-toast ref="toast"></cl-toast>
		</view>
	</view>
	
</template>

<script>
import { baseUrl } from '../../common/constant.js'
export default {
	data () {
		return {
			isDisabled: true,
			username: "",
			phone_num: "",
			email: "",
			gender: 2,
			address: "",
			role: 2,
			val2: [],
			list: [
				{
					label: "保密",
					value: 2
				},
				{
					label: "男",
					value: 1
				},
				{
					label: "女",
					value: 0
				}
			],
			list1: [
				{
					label: "学生",
					value: 0
				},
				{
					label: "教师",
					value: 1
				},
				{
					label: "保密",
					value: 2
				},
			]
		}
	},
	computed: {
		listenChange () {
			const { username, phone_num } = this
			if(username !== "" && phone_num !== "") {
				return true
			} else {
				return false
			}
		}
	},

	watch: {
		listenChange (value) {
			value ? this.isDisabled = false : this.isDisabled = true
		}
	},

	methods: {
		initInfo () {
			const userInfo = uni.getStorageSync("user_info")
			userInfo.username !== null ? this.username = userInfo.username : ''
			userInfo.address !== null ? this.address = userInfo.address : ''
			userInfo.email !== null ? this.email = userInfo.email : ''
			userInfo.phoneNum !== null ? this.phone_num = userInfo.phoneNum : ''
			userInfo.gender !== 2 ? this.gender = userInfo.gender : ''
			userInfo.role !== 2 ? this.role = userInfo.role : ''
 	  },
  
		handleSubmit () {
			this.isDisabled = true
			const userId = uni.getStorageSync('user_info').openId
			const data = {
				openId: userId,
				username: this.username,
				phoneNum: this.phone_num,
				address: this.address,
				email: this.email,
				gender: this.gender,
				role: this.role,
			}
			
			uni.request({
				url: baseUrl + 'user/perfect',
				data,
				method: "POST",
				success:(res)=> {

					if (res.data.status === 1) {
						this.$refs["toast"].open({
							message: "修改成功～",
							icon: "success",
							position: "middle",
							duration: 1000,
						});
						uni.setStorageSync('user_info', res.data.data)
						this.isDisabled = false
					}
				}
			})
			
		}
	},
	onShow () {
		this.initInfo()
	}
}
</script>

<style lang="scss">
	.manage-wrap {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		background-color: #eee;
		.info-wrap {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
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
			
			.check-wrap {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				background-color: #fff;
				width: 96%;
				margin-top: 1vh;
				.check-title {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					height: 60rpx;
					border-bottom: 1rpx solid #eee;
					.icon {
						padding: 0 20rpx;
					}
					.label {
						font-size: 35rpx;
						padding: 0 30rpx 0 0;
					}
				}
				.check-box {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: flex-start;
					flex-wrap: wrap;
					height: 120rpx;
				}
			}
			.btn-wrap {
				margin-top: 20vh;
			}
		}
		
	}
	
</style>
