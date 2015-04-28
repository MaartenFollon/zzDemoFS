sap.ui.jsview("be.kuleuven.zz_demo_fs.mvc.views.Voorbeelden", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc.views.Examples
	*/ 
	getControllerName : function() {
		return "be.kuleuven.zz_demo_fs.mvc.controllers.Voorbeelden";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc.views.Examples
	*/ 
	createContent : function(oController) {
		
		 jQuery.sap.require("be.kuleuven.zs_ui5_utils.util.Formatter");
		
 		return new sap.m.Page({
 			"title": "{i18n>voorbeelden_titel}",
 			"showNavButton": true,
			"navButtonTap": [ oController.backButtonPressed, oController ],
 			"subHeader": new sap.m.Bar({
 				"contentMiddle": [
 				   new sap.m.SearchField("searchField",{
 					   "liveChange": [oController.onSearch,oController],
 					   "placeholder": "{i18n>voorbeelden_voorbeeldenZoeken}"
 				   }) 
 				]
 			}),
			"content": [
			  new sap.m.List("exampleList",{
				  "items": {
					  "path": "exampleModel>/examples", 
					  "template": new sap.m.StandardListItem({
						  "title": {
							  "path": "exampleModel>name",
							  "formatter": be.kuleuven.zs_ui5_utils.util.Formatter.uppercaseFirstChar
						  },
						  "press": [oController.navToExample,oController],
						  "type": sap.m.ListType.Navigation
					  }).data("view", "{exampleModel>view}")
				  }
			  })
			]
		});
	}

});