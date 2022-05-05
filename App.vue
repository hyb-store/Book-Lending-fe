<script>
export default {
	onLaunch: function() {
		if (!uni.getStorageSync('userInfo')) {
			uni.login({
				provider: 'weixin',
				success(res) {
					const code = res.code
					
					uni.request({
						url: this.baseUrl + 'user/login',
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
			});
			
		}
		// if (!uni.setStorageSync('bookHistory')) {
		// 	uni.setStorageSync('bookHistory', []);
		// }
		//console.log(uni.getStorageSync('userInfo').openid)
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss";>
@import "cl-uni/index.scss";

/*每个页面公共css */
page {
	background: #ffffff;
}
button {
	border-radius: 0;
	border: none;
	padding: 0;
}

button::after {
	border-radius: 0;
	border: none;
	padding: 0;
}
</style>
