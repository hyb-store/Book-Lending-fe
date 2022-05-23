<template>
	<view class="content">
		<view class="book_list">
			<cl-tabs v-model="current" :labels="labels" :border="false">
				<swiper class="container" @change="onChangeSwiper" :current="current">
					<swiper-item v-for="(item, index) in list" :key="index">
						<!-- 是否预加载 -->
						<template v-if="item.loaded || index == current">
							<cl-scroller :ref="`scroller-${index}`"  >
								<!-- 首次加载框，可有可无 -->
								<cl-loading-mask :loading="loading" text="加载中">
									<!-- 列表 -->
									<view class="list">
										<view style="display:flex; justify-content: space-between; height: 300rpx;"
											v-for="(item2, index2) in item.data" :key="index2">
											<view style="width: 20vw;height: 10vh;">
												<img style="width: 20vw;height:15vh;" :src="item2.book_url" alt="">
											</view>
											<view
												style="display: flex;justify-content: center; flex-direction: column; width: 80%; justify-content: space-around;">
												<view
													style="display: flex;flex-direction: column;justify-content: flex-start;">
													<view style=""> {{item2.bookName}}</view>
													<cl-tag :type="returnTypeMapInfo[item2.book_return].tagType"
														style="align-self: center;margin-top:-42rpx">
														{{returnTypeMapInfo[item2.book_return].message}}</cl-tag>
												</view>
												<view v-if="item2.book_realTime == '' ? true : false">
													<view>借书时间：{{item2.book_startTime}}</view>
													<view>预还时间：{{item2.book_endTime}}</view>
													<view v-if="current == 0">
														<view>
															书主：{{item2.book_owner}}
														</view>
														<cl-button @click="showbookower(item2)" style="margin-left: 325rpx;">书主信息</cl-button>
													</view>
													<view v-else>借取人：{{item2.book_owner}}</view>
												</view>
												<view v-else>
													<view>借书时间：{{item2.book_startTime}}</view>
													<view>还书时间：{{item2.book_realTime}}</view>
													<view v-if="current == 0">
														<view>
															书主：{{item2.book_owner}}
														</view>
														<cl-button @click="showbookower(item2)" style="margin-left: 325rpx;">书主信息</cl-button>
													</view>
													<view v-else>借取人：{{item2.book_owner}}</view>
												</view>
												<!-- <view>
												</view> -->
												<cl-button @click="commitreturn(item2)"
													v-if="item2.book_status == 1 ? true : false"
													style="align-self: center;" type="primary">确认借出</cl-button>
												<cl-button @click="commit(item2)"
													v-if="(item2.book_realTime == '' && item2.book_status == 2) ? true : false"
													style="align-self: center;" type="primary">确认还书</cl-button>
											</view>
										</view>
									</view>
								</cl-loading-mask>
							</cl-scroller>
						</template>
					</swiper-item>
				</swiper>
			</cl-tabs>
		</view>
		<cl-dialog title="书主信息" :visible.sync="visible">
			<view style="display: flex;flex-direction:column;justify-content: center;align-items: flex-start;">
				<view>书主：{{bookownerinfo.username}}</view>
				<view>性别：{{bookownerinfo.gender}}</view>
				<view>电话：{{bookownerinfo.phoneNum}}</view>
				<view>邮箱：{{bookownerinfo.email == "" ? "暂未填写" : bookownerinfo.email}}</view>
				<view>地址：{{bookownerinfo.address == "" ? "暂未填写" : bookownerinfo.address}}</view>
			</view>
		</cl-dialog>
	</view>
</template>

<script>
	import {
		baseUrl
	} from '../../common/constant.js';
	import { timeFormat } from '../../common/timeFormat.js';
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
				visible:false,
				bookownerinfo:{},
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
			showbookower(event) { 
				this.visible = true;
				if(event.book_Bookownerinfo.gender === 0) {
					event.book_Bookownerinfo.gender = "女";
				} else if(event.book_Bookownerinfo.gender === 1) {
					event.book_Bookownerinfo.gender = "男";
				} else {
					event.book_Bookownerinfo.gender = "保密"
				}
				this.bookownerinfo = event.book_Bookownerinfo;
			},
			commitreturn(event) {
				console.log(event);
				uni.request({
					url:`${baseUrl}borrow/borrowOk?bid=${event.book_bid}`,
					method:'GET',
					success: (res) => {
						this.refresh()
					}
				})
			},
			commit(event) {
				uni.request({
					url: `${baseUrl}borrow/returnOk?hid=${event.hid}`,
					data: {},
					header: {},
					success: (res) => {
						if (res.data.msg == "确定还书成功") {
							this.refresh();
						}
					}
				})
			},

			onChangeSwiper(e) {
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
				let data = {
					...item.pagination,
					status: item.status,
					sort: "desc",
					order: "createTime",
					...params
				};

				return new Promise(resolve => {
					item.loading = true;

					setTimeout(() => {
						let book = [];
						if (this.current == 0) {
							let user_info = uni.getStorageSync('user_info');

							uni.request({
								url: `${baseUrl}user/myBorrow?openId=${user_info.openId}`,
								data: {},
								header: {},
								success: function(res) {
									console.log(res);
									res.data.data.forEach(item1 => {
										let bookdata = {
											book_owner: "",
											bookName: "",
											book_url: "",
											book_return: "",
											book_startTime: "",
											book_realTime: "",
											book_endTime: "",
											book_Bookownerinfo:[]
										};
										bookdata.book_Bookownerinfo = item1.lUser;
										bookdata.book_owner = item1.lUser.username;
										bookdata.bookName = item1.book.bookName;
										bookdata.book_url = item1.book.bookImg;
										bookdata.book_startTime = timeFormat(item1.startTime);

										if (item1.realTime != null) {
											bookdata.book_return = item1.punctuality == 0 ? 1 : 2;
											bookdata.book_realTime = timeFormat(item1.realTime);
										} else {
											bookdata.book_return = 0;
											bookdata.book_endTime = timeFormat(item1.endTime);
											bookdata.hid = item1.hid;
										}

										book.push(bookdata);
									})
								}
							})
						} else {
							let user_info = uni.getStorageSync('user_info');

							uni.request({
								url: `${baseUrl}user/myLend?openId=${user_info.openId}`,
								data: {},
								header: {},
								success: function(res) {
									console.log(res);
									res.data.data.forEach(item1 => {
										let bookdata = {
											book_owner: "",
											bookName: "",
											book_url: "",
											book_return: "",
											book_startTime: "",
											book_realTime: "",
											book_endTime: "",
											book_status:0,
											book_bid:0,
										};
										bookdata.book_owner = item1.bUser.username;
										bookdata.bookName = item1.book.bookName;
										bookdata.book_url = item1.book.bookImg;
										bookdata.book_startTime = timeFormat(item1.startTime);

										if (item1.realTime != null) {
											bookdata.book_return = item1.punctuality == 0 ? 1 : 2;
											bookdata.book_realTime = timeFormat(item1.realTime);
										} else {
											bookdata.book_return = 0;
											bookdata.book_endTime = timeFormat(item1.endTime);
											bookdata.hid = item1.hid;
											bookdata.book_status = item1.book.status;
											bookdata.book_bid = item1.bid;
										}
										book.push(bookdata);
									})
								}
							})
						}
						item.data = book;
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
