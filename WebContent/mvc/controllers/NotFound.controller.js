sap.ui.controller("be.kuleuven.zz_demo_fs.mvc.controllers.NotFound", {
	
	backButtonPressed: function(){
		sap.ui.core.UIComponent.getRouterFor(this).myNavBack("master");
	}

});