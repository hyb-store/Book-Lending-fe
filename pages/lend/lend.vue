<template>
	<view class="lend-wrap">
		<view>
			<cl-form ref="form" :model.sync="form" label-width="120rpx">
				<cl-form-item prop="bookName" label="书名">
					<cl-input v-model="form.bookName" style="width: 600rpx;"></cl-input>
				</cl-form-item>
				<cl-form-item prop="author" label="作者">
					<cl-input v-model="form.author" style="width: 600rpx;"></cl-input>
				</cl-form-item>
				<cl-form-item prop="press" label="出版社">
					<cl-input v-model="form.press" style="width: 600rpx;"></cl-input>
				</cl-form-item>
				<cl-form-item prop="description" label="描述">
					<cl-input v-model="form.description" style="width: 600rpx;"></cl-input>
				</cl-form-item>
				<cl-form-item prop="pubTime" label="出版时间">
					<cl-select :border="true" v-model="form.pubTime" mode="date" style="width: 600rpx;">
					</cl-select>
				</cl-form-item>
				<cl-form-item prop="tid" label="类型">
					<cl-select v-model="form.tid" :options="typeList" style="width: 600rpx;"></cl-select>
				</cl-form-item>
				<cl-form-item prop="img" label="封面">
					<uni-file-picker ref="files" @success="success" @select="select" v-model="imageValue"
						fileMediatype="image" :limit="1" :auto-upload="false" :image-styles="imageStyles" />
				</cl-form-item>
			</cl-form>
			<view class="oper">
				<cl-button type="success" @tap="onSubmit" :disabled="isDisabled">提交</cl-button>
			</view>

		</view>
		<cl-toast ref="toast"></cl-toast>
	</view>

</template>

<script>
	import axios from 'axios'
	import {
		baseUrl
	} from '../../common/constant.js'
	import FormData from '../../common/formdata.js'
	export default {
		data() {
			return {
				active: "ocr",
				isDisabled: false,
				imageStyles: {
					width: 100,
					height: 100,
					border: {
						color: "gray",
						width: 2,
						style: 'dashed',
						radius: '2px'
					}
				},
				form: {
					bookName: "",
					author: "",
					pubTime: "",
					tid: 1,
					press: '',
					description: ''
				},
				imageValue: [],
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
					}
				]
			};
		},

		methods: {
			onSubmit() {
				let formData = new FormData()
				const uid = uni.getStorageSync('user_info').id
				const book = JSON.stringify({
					uid,
					...this.form
				})
				console.log(book)
				formData.append('book', book)
				const uri = uni.getStorage({
					key: 'url',
					success: ({
						data: imgUrl
					}) => {
						formData.appendFile('file', imgUrl)
						const data = formData.getData();
						uni.request({
							method: 'post',
							url: `${baseUrl}borrow/upload`,
							data: data.buffer,
							header: {
								"content-type": data.contentType,
							}
						}).then(res => {
							if (res[1].data.status === 1) {
								this.$refs["toast"].open({
									message: "借出成功～",
									icon: "success",
									position: "middle",
									duration: 1000,
								});
							}
						})
					}
				})

			},
			success(e) {
				console.log(e)
			},
			select(e) {
				console.log('选择文件：', e)
				uni.setStorage({
					key: 'url',
					data: e.tempFilePaths[0]
				})
			},
		}
	};
</script>
<style lang="scss" scoped>
	.lend-wrap {
		height: 100vh;

		.item-lend {
			height: 100vh;
		}
	}

	.oper {
		margin-left: 2rem;
	}
</style>
