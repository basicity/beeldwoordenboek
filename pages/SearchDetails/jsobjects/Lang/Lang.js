export default {
	data: [
		{
			"id": 25,
			"Name": "switchFavourite",
			"Dutch": "Bewaar als favoriet",
			"French": "Conserver comme favori",
			"English": "Store as favourite",
			"German": "Als Favorit speichern",
			"Page": "SearchDetails"
		}
	]


	,
	getName (element) {
		const foundElement = this.data.filter(i => i.Name == element)[0];
		if(appsmith.store.user){
			return foundElement[appsmith.store.user.InterfaceLanguage.value]	
		}else{
			return foundElement['English']	
		}
	}
}