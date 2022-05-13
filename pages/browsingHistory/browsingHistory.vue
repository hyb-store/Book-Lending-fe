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
										<cl-list-item
											v-for="(item2, index2) in item.data"
											:key="index2"
											:label="`${item.label} - ${index2}`"
										>
											<cl-icon name="cl-icon-arrow-right"></cl-icon>
										</cl-list-item>
	
										<!-- 加载更多 -->
										<cl-loadmore
											v-if="item.data.length > 0"
											:loading="item.loading"
											:finish="item.finished"
											:divider="false"
										></cl-loadmore>
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
export default {
	data() {
		const labels = [
			{
				label: "热门",
				value: 1,
				loaded: true
			},
			{
				label: "猜你喜欢",
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
			loading: true
		};
	},
	onLoad() {},
	onShow() {
		
	},
	mounted() {
		this.refresh()
	},
	methods: {
		onDown() {
			this.refresh({
				page: 1
			}).done(() => {
				this.$refs[`scroller-${this.current}`][0].end();
			});
		},

		onUp() {
			const { pagination, finished } = this.list[this.current];

			if (!finished) {
				this.refresh({
					page: pagination.page + 1
				});
			}
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

				// console.log("Refresh");

				setTimeout(() => {
					item.data = new Array(data.page == 1 ? 10 : data.page * 10).fill(1);
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

			/deep/.cl-list-item {
				height: 100rpx;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
			}
		}
	}
}
</style>
