export default {
	getCategories: () => {	
		return GetCategories.data.results.map(item => {
			const obj = Object.assign({}, item);
			obj['label'] = item[`Category_${appsmith.store.user ? appsmith.store.user.InterfaceLanguage.value : 'English'}`];
			obj['value'] = item.id;
			return obj;		
		})
	}
}