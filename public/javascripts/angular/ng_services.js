'use strict';
/* Services */
angular.module('myApp.services', [])
.value('version', '0.1')
.constant('constants', {

	APP_TITLE: 'ngrailsapi',
	APP_OWNER: 'Tom Doe',
	TEMPLATE_ONE_TITLE: 'Template 1',
	TEMPLATE_TWO_TITLE: 'Template 2',
	TEMPLATE_THREE_TITLE: 'Template 3',
	TEMPLATE_FOUR_TITLE: 'Template 4',
	APP_DESCRIPTION: 'An AngularJS Single Page Application',
	APP_VERSION: '1.0'

})
.factory('functions', ['$http', function ($http) {

	function activeNav (location){
		//make navbar active tab correspond with url hash
		function activeHelper(arg) {
			return arg.test(location);
		};

		var data = {
			"nav1" : {"url": "view1", "class": "home"},
			"nav2" : {"url": "view2", "class": "viewtwo"},
			"nav3" : {"url": "view3", "class": "viewthree"},
      "nav4" : {"url": "view4", "class": "viewalt"},
      "nav5" : {"url": "view5", "class": "viewalt2"},
		}; 

		switch (true) {
			case activeHelper(RegExp(data.nav1.url)):
				return  data.nav1.class;
				break;
			case activeHelper(RegExp(data.nav2.url)):
				return data.nav2.class;
				break;
			case activeHelper(RegExp(data.nav3.url)):
				return data.nav3.class;
				break;
      case activeHelper(RegExp(data.nav4.url)):
        return  data.nav4.class;
        break;
      case activeHelper(RegExp(data.nav5.url)):
        return  data.nav5.class;
        break;
			default:
				return data.nav1.class;
		}
	}

	var product =  {
		data: {id: ''},
		setId: function(arg) {
			this.data.id = arg;
		},
		getId: function() {
			return this.data.id;
		}
	}

	function retrieveJson(arg) {
		return $http({
			method: 'GET',
			url: './' + arg
		}).then(function successCallback(response) {
			return response.data;
		}); 
	};

	function fetchJson(arg) {
		return $http({
			method: 'GET',
			url: '../' + arg + '/' + product.getId()+'.json'
		}).then(function successCallback(response) {
			return response.data;
		});
	};

	return {
		activeNav: activeNav,
		product: product,
		retrieveJson: retrieveJson,
		fetchJson: fetchJson,

	};

}])
.factory("Product", function ($resource) {
	return $resource("/products/:id", {id: "@id"}, {'update': {method: "PUT"}});
}); 

