export default {
	data: [
		{
			"id": 1,
			"Name": "Profile",
			"Dutch": "Profiel",
			"French": "Profil",
			"English": "Profile",
			"German": "Profil",
			"Page": "Profile"
		},
		{
			"id": 2,
			"Name": "Search",
			"Dutch": "Zoeken",
			"French": "Chercher",
			"English": "Search",
			"German": "Suchen",
			"Page": "Profile"
		},
		{
			"id": 3,
			"Name": "My list",
			"Dutch": "Mijn lijst",
			"French": "Ma liste",
			"English": "My list",
			"German": "Meine Liste",
			"Page": "Profile"
		},
		{
			"id": 4,
			"Name": "inputUsername",
			"Dutch": "Uw gebruikersnaam (e-mail)",
			"French": "Votre nom d'utilisateur (e-mail)",
			"English": "Your username (e-mail)",
			"German": "Ihr Benutzername (E-Mail)",
			"Page": "Profile"
		},
		{
			"id": 5,
			"Name": "selectLanguage",
			"Dutch": "Selecteer uw taal",
			"French": "S\u00e9lectionnez votre langue",
			"English": "Select your primary language",
			"German": "W\u00e4hlen Sie Ihre Hauptsprache aus",
			"Page": "Profile"
		},
		{
			"id": 6,
			"Name": "selectOrganisation",
			"Dutch": "Selecteer uw organisatie",
			"French": "S\u00e9lectionnez votre organisation",
			"English": "Select your organisation",
			"German": "W\u00e4hlen Sie Ihre Organisation aus",
			"Page": "Profile"
		},
		{
			"id": 7,
			"Name": "actionSave",
			"Dutch": "Opslaan",
			"French": "Sauvegarder",
			"English": "Save",
			"German": "Speichern",
			"Page": "Profile"
		},
		{
			"id": 14,
			"Name": "selectSector",
			"Dutch": "Select uw sector",
			"French": "S\u00e9lectionnez votre secteur",
			"English": "Select your sector",
			"German": "W\u00e4hlen Sie Ihre Branche aus",
			"Page": "Profile"
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