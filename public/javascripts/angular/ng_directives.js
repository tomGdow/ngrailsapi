'use strict';
/* Directives */
angular.module('myApp.directives', []).
directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}])
.directive('productTable', function () {
  return {
    scope: {collection: '=',
      'sendId': '&onSend'}, 
      restrict: 'E',
      templateUrl: function (elem, attr) {
        return './html/' + attr.template + '.html'
      } 
  }
})
.directive('showTable', function () {
  return {
    scope: {item: '='}, 
      restrict: 'E',
      templateUrl: function (elem, attr) {
        return './html/' + attr.template + '.html'
      } 
  }
});
