export default {
	myVar1: [],
	myVar2: {},
	getSectors: () => {	
		return GetSectors.data.results.map(item => {
			const obj = Object.assign({}, item);
			obj['label'] = `${item.Icon} ${item.Name}`;
			obj['value'] = item.Name;
			return obj;		
		})
	},
	getOrganisations: () => {	
		return GetCompaniesBySector.data.results.map(item => {
			const obj = Object.assign({}, item);
			obj['label'] = `${item.Name} (${item.City})`;
			obj['value'] = item.id;
			return obj;		
		})
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}