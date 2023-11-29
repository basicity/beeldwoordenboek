export default {
	page: 1,
	filteredTermsByCategory: [],
	resetPage(){ 
		this.page = 1
	},
	async filterTermsByCategory () {
		Lang.state = 'StatusMessage'
		//	use async-await or promises
		const terms = [];
		this.page = 1;
		const data = await GetTermsBySearch.run();
		data.results.forEach(t => terms.push(t));
		//console.log(terms);


		const pages = Math.ceil(data.count / 100);
		//console.log(pages);
		
		for(this.page = 2; this.page <= pages; this.page++){
			const data = await GetTermsBySearch.run();
			data.results.forEach(t => terms.push(t));
		}
		
		if(appsmith.URL.queryParams.categories){
			this.filteredTermsByCategory = terms.filter(t => appsmith.URL.queryParams.categories.includes(t.Category[0].id));	
		}else{
			this.filteredTermsByCategory = terms;
		}
		
		this.filteredTermsByCategory.length == 0 ? Lang.state = 'StatusMessageCompleteEmpty' : Lang.state = 'StatusMessageCompleteResult'
	}
}