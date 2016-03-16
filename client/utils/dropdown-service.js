(function () {

  angular.module('portfolio')
    .service('DropdownService', ['$rootScope', service] );

  function service ($rootScope) {
    var service = this;
    var _dropdowns = [];
    var _open = false;

    service.isOpen = function () {
      return _open;
    };

    service.registerAndOpenDropdown = function (nodes) {
      for ( var i = 0; i < nodes.length; i++ ) {
        if (nodes[i].style) {
          _dropdowns.push(nodes[i]);
          _open = true;
        }
      }
    };

    service.closeDropdowns = function () {
      for ( var i = 0; i < _dropdowns.length; i++ ) {
        var currentElement = angular.element(_dropdowns[i]);
        currentElement.remove();
        _open = false;
        _dropdowns = [];
      }
    };


    $rootScope.$on('documentClicked', function(inner, target) {
      if ( !_isDropdownButton(target) ) {
        service.closeDropdowns();
      }
    });

    function _isDropdownButton (element) {
      var classes = element[0].classList;
      var result = false;
      for ( var i = 0; i < classes.length; i++ ) {
        if ( classes[i] === 'btn-header_menu' ) {
          return true;
        }
      }
      return false;
    }

  }

})();
