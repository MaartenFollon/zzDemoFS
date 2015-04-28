sap.ui.jsview("be.kuleuven.zz_demo_fs.mvc.views.RoutePattern", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mvc.views.Home
	*/ 
	getControllerName : function() {
		return "be.kuleuven.zz_demo_fs.mvc.controllers.RoutePattern";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mvc.views.Home
	*/ 
	createContent : function(oController) {
		jQuery.sap.require("sap.ui.layout.Grid");
		jQuery.sap.require("sap.ui.layout.form.SimpleForm");
		jQuery.sap.require("sap.ui.core.Title");
		
 		return new sap.m.Page({
			title: "{i18n>routePattern_titel}",
			"showNavButton": true,
			"navButtonTap": [ oController.backButtonPressed, oController ],
			content: [
			  new sap.ui.layout.Grid("argumentsGrid",{
				  "width": "auto",
				  "defaultSpan": "L12 M12 S12",
				  "content": [
		              new sap.ui.layout.form.SimpleForm({
		            	"maxContainerCols": 2,
		            	"editable": false,
		            	"layout": "ResponsiveGridLayout",
		            	"title": "{i18n>routePattern_formTitel}",
		            	"minWidth": 800,
		            	"labelSpanL": 3,
		            	"labelSpanM": 3,
		            	"emptySpanL": 4,
		            	"emptySpanL": 4,
		            	"columnsL": 1,
		            	"columnsM": 1,
		            	"class": "editableForm",
		            	"content": [
		            	   new sap.ui.core.Title({
		            		   "text": "{i18n>routePattern_eventUitleg}"
		            	   }),
		            	   new sap.m.Label({
		            		   "text": "{i18n>routePattern_id}"
		            	   }),
		            	   new sap.m.Input({
		            		   "value": "{/id}",
		            		   "editable": false
		            	   }),
		            	   new sap.m.Label({
		            		   "text": "{i18n>routePattern_detailId}"
		            	   }),
		            	   new sap.m.Input({
		            		   "value": "{/detailId}",
		            		   "editable": false
		            	   }),
		            	   new sap.m.Label({
		            		   "text": "{i18n>routePattern_query}"
		            	   }),
		            	   new sap.m.Input({
		            		   "value": "{/query}",
		            		   "editable": false
		            	   })
		            	]
		              })
				  ]
			  })
			]
		});
	}

});