<template>
	<view class="content">
		<scroll-view scroll-y="true" class="left">
			<view @click="handleTable(index)" :class="{ active: index == activeIndex }"
				v-for="(item, index) in category" :key="index">{{ item.typeName }}</view>
		</scroll-view>
		<scroll-view scroll-y="true" @scrolltolower="scrolltolower" class="right" :style="{ height: height }">
			<view class="book_list">
				<view class="book_row" @click="handleDetail(item)" v-for="(item, index) in bookList" :key="item._id">
					<image :src="item.bookImg" mode=""></image>
					<!-- <view class="book_tag">{{ item.tag }}</view> -->
					<view class="book_bottom">
						<view class="book_name">{{ item.bookName }}</view>
						<view class="book_author">{{ item.author }}</view>
					</view>
				</view>
			</view>
			<uni-load-more :status="lodingStatus"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	import {baseUrl} from '../../common/constant.js'
	var _self;
	export default {
		data() {
			return {
				category: [{
						tid: 1,
						typeName: "编程语言"
					},
					{
						tid: 2,
						typeName: "数据库"
					},
					{
						tid: 3,
						typeName: "算法"
					},
					{
						tid: 4,
						typeName: "计算机系统"
					},
					{
						tid: 5,
						typeName: "网络编程"
					},
					{
						tid: 6,
						typeName: "设计模式"
					},
					{
						tid: 7,
						typeName: "消息队列"
					}
				],
				activeIndex: 0,
				pageNo: 1,
				pageTotal: 0,
				bookList: [],
				lodingStatus: 'loading' //状态
			};
		},
		computed: {
			height() {
				return uni.getSystemInfoSync().windowHeight + 'px';
			}
		},
		onLoad() {
			_self = this;
			_self.getCategory(this.category[0].tid);
		},
		methods: {
			handleDetail(e) {
				uni.navigateTo({
					url: '../bookDetail/bookDetail?bId=' + JSON.stringify(e._id)
				});
			},
			scrolltolower() {
				if (_self.pageTotal < 15) {
					_self.lodingStatus = 'nomore';
				} else {
					_self.lodingStatus = 'loading';
					_self.pageNo++;
					_self.getCategory(_self.category[_self.activeIndex].tid);
				}
			},
			handleTable(index) {
				if (index != _self.activeIndex) {
					_self.activeIndex = index;
					_self.lodingStatus = 'nomore';
					_self.pageNo = 1;
					_self.bookList = []
					_self.getCategory(_self.category[index].tid);
				}
			},

			getCategory(category) {

				uni.request({
					url: `${baseUrl}/type/tid?tid=${category}`,
					success: (res) => {
						let lists = res.data.data
						let bookList = []
						lists.forEach((item) => {
							const items = {
								_id: item.bid,
								bookImg: item.bookImg,
								bookName: item.bookName,
								author: item.author
							}
							bookList.push(items)
						})

						_self.bookList = bookList
						_self.pageTotal = bookList.length
					}
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		height: 100%;
		display: flex;
		justify-content: flex-start;

		.left {
			height: 100%;
			width: 200rpx;
			background: #f6f6f6;

			view {
				height: 100rpx;
				line-height: 100rpx;
				font-size: 26rpx;
				text-align: center;
			}

			.active {
				position: relative;
				background: #ffffff;

				&:before {
					content: '';
					width: 5rpx;
					height: 60rpx;
					background: #ff6364;
					position: absolute;
					left: 0;
					top: 20rpx;
					z-index: 9;
					border-radius: 5rpx;
				}
			}
		}

		.right {
			height: 100%;

			.book_list {
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;

				.book_row {
					width: 235rpx;
					box-shadow: 1rpx 4rpx 10rpx 2rpx #808080;
					position: relative;
					margin-top: 30rpx;

					image {
						width: 235rpx;
						height: 300rpx;
					}

					.book_tag {
						position: absolute;
						left: 0;
						top: 0;
						background: rgba(0, 0, 0, 0.8);
						width: 200rpx;
						height: 50rpx;
						color: #ffffff;
						font-size: 26rpx;
						font-weight: bold;
						line-height: 50rpx;
						text-align: center;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					.book_bottom {
						text-align: center;
						padding: 0 10rpx;
						box-sizing: border-box;

						.book_name {
							font-size: 30rpx;
							color: #333333;
							border-bottom: 2rpx dashed #ccc;
							font-weight: bold;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}

						.book_author {
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
							color: #333333;
							font-size: 28rpx;
						}
					}
				}
			}
		}
	}
</style>
