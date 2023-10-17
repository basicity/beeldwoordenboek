export default {
	getCategories: () => {	
		return GetCategories.data.results.map(item => {
			const obj = Object.assign({}, item);
			obj['label'] = item.Category_English;
			obj['value'] = item.id;
			return obj;		
		})
	}
}