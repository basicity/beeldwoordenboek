export default {
	myVar1: [],
	myVar2: {},
	clear(){
		clearStore();
	},
	async saveUserprofile () {
		const checkUser = await CheckIfUserExists.run()
		if(checkUser.count == 0){
			// create a new user
			const user = await CreateNewUser.run();
			storeValue("user",user);
			showAlert("Created a new user", "success");
		}else{
			// update the existing user
			storeValue("user", checkUser.results[0]);
			const user = await UpdateExistingUser.run();
			storeValue("user",user);
			showAlert("Updated your profile", "success");
		}      
	}
}