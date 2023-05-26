export default {
	myVar1: [],
	myVar2: {},
	filterTermsByCategory () {
		//	use async-await or promises
		return GetTermsBySearch.data.results.filter(t => appsmith.URL.queryParams.categories.includes(t.Category[0].id));
	}
}