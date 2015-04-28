sap.ui.jsview("be.kuleuven.zz_demo_fs.mvc.views.Voorbeeld", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc.views.Example
	*/ 
	getControllerName : function() {
		return "be.kuleuven.zz_demo_fs.mvc.controllers.Voorbeeld";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc.views.Example
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "{i18n>voorbeeld_titel}",
			"showNavButton": true,
			"navButtonTap": [ oController.backButtonPressed, oController ],
			content: [
			          new sap.m.Text({
			        	  "text": "{i18n>voorbeeld_inhoud}"
			          }),
			          new sap.m.Button({
			        	 "text": "{i18n>voorbeeld_naarHome}",
			        	 "press": [oController.navigateHome,oController]
			          })
			]
		});
	}
});