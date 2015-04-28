sap.ui.jsview("be.kuleuven.zz_demo_fs.mvc.views.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc/views.App
	*/ 
	getControllerName : function() {
		return null;
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc/views.App
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true);
		return new sap.m.App(this.createId("zz_demo_fs_idAppControl"));
	}
});