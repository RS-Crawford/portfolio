
(function () {

  angular.module('portfolio')
    .directive( 'footerTemplate', buildFooter );

  var controller = ['$scope', function ($scope) {

  }];

  function buildFooter () {
    return {
      restrict: 'AE',
      templateUrl: 'client/footer/footer-dir.tmpl.html',
      controller: controller
    };
  }

})();
