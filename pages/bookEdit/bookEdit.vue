<template>
	<view class="form-wrap">
		<cl-form ref="form" :model.sync="form" label-width="120rpx" class="form-item">
			<cl-form-item prop="bookName" label="书名">
				<cl-input :border="true" v-model="form.bookName" style="width: 600rpx;" placeholder="(必填)"></cl-input>
			</cl-form-item>
			<cl-form-item prop="author" label="作者">
				<cl-input :border="true" v-model="form.author" style="width: 600rpx;" placeholder="(必填)"></cl-input>
			</cl-form-item>
			<cl-form-item prop="press" label="出版社">
				<cl-input :border="true" v-model="form.press" style="width: 600rpx;" placeholder="(必填)"></cl-input>
			</cl-form-item>
			<cl-form-item prop="description" label="描述">
				<cl-textarea :border="true" v-model="form.description" style="width: 600rpx;" placeholder="(必填)"></cl-textarea>
			</cl-form-item>
			<cl-form-item prop="pubTime" label="出版时间">
				<cl-select :border="true" v-model="form.pubTime" mode="date" style="width: 600rpx;"></cl-select>
			</cl-form-item>
			<cl-form-item prop="tid" label="类型">
				<cl-select :border="true" v-model="form.tid" :options="typeList" style="width: 600rpx;"></cl-select>
			</cl-form-item>
		</cl-form>
		<view class="oper">
			<cl-button type="success" size="default" :disabled="isDisabled" @tap="handleOnSubmit">提交</cl-button>
		</view>
		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
	import { baseUrl } from '../../common/constant.js'
	import  { timeFormat }  from '../../common/timeFormat.js'

	export default {
		data() {
			return {
				bid: "",
				isDisabled: false,
				form: {
					bookName: "",
					author: "",
					pubTime: "",
					tid: 1,
					press: "",
					description: ""
				},
				oldBookInfo: {},
				typeList: [{
						value: 1,
						label: "编程语言"
					},
					{
						value: 2,
						label: "数据库"
					},
					{
						value: 3,
						label: "算法"
					},
					{
						value: 4,
						label: "计算机系统"
					},
					{
						value: 5,
						label: "网络编程"
					},
					{
						value: 6,
						label: "设计模式"
					},
					{
						value: 7,
						label: "消息队列"
					},
				]
			}
		},

		onLoad(options) {
			const { bid } =options
			this.bid = bid
			this.getBookInfo(bid)
		},
		
		computed: {
			listenChange () {
				const { bookName, author, press, description } = this.form
				if(
					bookName !== "" &&
					author !== "" &&
					press !== "" &&
					description !== ""
				) {
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
			getBookInfo(bid) {
				uni.request({
					url: `${baseUrl}/book/detail?bid=${bid}`,
					success: (res) => {
						if (res.data.status === 1) {
							const dataList = res.data.data;
							
							const bookInfo = {
								bookName: dataList.bookName,
								author: dataList.author,
								pubTime: timeFormat(dataList.pubTime, 2),
								tid: dataList.tid,
								press: dataList.press,
								description: dataList.description,
							}
							this.form = bookInfo
							this.oldBookInfo = bookInfo
						}
						
					}
				})
			},

			handleOnSubmit() {
				
				uni.request({
					url: baseUrl + 'book/update',
					method: "POST",
					data: {
						bid: this.bid,
						...this.form
					},
					success:(res) => {
						if (res.data.status === 1) {

							this.$refs["toast"].open({
								message: "修改成功～",
								icon: "success",
								position: "middle",
								duration: 1000,
							});
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.form-wrap {
		min-height: 100vh;
		background-color: #eee;
	}
	
	.oper {
		width: 200rpx;
		margin-top: 10vh;
		margin-left: 50%;
		transform: translateX(-60rpx);
	}
</style>
