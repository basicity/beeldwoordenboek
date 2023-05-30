export default {
	myVar1: [],
	myVar2: {},
	async ChangeFavouritesState () {
		console.log(appsmith.store.user)
		if(switchFavourite.isSwitchedOn){
			// add the id to the array if not already in the array
			const user = appsmith.store.user;
			const index = appsmith.store.user.Favourites.indexOf(parseInt(idField.text));
			if(index == -1){
				user.Favourites.push(parseInt(idField.text));
				storeValue("user",user);
			}
		}else{
			const index = appsmith.store.user.Favourites.indexOf(parseInt(idField.text));
			if(index > -1){
				appsmith.store.user.Favourites.splice(index,1)
			}
		}
		const result = await UpdateFavourites.run();
	}
}