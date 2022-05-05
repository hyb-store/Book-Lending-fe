<template>
	<view class="content">
		<view class="book_list">
			<view class="book_row" @click="handleDetail(item)" v-for="(item, index) in bookInfo" :key="item._id">
				<image :src="item.bookImg" mode=""></image>
				<view class="book_tag">{{ item.tag }}</view>
				<view class="book_bottom">
					<view class="book_name">{{ item.bookName }}</view>
					<view class="book_author">{{ item.author }}</view>
				</view>
			</view>
		</view>
		<uni-load-more status="noMore"></uni-load-more>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bookInfo: []
		};
	},
	onLoad() {},
	onShow() {
		let array = uni.getStorageSync('bookHistory');
		if (array.length > 50) {
			array.splice(50);
		}
		this.bookInfo = array;
	},
	methods: {
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
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-top: 60rpx;
		.book_row {
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
				}
			}
		}
	}
}
</style>
