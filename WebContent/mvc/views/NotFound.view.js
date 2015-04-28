sap.ui.jsview("be.kuleuven.zz_demo_fs.mvc.views.NotFound", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc.views.NotFound
	*/ 
	getControllerName : function() {
		return "be.kuleuven.zz_demo_fs.mvc.controllers.NotFound";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc.views.NotFound
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "{i18n>notFound_titel}",
			"showNavButton": true,
			"navButtonTap": [ oController.backButtonPressed, oController ],
			content: [
			  new sap.m.Text({
				  "text": "{i18n>notFound_inhoud}"
			  })
			]
		});
	}

});