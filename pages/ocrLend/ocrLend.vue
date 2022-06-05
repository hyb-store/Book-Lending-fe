<template>
	<view>
		请选择您要识别的图片
		<uni-file-picker ref="files" @select="select" v-model="imageValue" fileMediatype="image" :limit="1"
			:auto-upload="false" :image-styles="imageStyles" />
			<view>
		<cl-tag v-for="tag in ocrTags" plain>{{tag}}</cl-tag>
		</view>
		<cl-toast ref="toast"></cl-toast>
	</view>
</template>

<script>
	import FormData from '../../common/formdata.js'
	import {
		baseUrl
	} from '../../common/constant.js'
	export default {
		data() {
			return {
				ocrTags: []
			}
		},
		methods: {

			select(e) {
				console.log('选择文件:::::::', e)
				const img = e.tempFilePaths[0];
				const formData = new FormData();
				formData.appendFile('file', img);
				const data = formData.getData()
				uni.request({
					method: 'post',
					url: `${baseUrl}borrow/ocr`,
					data: data.buffer,
					header: {
						"content-type": data.contentType,
					}
				}).then(res => {
					const ocrRes = res[1].data.data
					console.log(ocrRes)
					this.$refs["toast"].open({
						type: 'success',
						position: 'middle',
						message: "识别成功",
					});
					const {
						words_result_num: tagCount,
						words_result
					} = ocrRes;
					this.ocrTags = words_result.map(item => item.words)
				})
			},
		}
	}
</script>

<style>
	.tag-container {
		margin: 0 10px 10px 0;
	}
</style>
