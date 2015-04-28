sap.ui.controller("be.kuleuven.zz_demo_fs.mvc.controllers.Voorbeeld", {

	/** navigate back
	 * 
	 */
	backButtonPressed: function(){
		sap.ui.core.UIComponent.getRouterFor(this).myNavBack();
	},
	
	/** route to home
	 * 
	 */
	navigateHome: function(oEvent){
		var bReplace = false; //use hash to be able to use browser back button
		sap.ui.core.UIComponent.getRouterFor(this).navTo("home", {
			from: "voorbeeld"
		}, bReplace);
	}

});