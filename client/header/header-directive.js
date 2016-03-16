// header.js
(function () {

  angular.module('portfolio')
    .directive( 'headerTemplate', buildHeader );

  var controller = ['$scope', '$state', 'DataService', function ($scope, $state, DataService) {

    $scope.goToBlog = function () {
      DataService.generateBlogContent();
      $state.go('landing');
    };

    $scope.goToPortfolio = function () {
      DataService.generateProjectContent();
      $state.go('landing');
    };

    $scope.goToAbout = function () {
      $state.go('about');
    };

  }];

  function buildHeader () {
    return {
      restrict: 'AE',
      templateUrl: 'client/header/header-dir.tmpl.html',
      controller: controller
    };
  }

})();
