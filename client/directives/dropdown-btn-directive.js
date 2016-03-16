
(function () {

  angular.module('portfolio')
    .directive( 'dropdownBtn', buildDropdownBtn );

  var controller = ['$scope', '$compile', 'DropdownService', function ($scope, $compile, DropdownService) {


    $scope.toggleDropdown = function (elem) {
      if ( !DropdownService.isOpen() ) {
        $scope.appendDropdownMenu(elem);
        var nodes = Array.prototype.slice.call(elem[0].childNodes);
        DropdownService.registerAndOpenDropdown(nodes);
      } else if ( DropdownService.isOpen() ) {
        DropdownService.closeDropdowns();
      }
    };

    $scope.appendDropdownMenu = function (elem) {
      elem.append($compile('<div mobile-dropdown-menu></div>')($scope));
    };

  }];

  function buildDropdownBtn ($compile) {
    return {
      restrict: 'A',
      replace: false,
      template: null,
      controller: controller,
      link: function (scope, elem, attrs) {
              elem.bind('click', function () {
                scope.toggleDropdown(elem);
              });
            }
    };
  }

})();
