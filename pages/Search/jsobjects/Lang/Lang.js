export default {
	data: [
		{
			"id": 8,
			"Name": "Organisation",
			"Dutch": "Organisatie",
			"French": "Organisation",
			"English": "Organisation",
			"German": "Organisation",
			"Page": "Search"
		},
		{
			"id": 9,
			"Name": "inputSearch",
			"Dutch": "Zoek op woord (elke taal)",
			"French": "Recherche par mot (n'importe quelle langue)",
			"English": "Search by word (any language)",
			"German": "Suche nach Wort (jede Sprache)",
			"Page": "Search"
		},
		{
			"id": 10,
			"Name": "selectCategories",
			"Dutch": "Selecteer de categorie\u00ebn",
			"French": "S\u00e9lectionnez les cat\u00e9gories",
			"English": "Select the categories",
			"German": "W\u00e4hlen Sie die Kategorien aus",
			"Page": "Search"
		},
		{
			"id": 11,
			"Name": "Profile",
			"Dutch": "Profiel",
			"French": "Profil",
			"English": "Profile",
			"German": "Profil",
			"Page": "Search"
		},
		{
			"id": 12,
			"Name": "actionSearch",
			"Dutch": "Zoeken",
			"French": "Chercher",
			"English": "Search",
			"German": "Suchen",
			"Page": "Search"
		},
		{
			"id": 13,
			"Name": "My list",
			"Dutch": "Mijn lijst",
			"French": "Ma liste",
			"English": "My list",
			"German": "Meine Liste",
			"Page": "Search"
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