export default {
	state: '',
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
			"Name": "StatusMessage",
			"Dutch": "Bezig met het ophalen van woorden, even geduld",
			"French": "Occup\u00e9 \u00e0 r\u00e9cup\u00e9rer des mots, soyez patient s'il vous pla\u00eet",
			"English": "Busy retrieving words, please be patient",
			"German": "Ich bin damit besch\u00e4ftigt, W\u00f6rter abzurufen, bitte haben Sie etwas Geduld",
			"Page": "SearchResults"
		},
		{
			"id": 26,
			"Name": "StatusMessageCompleteEmpty",
			"Dutch": "Geen woorden gevonden, zoek opnieuw",
			"French": "Aucun mot trouv\u00e9, veuillez rechercher \u00e0 nouveau",
			"English": "No words found, please search again",
			"German": "Keine W\u00f6rter gefunden, bitte suchen Sie erneut",
			"Page": "SearchResults"
		},
		{
			"id": 27,
			"Name": "StatusMessageCompleteResult",
			"Dutch": "woorden gevonden",
			"French": "mots ont \u00e9t\u00e9 trouv\u00e9s",
			"English": "words found",
			"German": "w\u00f6rter gefunden",
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