export default {
	myVar1: [],
	myVar2: {},
	convertToLanguages () {
		const result = [{language: 'Français', value: ''}, {language: 'Deutsch', value: ''},{language: 'English', value: ''}];
		result[0].value = `${result[0].language}: ${GetTermById.data.French}`;
		result[1].value = `${result[1].language}: ${GetTermById.data.German}`;
		result[2].value = `${result[2].language}: ${GetTermById.data.English}`;
		return result;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}