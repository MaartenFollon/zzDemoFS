sap.ui.controller("be.kuleuven.zz_demo_fs.mvc.controllers.Home", {
	
	/** navigate back
	 * 
	 */
	backButtonPressed: function(){
		sap.ui.core.UIComponent.getRouterFor(this).myNavBack("voorbeeld");
	}
});