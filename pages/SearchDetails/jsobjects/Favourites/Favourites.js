export default {
	myVar1: [],
	myVar2: {},
	async ChangeFavouritesState () {
		if(switchFavourite.isSwitchedOn){
			// add the id to the array
			const user = appsmith.store.user;
			user.Favourites.push(parseInt(idField.text));
			storeValue("user",user);
			console.log('in store');
			console.log(appsmith.store.user)
		}else{
			console.log('switch off');
			const index = appsmith.store.user.Favourites.indexOf(parseInt(idField.text));
			if(index > -1){
				appsmith.store.user.Favourites.splice(index,1)
			}
		}
		const result = await UpdateFavourites.run();
	}
}