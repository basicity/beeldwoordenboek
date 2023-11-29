export default {
	data: [
		{
			"id": 15,
			"Name": "Profile",
			"Dutch": "Profiel",
			"French": "Profil",
			"English": "Profile",
			"German": "Profil",
			"Page": "SearchResults"
		},
		{
			"id": 16,
			"Name": "Search",
			"Dutch": "Zoeken",
			"French": "Chercher",
			"English": "Search",
			"German": "Suchen",
			"Page": "SearchResults"
		},
		{
			"id": 17,
			"Name": "My list",
			"Dutch": "Mijn lijst",
			"French": "Ma liste",
			"English": "My list",
			"German": "Meine Liste",
			"Page": "SearchResults"
		},
		{
			"id": 18,
			"Name": "NotFoundMessage",
			"Dutch": "Geen items gevonden, zoek opnieuw",
			"French": "Aucun \u00e9l\u00e9ment trouv\u00e9, recherchez \u00e0 nouveau",
			"English": "No items found, search again",
			"German": "Keine Artikel gefunden, suchen Sie erneut",
			"Page": "SearchResults"
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