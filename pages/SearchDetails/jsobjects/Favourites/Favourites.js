export default {
	myVar1: [],
	myVar2: {},
	async ChangeFavouritesState () {
		if(switchFavourite.isSwitchedOn){
			// add the id to the array
			appsmith.store.user.Favourites.push(parseInt(idField.text))
			console.log('in store');
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