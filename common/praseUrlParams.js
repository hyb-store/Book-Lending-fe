export function getQuery() {
	const url = decodeURI('?' + window.location.href.split('?')[1]); // 获取url中"?"符后的字串(包括问号)
	console.log(url)
	let query = {};
	if (url.indexOf("?") != -1) {
		const str = url.substr(1);
		const pairs = str.split("&");
		for (let i = 0; i < pairs.length; i++) {
			const pair = pairs[i].split("=");
			query[pair[0]] = pair[1];
		}
	}
	return query; // 返回对象
}
