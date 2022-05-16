<template>
	<view class="content">
		<view class="book_list">
			<cl-tabs v-model="current" :labels="labels" :border="false">
				<swiper class="container" @change="onChangeSwiper" :current="current">
					<swiper-item v-for="(item, index) in list" :key="index">
						<!-- 是否预加载 -->
						<template v-if="item.loaded || index == current">
							<cl-scroller :ref="`scroller-${index}`" @down="onDown" @up="onUp">
								<!-- 首次加载框，可有可无 -->
								<cl-loading-mask :loading="loading" text="加载中">
									<!-- 列表 -->
									<view class="list">
										<view style="display:flex; justify-content: space-between; height: 250rpx;"
											v-for="(item2, index2) in item.data" :key="index2">
											<view style="width: 20vw;height: 10vh;">
												<img style="width: 20vw;height:15vh;" :src="item2.book_url" alt="">
											</view>
											<view
												style="display: flex;justify-content: center; flex-direction: column; width: 80%; justify-content: space-around;">
												<view style=""> {{item2.bookName}}</view>
												<view v-if="item2.book_realTime == '' ? true : false">
													<view>借书时间：{{item2.book_startTime}}</view>
													<view>预还时间：{{item2.book_endTime}}</view>
												</view>
												<view v-else>
													<view>借书时间：{{item2.book_startTime}}</view>
													<view>还书时间：{{item2.book_realTime}}</view>
												</view>
												<view style="display: flex;justify-content: center;flex-direction: column;justify-content: space-around;">
													<view v-if="current == 0">书主：{{item2.book_owner}}</view>
													<view v-else>借取人：{{item2.book_owner}}</view>
													<cl-tag :type="returnTypeMapInfo[item2.book_return].tagType" style="align-self: center;"> {{returnTypeMapInfo[item2.book_return].message}}</cl-tag>
												</view>
												
											</view>
											<!-- <cl-icon name="cl-icon-arrow-right">
												
											</cl-icon> -->
										</view>

										<!-- 加载更多 -->
										<!-- <cl-loadmore v-if="item.data.length > 0" :loading="item.loading"
											:finish="item.finished" :divider="false"></cl-loadmore> -->
									</view>
								</cl-loading-mask>
							</cl-scroller>
						</template>
					</swiper-item>
				</swiper>
			</cl-tabs>
		</view>
		<!-- <uni-load-more status="noMore"></uni-load-more> -->
	</view>
</template>

<script>
	import {
		baseUrl
	} from '../../common/constant.js';
	import timeFormat from '../../common/timeFormat.js';
	export default {
		data() {
			const labels = [{
					label: "借入记录",
					value: 1,
					loaded: true
				},
				{
					label: "借出记录",
					value: 2
				},
			];

			const list = labels.map(e => {
				return {
					...e,
					status: e.value,
					data: [],
					finished: false,
					loading: false,
					pagination: {
						page: 1,
						size: 20
					}
				};
			});
			return {
				current: 0,
				labels,
				list,
				loading: true,
				returnTypeMapInfo: [{
					tagType: 'error',
					message: '未归还'
				}, {
					tagType: 'success',
					message: '准时归还'
				}, {
					tagType: 'warning',
					message: '超时归还'
				}]
			};
		},
		onLoad() {},
		onShow() {

		},
		mounted() {
			this.refresh()
		},
		methods: {
			// onDown() {
			// 	this.refresh({
			// 		page: 1
			// 	}).done(() => {
			// 		this.$refs[`scroller-${this.current}`][0].end();
			// 	});
			// },

			// onUp() {
			// 	const { pagination, finished } = this.list[this.current];

			// 	if (!finished) {
			// 		this.refresh({
			// 			page: pagination.page + 1
			// 		});
			// 	}
			// },
			onChangeSwiper(e) {
				//console.log(e);
				this.current = e.detail.current;

				if (!this.list[this.current].loaded) {
					this.loading = true;
					this.list[this.current].loaded = true;
				}

				setTimeout(() => {
					this.refresh({
						page: 1
					});
				}, 500);
			},

			refresh(params = {}) {
				const item = this.list[this.current];
				console.log(item);
				let data = {
					...item.pagination,
					status: item.status,
					sort: "desc",
					order: "createTime",
					...params
				};

				return new Promise(resolve => {
					item.loading = true;

					//console.log("Refresh");

					setTimeout(() => {
						// item.data = new Array(data.page == 1 ? 10 : data.page * 10).fill(1);
						let book = [];
						if (this.current == 0) {
							let user_info = uni.getStorageSync('user_info');
							console.log(user_info);
							uni.request({
								url: `${baseUrl}user/myBorrow?openId=${user_info.openId}`,
								data: {},
								header: {},
								success: function(res) {
									console.log(res);
									//let bookdata = {bookName:"",book_url:"",book_return:""};
									console.log(res.data.data.length);
									res.data.data.forEach(item1 => {
										let bookdata = {
											book_owner:"",
											bookName: "",
											book_url: "",
											book_return: "",
											book_startTime:"",
											book_realTime:"",
											book_endTime:""
										};
										bookdata.book_owner = item1.lUser.username;
										bookdata.bookName = item1.book.bookName;
										bookdata.book_url = item1.book.bookImg;
										bookdata.book_startTime = timeFormat(item1.startTime);
										// bookdata.book_startTime = timeFormat(new Date(item1.startTime));
										//console.log(bookdata.bookName);
										if (item1.realTime != null) {
											bookdata.book_return = item1.punctuality ==
												0 ? 1 : 2;
											bookdata.book_realTime = timeFormat(item1.realTime);
											// bookdata.book_realTime = timeFormat(new Date(item1.realTime));
											
											//console.log(bookdata.book_startTime);
										} else {
											bookdata.book_return = 0;
											bookdata.book_endTime = timeFormat(item1.endTime);
											// bookdata.book_endTime = timeFormat(new Date(item1.endTime));
										}
										console.log(bookdata);
										book.push(bookdata);
										console.log(book);
									})
									//item.data = {};
									// item.pagination.page = data.page;
									// item.finished = false;
									// item.loading = false;
									// this.loading = false;
									// resolve();
								}
							})
						}
						else {
							let user_info = uni.getStorageSync('user_info');
							console.log(user_info);
							uni.request({
								url: `${baseUrl}user/myLend?openId=${user_info.openId}`,
								data: {},
								header: {},
								success: function(res) {
									console.log(res);
									//let bookdata = {bookName:"",book_url:"",book_return:""};
									console.log(res.data.data.length);
									res.data.data.forEach(item1 => {
										let bookdata = {
											book_owner:"",
											bookName: "",
											book_url: "",
											book_return: "",
											book_startTime:"",
											book_realTime:"",
											book_endTime:""
										};
										bookdata.book_owner = item1.bUser.username;
										bookdata.bookName = item1.book.bookName;
										bookdata.book_url = item1.book.bookImg;
										bookdata.book_startTime = timeFormat(item1.startTime);
										//console.log(bookdata.bookName);
										if (item1.realTime != null) {
											bookdata.book_return = item1.punctuality ==
												0 ? 1 : 2;
											bookdata.book_realTime = timeFormat(item1.realTime);
										} else {
											bookdata.book_return = 0;
											bookdata.book_endTime = timeFormat(item1.endTime);
										}
										console.log(bookdata);
										book.push(bookdata);
										console.log(book);
									})
									//item.data = {};
									// item.pagination.page = data.page;
									// item.finished = false;
									// item.loading = false;
									// this.loading = false;
									// resolve();
								}
							})
						}
						item.data = book;
						console.log(item.data);
						item.pagination.page = data.page;
						item.finished = false;
						item.loading = false;
						this.loading = false;
						resolve();
					}, 500);
				});
			},

			handleDetail(e) {
				uni.navigateTo({
					url: '../bookDetail/bookDetail?pageInfo=' + JSON.stringify(e)
				});
			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		.book_list {
			height: 100vh;
			overflow: hidden;

			.container {
				height: 95%;
				background-color: #f7f7f7;
			}

			.list {
				padding: 20rpx;
				height: 1000rpx;
				width: 1000rpx;
				// /deep/.cl-list-item {
				// 	height: 100rpx;
				// 	margin-bottom: 20rpx;
				// 	border-radius: 10rpx;
				// }
			}
		}
	}

	.book {
		width: 100%;
		height: 100rpx;
	}

	.bookimg {
		width: 50rpx;
		width: 50rpx;
	}
</style>
