sap.ui.jsview("be.kuleuven.zz_demo_fs.mvc.views.Home", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc.views.Home
	*/ 
	getControllerName : function() {
		return "be.kuleuven.zz_demo_fs.mvc.controllers.Home";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc.views.Home
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "{i18n>home_titel}",
			"showNavButton": true,
			"navButtonTap": [ oController.backButtonPressed, oController ],
			content: [
			  new sap.m.Text({
				  "text": "{i18n>home_inhoud}"
			  })
			]
		});
	}

});