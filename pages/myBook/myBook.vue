<template>
	<view class="list-wrap">
		<view
			class="card-wrap"
			v-for="(item, index) in bookData"
			:key="item.bid"
		>
			<cl-card :label="item.bookName" more-text="查看详情" @more="handleToDetails(item.bid)">
				<view class="image-wrap">
					<cl-image :src="item.bookImg"></cl-image>
				</view>
				<view class="info-wrap">
					<view class="info-item">
						<view class="title">
							作者:
						</view>
						<view class="content">
							{{item.author}}
						</view>
					</view>
					<view class="info-item">
						<view class="title">
							出版社:
						</view>
						<view class="content">
							{{item.press}}
						</view>
					</view>
					<view class="info-item">
						<view class="title">
							出版时间:
						</view>
						<view class="content">
							{{item.pubTime}}
						</view>
					</view>
					<view class="operation">
						<cl-button type="primary" size="mini" @click="handleEdit(item.bid)">编辑信息</cl-button>
						<cl-button type="error" size="mini" @click="handleDelete(item.bid)">删除此书</cl-button>
						<view class="tag">
							<view class="status">
								状态：
							</view>
							<cl-tag v-if="item.status===0" size="mini" type="success" plain round>未借出</cl-tag>
							<cl-tag v-if="item.status===1" size="mini" type="warning" plain round>待借出</cl-tag>
							<cl-tag v-if="item.status===2" size="mini" type="error" plain round>已借出</cl-tag>
						</view>
					</view>
					
				</view>
			</cl-card>
		</view>
		<cl-confirm ref="confirm"> </cl-confirm>
		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
	import { baseUrl } from '../../common/constant.js'
	import  { timeFormat }  from '../../common/timeFormat.js'
	export default {
		data() {
			return {
				bookData: [],
			}
		},
		onShow() {
			this.getBookInfo();
		},
		methods: {
			getBookInfo() {
				uni.showLoading({
					title: "加载中～",
				})

				const userId = uni.getStorageSync("user_info").openId
				
				uni.request({
					url: `${baseUrl}user/myBook?openId=${userId}`,
					success: (res) => {
						console.log(res.data.data)
						const dataList = res.data.data 
						dataList.map((item) => {
							item.pubTime = timeFormat(item.pubTime, 2)
						})
				
						this.bookData = dataList
						uni.hideLoading()
					}
				})
			},
	
			handleToDetails(id) {
				uni.navigateTo({
					url: '../bookDetail/bookDetail?bId=' + JSON.stringify(id)
				});
			},
			
			handleDelete(id) {
				console.log(id)
				this.$refs["confirm"].open({
					title: "提示",
					message: "确认删除此书？",
				}).then(() => {
					uni.request({
						url: `${baseUrl}book/deleteBook?bid=${id}`,
						success: (res) => {
							if (res.data.status === 1) {
								this.getBookInfo()
								this.$refs["toast"].open({
									message: "已删除～",
									icon: "success",
									position: "middle",
									duration: 1000,
								});
							}
						}
					})					
				}).catch(() => {});
			},
			
			handleEdit(id) {
				console.log(id)
			}
		}
	}
</script>

<style lang="scss">
	.list-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
		background-color: #eee;
		
		.card-wrap {
			position: relative;
			width: 96%;
			
			.image-wrap {
				width: 20vw;
				height: 16vh;
			}
			.info-wrap {
				position: absolute;
				right: 0;
				top: 28%;
				width: 70vw;
			}
			.info-item {
				width: 100%;
				display: flex;
				height: 60rpx;
				line-height: 60rpx;
				.title {
					width: 30%;
					font-size: medium;
				}
				.content {
					width: 70%;
					color: #aaa;
					overflow: hidden;
					/*文本不会换行*/
					white-space: nowrap;
					/*当文本溢出包含元素时，以省略号表示超出的文本*/
					text-overflow: ellipsis;
				}
			}
			.operation {
				display: flex;
				width: 100%;
				justify-content: flex-start;
				align-items: center;
				.tag {
					display: flex;
					align-items: center;
					margin-left: 60rpx;
					.status {
						font-size: medium;
					}
				}
			}
		}
	}
</style>
