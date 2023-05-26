export default {
	myVar1: [],
	myVar2: {},
	getCategories: () => {	
		return GetCategories.data.results.map(item => {
			const obj = Object.assign({}, item);
			obj['label'] = item.Category_English;
			obj['value'] = item.id;
			return obj;		
		})
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}