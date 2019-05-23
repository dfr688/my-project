import Axios from 'axios'
const sha1 = require('js-sha1')




export default{
	getSign(data) {
		//拼接字符串
		const secret_key = "q23ej@%xdj211JDssFd";
		let str = secret_key;
		Object.keys(data).forEach(function(key){
			// console.log(key,obj[key]);
			str = str + key + data[key];
		});
		str = str + secret_key;
		// sha1加密
		 let sha1_value = sha1(str);
		 sha1_value = sha1_value.toUpperCase();
		 // console.log(sha1_value)
		return sha1_value;
	},
	// 封装axios
	postReq(data,type="post") {
		const url = "http://211.149.225.239/service";
		return new Promise((resolve,reject) => {
				if(type === "post"){
					Axios.post(url,data).then(res => {
						resolve(res.data);
						// console.log(res);
					}).catch(err =>{
						reject(err);
					})
				}
		})
	}
}