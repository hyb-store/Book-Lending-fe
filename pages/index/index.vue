<template>
	<view class="content">
		<navigator url="../search/search">
			<uni-search-bar disabled :radius="100" placeholder="输入书籍名称"></uni-search-bar>
		</navigator>
		<view>
			<scroll-view
				show-scrollbar="true"
				style="height: 100vh"
				scroll-y="true"
				:refresher-enabled="isOpenRefresh"
				:refresher-triggered="triggered"
				refresher-background="gray"
				@refresherpulling="onPulling"
				@refresherrefresh="onRefresh"
				@scroll="onScroll"
			>
				<view v-if="!isOpenRefresh">别拉了，没有更多了~</view>
				<view class="swiper-container">
					<cl-swiper height="200px"  :list="list"></cl-swiper>
				</view>
				<view class="book_list">
					<view class="book_row" @click="handleDetail(item)" v-for="(item, index) in bookInfo" :key="item._id">
						<image :src="item.bookImg" mode=""></image>
						<!-- <view class="book_tag">{{ item.tag }}</view> -->
						<view class="book_bottom">
							<view class="book_name">{{ item.bookName }}</view>
							<view class="book_author">{{ item.author }}</view>
						</view>
					</view>
					
					<!-- <uni-load-more :status="lodingStatus"></uni-load-more> -->
				</view>
			</scroll-view>
		</view>
		
		
		<view @click="backToTop" v-if="showBackTop" class="back_top">
			<uni-icons size="20" color="#FFFFFF" type="arrowthinup"></uni-icons>
		</view>
	</view>
</template>

<script>
 	import { baseUrl } from '../../common/constant.js'
 	var _self;
	export default {
		data() {
			return {
				scrollTop: 0,
				bookInfo: [],
				pageNo: 1, //页码
				pageTotal: '', //总数
				lodingStatus: 'loading', //状态
				scrollTop: '',
				list: [],
				triggered: false,
				isOpenRefresh: true // 是否开启下拉
			};
		},
		computed: {
			showBackTop() {
				// 由于scrollTop为页面的滚动距离，默认为px单位，这里将用于传入的top(rpx)值
				// 转为px用于比较，如果滚动条到顶的距离大于设定的距离，就显示返回顶部的按钮
				return this.scrollTop > uni.upx2px(200);
			}
		},
		onPageScroll(res) {
			this.scrollTop = parseInt(res.scrollTop);
		},
		onShareTimeline() {
			return {
				title: '萝卜书房，等你来战~',
				path: '/pages/index/index'
			};
		},
		onShareAppMessage(res) {
			return {
				title: '萝卜书房，等你来战~',
				path: '/pages/index/index'
			};
		},
		onPullDownRefresh() {
			_self.pageNo = 1
			_self.getBookInfo();
		},
		onReachBottom() {
			if (_self.pageTotal === 0) {
				_self.lodingStatus = 'nomore';
			} else {
				// _self.lodingStatus = 'loading';
				_self.pageNo++;
				_self.getBookInfo();
			}
		},
		onLoad() {
			_self = this;
			_self.getBookInfo();
			_self.getSwiperData();
		},
		methods: {
			onPulling(e) {
				console.log("onpulling", e);
				if (e.detail.deltaY < 0) return  // 防止上滑页面也触发下拉
				this.triggered = true;
			},

			onRefresh() {
				console.log('sss')
			},
			onScroll(e) {  
			  this.scrollTop = e.detail.scrollTop
			},
		
			getSwiperData() {
				uni.request({
					url: `${baseUrl}/index/getTop3`,
					success: (res) => {
						const {
							data: resData
						} = res;
						if (resData) {
							const {
								data
							} = resData;
							this.list = data.map(item => {
								return ({
									_id: item.bid,
									url: item.bookImg,
									title: item.bookName,
									author: item.author
								})
							})
						}
					}
				})
			},
			backToTop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				});
			},
			getBookInfo() {
				uni.request({
					url: `${baseUrl}/index/recommend?uid=3`,
					data: {},
					header: {},
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

						this.bookInfo = bookList
						this.pageTotal = bookList.length
					}
				})
			},
			handleDetail(e) {
				uni.navigateTo({
					url: '../bookDetail/bookDetail?bId=' + JSON.stringify(e._id)
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		.swiper-container {
			margin: 5px auto 10px;
		}

		.back_top {
			width: 80rpx;
			height: 80rpx;
			background: rgba(0, 0, 0, 0.4);
			border-radius: 50%;
			position: fixed;
			right: 50rpx;
			bottom: 100rpx;
			text-align: center;
			line-height: 80rpx;
			opacity: 1;
			transition: opacity 0.4s;
			z-index: 9;
		}

		.book_list {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;

			.book_row {
				display: inline-block;
				margin-left: 30rpx;
				width: 335rpx;
				box-shadow: 1rpx 4rpx 10rpx 2rpx #808080;
				position: relative;
				margin-bottom: 30rpx;

				image {
					width: 335rpx;
					height: 400rpx;
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
						color: #333333;
						font-size: 28rpx;
						height: 80rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2; //多行在这里修改数字即可
						overflow:hidden;
						/* autoprefixer: ignore next */
						-webkit-box-orient: vertical;
					}
				}
			}
		}
	}
</style>
