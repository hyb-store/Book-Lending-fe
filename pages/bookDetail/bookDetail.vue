<template>
	<view class="content" v-if="detailInfo">
		<uni-section :title="'分类:  ' + detailInfo.type.typeName" type="line"></uni-section>
		<view class="head_box">
			<view class="left_img">
				<image :src="detailInfo.bookImg" mode=""></image>
			</view>
			<view class="right_box">
				<view class="row_line">
					<uni-icons type="circle-filled" color="#333" size="16"></uni-icons>
					<view class="line_name">书名：{{ detailInfo.bookName }}</view>
				</view>
				<view class="row_line">
					<uni-icons type="circle-filled" color="#333" size="16"></uni-icons>
					<view class="line_name">作者：{{ detailInfo.author }}</view>
				</view>
				<view class="row_line">
					<uni-icons type="circle-filled" color="#333" size="16"></uni-icons>
					<view class="line_name">标签：{{ detailInfo.type.typeName }}</view>
				</view>
				<view class="row_line">
					<uni-icons type="circle-filled" color="#333" size="16"></uni-icons>
					<view class="line_name">时间：{{ detailInfo.pubTime.slice(0, 10) }}</view>
				</view>
				<view class="row_line">
					<uni-icons type="circle-filled" color="#333" size="16"></uni-icons>
					<view class="line_name">借阅数：{{ detailInfo.count }}</view>
				</view>
			</view>
		</view>
		<uni-section title="书籍简介" type="line"></uni-section>
		<view class="biref_box">{{ detailInfo.description  }}</view>
		<button @click="Borrowbook" style="width: 80%; margin: 10px auto;" type="primary">我要借阅</button>
		<uni-section title="评论" type="line"></uni-section>
		<view class="comment">
			<cl-input placeholder="点此输入评论" v-model="val" clearable>主要</cl-input>
			<cl-button type="primary" v-on:click="handleSend">发送</cl-button>
		</view>
		<view class="comment-item" v-for="(item, index) in commetList" :key="index">
			<view>
				<span class="username">{{item.username}}</span>
				<span class="pubTime">{{item.pubTime}}</span>
				<span
					class="delete"
					v-if="uid === item.uid"
					@click="handleDeleteComment(item.cid)"
				>
					<icon type="clear" size="20"/>
				</span>
			</view>
			<view class="content">{{item.content}}</view>
			
		</view>
		<cl-confirm ref="confirm"> </cl-confirm>
		<cl-toast ref="toast"></cl-toast>
		<cl-popup :visible.sync="visible" size="300rpx" direction="bottom">
			<view class="example-body">
				还书时间<uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
			</view>
			<view class="commit">
				<cl-button @click="cancel" type="primary">取消</cl-button>
				<cl-button @click="commit" type="primary">确认</cl-button>
			</view>
		</cl-popup>
	</view>
	
</template>



<script>
	import { baseUrl } from '../../common/constant.js'
	import { timeFormat } from '../../common/timeFormat.js'
	var _self;
	export default {
		data() {
			return {
				single:'',
				datetimesingle:'',
				isLogin:true,
				detailInfo: null,
				authorBiref: '', //作者简介
				bookBiref: '', //书籍简介
				commetList: [],
				val: '',
				bid: 0,
				visible:false,
				uid: 0,
			};
		},
		onShareTimeline() {
			return {
				title: _self.detailInfo.bookName,
				imageUrl: _self.detailInfo.bookImg,
				path: '/pages/bookDetail/bookDetail?pageInfo=' + JSON.stringify(_self.detailInfo)
			};
		},
		onShareAppMessage(res) {
			return {
				title: _self.detailInfo.bookName,
				imageUrl: _self.detailInfo.bookImg,
				path: '/pages/bookDetail/bookDetail?pageInfo=' + JSON.stringify(_self.detailInfo)
			};
		},
		onLoad(options) {
			const {
				bId
			} = options;
			this.bid = Number(bId);
			this.getBookInfo(Number(bId));
			
			const userId = uni.getStorageSync('user_info').id;
			this.uid = Number(userId)
		},
		watch: {
			datetimesingle(newval) {
				
			},
		},
		methods: {
			changeLog(e) {
				
			},
			commit() {
				console.log("jhdsbjs");
				this.visible = false;
				let userinfo = uni.getStorageSync('user_info');
				let endTime = this.datetimesingle.replace(/-/g,'/');
				let time = new Date(endTime);
				time = time.getTime();
				uni.request({
					url:`${baseUrl}borrow/borrow`,
					method:'POST',
					data: {
						bid:this.bid,
						lUid:this.detailInfo.user.id,
						bUid:userinfo.id,
						endTime:time,
					},
					success: (res) => {
						
					}
				})
			},
			cancel() {
				console.log(this.detailInfo.user.id);
				console.log(this.time);
				console.log("hyb");
				this.visible = false;
			},
			Borrowbook() {
				let userinfo = uni.getStorageSync('user_info');
				if(!(uni.getStorageSync('user_info'))) {
					this.$refs["confirm"].open({
						title: "提示",
						message: "尚未登录，确认是否授权登录？",
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
										let userInfo = res.data.data.user
										uni.setStorageSync("user_info", userInfo)
									}
								})
							}
						})
						this.$refs["toast"].open({
							message: "登录成功～",
							icon: "success",
							position: "middle",
							duration: 1000,
						});
					})
					.catch(() => {
						this.$refs["toast"].open({
							message: "已取消登录～",
							icon: "warning",
							position: "middle",
							duration: 1000,
						});
					});
				} else if(!(userinfo.phoneNum && userinfo.username)) {
					this.$refs["toast"].open({
						message: "请先完善个人信息～",
						icon: "success",
						position: "middle",
						duration: 1000,
					});
				} else if(this.detailInfo.uid == userinfo.id) {
					this.$refs["toast"].open({
						message: "这是你上传的图书",
						icon: "success",
						position: "middle",
						duration: 1000,
					});
				} else if(this.detailInfo.status != 0) {
					this.$refs["toast"].open({
						message: "图书已被借走",
						icon: "success",
						position: "middle",
						duration: 1000,
					});
				} else {
					this.visible = true;
				}
			},
			getBookInfo(bid) {
				uni.request({
					url: `${baseUrl}/book/detail?bid=${bid}`,
					success: (res) => {
						const data = res.data.data;
						if (data) {
							this.detailInfo = data;
							this.commetList = data.comments.map(item => {
								return {
									username: item.user.username,
									pubTime: timeFormat(item.commentTime, 2),
									content: item.content,
									uid: item.uid,
									cid: item.cid
								}
							})
						}
					}
				})
			},
			
			handleDeleteComment(cid) {
				this.$refs["confirm"].open({
					title: "提示",
					message: "确认删除此条评论？",
					callback: ({ action }) => {
						uni.request({
							url: `${baseUrl}comment/deleteComment?cid=${cid}`,
							success: (res) => {
								if (res.data.status === 1) {
									this.$refs["toast"].open({
										message: "删除成功～",
										icon: "success",
										position: "middle",
										duration: 1000,
									});
									this.getBookInfo(this.bid)
								}
							}
						})
					}
				});
				
			},
			handleSend() {

				uni.request({
					url: `${baseUrl}comment/add`,
					method: 'POST',
					data: {
						uid: this.uid,
						bid: this.bid,
						content: this.val
					},
					success: (res) => {
						this.val = ''
						this.getBookInfo(this.bid)
					}
				})
			},
			handleNav() {
				uni.navigateTo({
					url: "../admin/addBook?pageInfo=" + JSON.stringify(_self.detailInfo)
				})
			},
			handleDownload() {
				if (uni.getStorageSync('userInfo').nickName) {
					uni.setClipboardData({
						data: _self.detailInfo.bookUrl,
						success: function(res) {
							uni.showToast({
								icon: 'none',
								title: '链接复制成功请到浏览器打开~'
							});
						}
					});
				} else {
					uni.getUserProfile({
						desc: '展示',
						success(res) {
							uniCloud.callFunction({
								name: 'getUserInfo',
								data: {
									avatarUrl: res.userInfo.avatarUrl,
									gender: res.userInfo.gender,
									nickName: res.userInfo.nickName,
									openid: uni.getStorageSync('userInfo').openid
								},
								success(res1) {
									uni.setStorageSync('userInfo', res1.result);
									uni.setClipboardData({
										data: _self.detailInfo.bookUrl,
										success: function(res2) {
											uni.showToast({
												icon: 'none',
												title: '链接复制成功请到浏览器打开~'
											});
										}
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

<style lang="scss" scoped>
	.content {
		/deep/.uni-section {
			margin: 0;
			background: #333333;
		}

		/deep/.uni-section__content-title {
			color: #ffffff;
		}

		.head_box {
			width: 100%;
			padding: 24rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;

			.left_img {
				image {
					width: 185rpx;
					height: 250rpx;
				}
			}

			.right_box {
				margin-left: 25rpx;

				.row_line {
					display: flex;
					justify-content: flex-start;
					margin-top: 10rpx;
					align-items: center;
					color: #222222;

					.line_name {
						margin-left: 10rpx;
						font-size: 28rpx;
					}
				}
			}
		}

		.biref_box {
			font-size: 34rpx;
			color: #222222;
			padding: 0 24rpx;
		}

		.downloadBtn {
			width: 100%;
			height: 100rpx;
			border-radius: 0;
			text-align: center;
			color: #ffffff;
			background: #ff6364;
		}

		.hover_class {
			color: #333333;
			background: #c0c0c0;
		}

		.comment-item {
			padding: 1vh 5vw;
			border-bottom: 1px solid #c0c0c0;

			.username {
				font-size: 1.3rem;
			}

			.pubTime {
				color: #555555;
				margin-left: 20px;
			}
			
			.delete {
				display: inline-block;
				width: 40rpx;
				height: 60rpx;
				line-height: 60rpx;
				margin-left: 280rpx;
			}

			.content {
				margin-left: 20px;
			}
		}

		.comment {
			display: flex;
			margin: 10px 0;
		}
	}
	.example-body {
		background-color: #fff;
		padding: 10px;
	}
	.commit {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

</style>
