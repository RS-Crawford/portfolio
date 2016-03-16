(function () {

  angular.module('portfolio')
    .service('Utilities', service );

  function service () {
    var service = this;
    
    service.watchServiceValueInScope = function (inputService, value, scope) {
      scope.$watch(
        function () {
          return inputService[value];
        }, 
        function (newValue, oldValue) {
          if ( newValue !== oldValue ) {
              scope[value] = newValue;
          }
        }
      );
    };
  }

})();
