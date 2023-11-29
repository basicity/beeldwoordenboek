export default {
	page: 1,
	filteredTermsByCategory: [],
	resetPage(){ 
		this.page = 1
	},
	async filterTermsByCategory () {
		//	use async-await or promises
		const terms = [];
		this.page = 1;
		const data = await GetTermsBySearch.run();
		data.results.forEach(t => terms.push(t));


		const pages = Math.ceil(data.count / 100);
		
		for(this.page = 2; this.page <= pages; this.page++){
			const data = await GetTermsBySearch.run();
			data.results.forEach(t => terms.push(t));
		}
		
		if(appsmith.URL.queryParams.categories){
			this.filteredTermsByCategory = terms.filter(t => appsmith.URL.queryParams.categories.includes(t.Category[0].id));	
		}else{
			this.filteredTermsByCategory = terms;
		}
		
		this.filteredTermsByCategory.length == 0 ? NotFoundMessage.setVisibility(true) : NotFoundMessage.setVisibility(false)
	}
}