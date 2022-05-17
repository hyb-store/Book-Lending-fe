if (!String.prototype.padStart) {
	// 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
	String.prototype.padStart = function(maxLength, fillString = ' ') {
		if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError(
			'fillString must be String')
		let str = this
		// 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
		if (str.length >= maxLength) return String(str)

		let fillLength = maxLength - str.length,
			times = Math.ceil(fillLength / fillString.length)
		while (times >>= 1) {
			fillString += fillString
			if (times === 1) {
				fillString += fillString
			}
		}
		return fillString.slice(0, fillLength) + str;
	}
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
const timeFormat = (date, type = 1) => {
	const arr1 = date.split("T");
	const arr2 = arr1[1].split(".");
	let time1 = arr1[0] + " "+ arr2[0],
			time2 = arr1[0]
	
	if (type === 1) {
		return time1
	} else if (type === 2) {
		return time2
	}
}

export { timeFormat }
