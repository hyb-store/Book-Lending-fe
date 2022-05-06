<template>
	<view>
		<cl-form ref="form" :model.sync="form" label-width="120rpx">
			<cl-form-item prop="bookName" label="书名">
				<cl-input v-model="form.bookName"></cl-input>
			</cl-form-item>
			<cl-form-item prop="author" label="作者">
				<cl-input v-model="form.author"></cl-input>
			</cl-form-item>
			<cl-form-item prop="press" label="出版社">
				<cl-input v-model="form.press"></cl-input>
			</cl-form-item>
			<cl-form-item prop="description" label="描述">
				<cl-input v-model="form.description"></cl-input>
			</cl-form-item>
			<cl-form-item prop="pubTime" label="出版时间">
				<cl-input v-model="form.pubTime"></cl-input>
			</cl-form-item>
			<cl-form-item prop="tid" label="类型">
				<cl-select v-model="form.tid" :options="typeList"></cl-select>
			</cl-form-item>
			<cl-form-item prop="img" label="封面">
				<cl-upload :beforeUpload="handleFile"></cl-upload>
			</cl-form-item>
		</cl-form>
		<view class="oper">
			<cl-button type="success" @tap="onSubmit">提交</cl-button>
		</view>
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
				form: {
					bookName: "严凯治",
					author: "严凯治",
					pubTime: new Date(),
					tid: 1,
					press: '安岳北504',
					description: '这是描述,这是描述,这是描述,这是描述'
				},
				bookImg: '',
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
				const book = JSON.stringify({
					uid: 1,
					...this.form
				})
				formData.append('book', book)
				console.log(this.bookImg)
				const uri = uni.getStorage({
					key: 'url',
					success: ({
						data: imgUrl
					}) => {
						console.log(imgUrl)
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
							console.log(res)
						})
					}
				})
				
			},
			handleFile(file) {
				this.bookImg = file.path
				console.log(this.bookImg)
				uni.setStorage({
					key: 'url',
					data: file.path
				})
				return true
			}
		}
	};
</script>
<style>
	.oper {
		margin-left: 2rem;
	}
</style>
