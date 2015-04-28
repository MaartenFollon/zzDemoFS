sap.ui.controller("be.kuleuven.zz_demo_fs.mvc.controllers.Voorbeelden", {
	
	/** navigate back
	 * 
	 */
	backButtonPressed: function(oEvent){
		window.history.go(-1);
	},

	/** search through examples
	 * 
	 * @param oEvent {object} liveChange event object
	 * 
	 */
	onSearch: function(oEvent){
		var filter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, oEvent.getParameters().newValue);
		var listBinding = sap.ui.getCore().byId("exampleList").getBinding("items");
		if(typeof listBinding !== "undefined"){
			listBinding.filter([ filter ]);
		}
	},
	
	/** route to correct view
	 * 
	 * @param oEvent {object} list select event object
	 * 
	 */
	navToExample: function(oEvent){
		var routeName =  oEvent.getSource().data("view");
		var bReplace = false; //use hash to be able to use browser back button
		
		if(routeName === "routePattern"){
			sap.ui.core.UIComponent.getRouterFor(this).navTo("routePattern", {
				from: "voorbeelden",
				id: "1234",
				detailId: "detailId1",
				query: "key1=val1&key2=val2"
			}, bReplace);
		} else {
			sap.ui.core.UIComponent.getRouterFor(this).navTo(routeName, {
				from: "voorbeelden"
			}, bReplace);
		}
	}
});