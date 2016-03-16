// mobile-dropdown-menu.js
(function () {

  angular.module('portfolio')
    .directive( 'mobileDropdownMenu', buildMobileMenu );

  var controller = ['$scope', '$state', 'DataService', function ($scope, $state, DataService) {

    $scope.goToBlog = function () {
      console.log('going blog!');
      DataService.generateBlogContent();
      $state.go('landing');
    };

    $scope.goToPortfolio = function () {
      console.log('going portfolio!');
      DataService.generateProjectContent();
      $state.go('landing');
    };

    $scope.goToAbout = function () {
      console.log('going about!');
      $state.go('about');
    };

  }];

  function buildMobileMenu () {
    return {
      restrict: 'AE',
      replace: false,
      templateUrl: 'client/mobile-dropdown-menu/mobile-dropdown-menu-dir.tmpl.html',
      controller: controller
    };
  }

})();
