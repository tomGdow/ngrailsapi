angular.module('myApp.controllers', ['ngSanitize',  'ngResource'
])
.controller('MyNavCtrl', ['$scope', '$route', '$location','$sce','functions',
    function ($scope, $route, $location, $sce, functions) {

      var vm = this;
      $scope.$watch(function(vm){
        return $location.path();
      }, function(value){
        vm.active=functions.activeNav(value);
      });
    }
])
.controller('MyCtrl1', ['constants', 'functions', 
    function (constants, functions) {

      var vm = this;
      vm.templateTitle = constants.TEMPLATE_ONE_TITLE; 
      functions.retrieveJson('products').then(function(data) {
        vm.products = data;
        console.log(data)
      });
      vm.productId = function (arg) {
        functions.product.setId(arg);
      } 
      vm.view = 'view4';
    }                         
])
.controller('MyCtrl2', ['$scope', 'constants', 'functions', 'Product',
    function ($scope, constants, functions, Product) {

      var vm = this;
      vm.templateTitle = constants.TEMPLATE_TWO_TITLE; 
      vm.products = Product.query();
      vm.productId = function (arg) {
        functions.product.setId(arg);
      }
      vm.view = 'view5';
    }
])
.controller('MyCtrl3', ['$scope', 'functions', 'constants', '$sce',
    function ($scope, functions, constants, $sce) {

      var vm = this;
      vm.templateTitle = constants.TEMPLATE_THREE_TITLE; 
    }
])
.controller('MyCtrl4', ['$scope', 'functions', 'constants', '$sce', 'Product',
    function ($scope, functions, constants, $sce, Product) {

      //Show

      var currentId  = functions.product.getId();
      var vm = this;
      vm.currentId = currentId;
      vm.templateTitle = constants.TEMPLATE_THREE_TITLE; 

      functions.fetchJson('products').then(function(data) {
        vm.show = data;
      });

      vm.showalt = Product.get({id: currentId});
    }
]);
