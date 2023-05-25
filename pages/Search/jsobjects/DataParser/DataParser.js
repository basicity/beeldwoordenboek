export default {
	myVar1: [],
	myVar2: {},
	getSectors: () => {	
		return GetSectors.data.results.map(item => {
			const obj = Object.assign({}, item);
      obj['label'] = item.Name;
			obj['value'] = item.Name;
      return obj;		
		})
	},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}