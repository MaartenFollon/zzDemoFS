jQuery.sap.require("be.kuleuven.zz_demo_fs.Router");
jQuery.sap.declare("be.kuleuven.zz_demo_fs.Component");

sap.ui.core.UIComponent.extend("be.kuleuven.zz_demo_fs.Component", {
	
	"metadata": {
        "name": "Demo toepassing Full Screen",
        "version": "1.0",
        "includes": ["css/style.css"],
        "dependencies": {
            "libs": ["sap.m"],
            "components": []
        },
        "rootView": {
        	"viewName": "be.kuleuven.zz_demo_fs.mvc.views.App",
        	"type": "JS",
        },
        "config": {
            "resourceBundle": "i18n/i18n.properties",
            "serviceConfig": {
                name : "",
                serviceUrl : ""
            },
            "titleResource": "AppTitle"
        },
        "routing": {
        	"config": {
				"routerClass": be.kuleuven.zz_demo_fs.Router,
				"viewType": sap.ui.core.mvc.ViewType.JS,
				"viewPath": "be.kuleuven.zz_demo_fs.mvc.views",
				"targetAggregation": "pages",
				"targetControl": "zz_demo_fs_idAppControl",
				"clearTarget": false
			},
			"routes" : [
				{
					"name": "master",
					"pattern": "",
					"view": "Voorbeelden"
				},
				{
					"name": "voorbeeld",
					"pattern": "voorbeeld",
					"view": "Voorbeeld"
				},
				{
					"name": "home",
					"pattern": "home",
					"view": "Home"
				}
				,
				{
					"name": "routePattern",
					"pattern": "routePattern/{id}/detail/:detailId:?{query}",
					"view": "RoutePattern"
				}
				,
				{
					"name": "catchallMaster",
					"pattern": ":all*:",
					"view": "NotFound"
				}
			]
        }
	},

	"init": function(){
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		
		if(typeof oBootstrap === "undefined"){ //add zs_ui5_utils to use reusable code (FLP)
			jQuery.sap.registerResourcePath("be/kuleuven/zs_ui5_utils","/sap/bc/ui5_ui5/sap/zs_ui5_utils/");
		}

        var config = this.getMetadata().getConfig();

        // always use absolute paths relative to our own component
        // (relative paths will fail if running in the Fiori Launchpad)
        var rootPath = jQuery.sap.getModulePath("be.kuleuven.zz_demo_fs");

        // set i18n model
        var i18nModel = new sap.ui.model.resource.ResourceModel({
            bundleUrl : [rootPath, config.resourceBundle].join("/")
        });
        this.setModel(i18nModel, "i18n");
        
//      Create and set domain model to the component
//        var serviceUrl = config.serviceConfig.serviceUrl;
//        var oDataModel = new sap.ui.model.odata.ODataModel(serviceUrl, true);
//        oDataModel.setDefaultCountMode(sap.ui.model.odata.CountMode.None); 
//        oDataModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
//        this.setModel(oDataModel);
        
        var exampleModel = new sap.ui.model.json.JSONModel({
        	"examples": [
        	   {
        		   "name": "voorbeeld",
        		   "view": "voorbeeld"
        	   },
        	   {
        		   "name": "route pattern",
        		   "view": "routePattern"
        	   }
        	]
        });
        this.setModel(exampleModel,"exampleModel");

        // set device model
        var deviceModel = new sap.ui.model.json.JSONModel({
            isTouch : sap.ui.Device.support.touch,
            isNoTouch : !sap.ui.Device.support.touch,
            isPhone : sap.ui.Device.system.phone,
            isNoPhone : !sap.ui.Device.system.phone,
            listMode : sap.ui.Device.system.phone ? sap.m.ListMode.None : sap.m.ListMode.SingleSelectMaster,
            listItemType : sap.ui.Device.system.phone ? sap.m.ListType.Active : sap.m.ListType.Inactive
        });
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");
        
        this.getRouter().initialize();
	}
});