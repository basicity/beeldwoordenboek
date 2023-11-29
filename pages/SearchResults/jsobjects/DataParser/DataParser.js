export default {
	page: 1,
	filteredTermsByCategory: [],
	resetPage(){ 
		this.page = 1
	},
	async filterTermsByCategory () {
		Lang.state = 'StatusMessage'
		
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
		
		if(appsmith.URL.queryParams.exact == 'true'){
			
			console.log('filter exact word');
			const word = appsmith.URL.queryParams.keyword.toLowerCase();
			console.log(word);
			this.filteredTermsByCategory = this.filteredTermsByCategory.filter(w => {
				const names = w.Name.toLowerCase().split(' - ');
				console.log(names);
				return names.includes(word)				
			})
		}
		
		this.filteredTermsByCategory.length == 0 ? Lang.state = 'StatusMessageCompleteEmpty' : Lang.state = 'StatusMessageCompleteResult'
	}
}