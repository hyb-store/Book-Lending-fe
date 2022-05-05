<template>
	<view class="content">
		<form @submit="formSubmit" @reset="formReset">
			<view class="row_line">
				<view class="title">书名:</view>
				<input class="row" name="bookName" :value="formdata.bookName" placeholder="请输入书籍名称" />
			</view>
			<view class="row_line">
				<view class="title">作者:</view>
				<input class="row" name="author" :value="formdata.author" placeholder="请输入作者名称" />
			</view>
			<view class="row_line">
				<view class="title">分类:</view>
				<picker @change="bindPickerChange" mode="selector" :value="index" :range="categoryList">
					<view class="row" :style="category ? '' : 'color:#666666'">{{ category ? category : '请选择分类~' }}</view>
				</picker>
			</view>
			<view class="row_line" @click="handleUpload">
				<view class="title">封面:</view>
				<view class="book_img">
					<image v-if="bookImg" :src="bookImg" mode=""></image>
					<uni-icons v-else type="camera-filled"></uni-icons>
				</view>
			</view>
			<view class="row_line">
				<view class="title">标签:</view>
				<input class="row" maxlength="10" :value="formdata.tag" name="tag" placeholder="请输入标签名称" />
			</view>
			<view class="row_line">
				<view class="title">简介:</view>
				<textarea class="textarea" name="description" :value="formdata.description" placeholder="请输入书籍名称" />
			</view>
			<view class="row_line">
				<view class="title">下载地址:</view>
				<input class="row" name="bookUrl" :value="formdata.bookUrl" placeholder="请输入下载地址名称" />
			</view>
			<view class="button_box">
				<button class="button submitBtn" form-type="submit">提交</button>
				<button class="button resetBtn" form-type="reset">重置</button>
			</view>
			<button class="deleteBtn" @click="handleDelete">删除</button>
		</form>
	</view>
</template>

<script>
var _self;
import timeFormat from '../../common/timeFormat.js';
export default {
	data() {
		return {
			categoryList: ['小说文学', '历史传记', '人文社科', '励志成功', '经济管理', '学习教育', '生活时尚', '英文原版'],
			category: '',
			bookImg: '',
			formdata: null
		};
	},
	computed: {},
	onPullDownRefresh() {},
	onReachBottom() {},
	onLoad(options) {
		_self = this;
		if (options.pageInfo) {
			_self.formdata = JSON.parse(options.pageInfo);
			_self.category = _self.formdata.category;
			_self.bookImg = _self.formdata.bookImg;
			console.log(_self.formdata);
		}
	},
	methods: {
		formSubmit: function(e) {
			let formdata = e.detail.value;
			console.log(formdata);
			if (!formdata.bookName) {
				uni.showToast({
					title: '请输入书籍名称~',
					icon: 'none'
				});
			} else if (!formdata.author) {
				uni.showToast({
					title: '请输入作者名称~',
					icon: 'none'
				});
			} else if (!this.category) {
				uni.showToast({
					title: '请选择分类~',
					icon: 'none'
				});
			} else if (!this.bookImg) {
				uni.showToast({
					title: '请上传书籍封面~',
					icon: 'none'
				});
			} else if (!formdata.tag) {
				uni.showToast({
					title: '请输入标签~',
					icon: 'none'
				});
			} else if (!formdata.description) {
				uni.showToast({
					title: '请输入简介~',
					icon: 'none'
				});
			} else if (!formdata.bookUrl) {
				uni.showToast({
					title: '请输入下载地址~',
					icon: 'none'
				});
			} else {
				if (_self.formdata) {
					if (_self.bookImg != _self.formdata.bookImg) {
						uniCloud.uploadFile({
							// 上传图片地址
							filePath: _self.bookImg,
							// 上传图片名字
							cloudPath: _self.bookImg,
							success(res) {
								uniCloud.callFunction({
									name: 'addBook',
									data: {
										...formdata,
										pubTime: timeFormat('', 'yyyy-mm-dd'),
										bookImg: res.fileID,
										openid: uni.getStorageSync('userInfo').openid,
										category: _self.category,
										_id: _self.formdata._id
									},
									success(res) {
										if (res.result.success) {
											uni.showToast({
												title: '编辑成功~'
											});
										} else {
											uni.showToast({
												title: res.result.msg,
												icon: 'none'
											});
										}
									}
								});
							},
							fail(err) {
								console.log(err);
							}
						});
					} else {
						uniCloud.callFunction({
							name: 'addBook',
							data: {
								...formdata,
								pubTime: timeFormat('', 'yyyy-mm-dd'),
								bookImg: _self.bookImg,
								openid: uni.getStorageSync('userInfo').openid,
								category: _self.category,
								_id: _self.formdata._id
							},
							success(res) {
								if (res.result.success) {
									uni.showToast({
										title: '编辑成功~'
									});
								} else {
									uni.showToast({
										title: res.result.msg,
										icon: 'none'
									});
								}
							}
						});
					}
				} else {
					uniCloud.uploadFile({
						// 上传图片地址
						filePath: _self.bookImg,
						// 上传图片名字
						cloudPath: _self.bookImg,
						success(res) {
							uniCloud.callFunction({
								name: 'addBook',
								data: {
									...formdata,
									pubTime: timeFormat('', 'yyyy-mm-dd'),
									bookImg: res.fileID,
									openid: uni.getStorageSync('userInfo').openid,
									category: _self.category
								},
								success(res) {
									if (res.result.success) {
										uni.showToast({
											title: '添加成功~'
										});
									} else {
										uni.showToast({
											title: res.result.msg,
											icon: 'none'
										});
									}
								}
							});
						},
						fail(err) {
							console.log(err);
						}
					});
				}
			}
		},
		formReset: function(e) {
			console.log('清空数据');
		},
		bindPickerChange(e) {
			this.category = this.categoryList[e.detail.value];
		},
		handleUpload() {
			uni.chooseImage({
				count: 1,
				success(res) {
					console.log(res);
					_self.bookImg = res.tempFilePaths[0];
				}
			});
		},
		handleDelete() {
			uniCloud.callFunction({
				name: 'deleteBook',
				data: {
					id: _self.formdata._id
				},
				success(res) {
					uni.showToast({
						title: res.result.msg
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	box-sizing: border-box;
	padding: 12rpx;
	.row_line {
		display: flex;
		border-bottom: 1rpx solid #333333;
		padding: 20rpx 0;
		align-items: center;
		.title {
			font-weight: bold;
			font-size: 32rpx;
			color: #222222;
		}
		.book_img {
			width: 200rpx;
			height: 200rpx;
			border: 1rpx solid #333333;
			text-align: center;
			line-height: 200rpx;
			margin-left: 20rpx;
			image {
				width: 200rpx;
				height: 200rpx;
			}
		}
		.row {
			flex-grow: 1;
			font-size: 28rpx;
			color: #222222;
			margin-left: 20rpx;
		}
		.textarea {
			margin-left: 20rpx;
			font-size: 28rpx;
			color: #222222;
			width: 500rpx;
			height: 200rpx;
			border: 1rpx solid #c0c0c0;
		}
	}
	.button_box {
		display: flex;
		justify-content: space-around;
		margin-top: 30rpx;
		.button {
			color: #ffffff;
			border-radius: 20rpx;
			font-size: 30rpx;
			width: 350rpx;
			height: 100rpx;
			line-height: 100rpx;
		}
		.submitBtn {
			background: #007aff;
		}
		.resetBtn {
			background: #4cd964;
		}
	}
	.deleteBtn {
		color: #ffffff;
		border-radius: 20rpx;
		font-size: 30rpx;
		width: 350rpx;
		height: 100rpx;
		line-height: 100rpx;
		background: #ff6364;
		margin-top: 30rpx;
	}
}
</style>
