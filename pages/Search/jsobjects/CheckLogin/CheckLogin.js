export default {
	CheckUsers () {
		// navigate to the profile page if a user does not exist
		if(!appsmith.store.user){
			navigateTo('Profile')
		}
	}
}