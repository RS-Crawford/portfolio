(function () {

  angular.module('portfolio')

    .service('AboutService', service )

    .controller('AboutCtrl', [ '$scope', 'DataService', controller ]);

    function service () {

    }

    function controller ($scope, DataService) {
      $scope.content = DataService.aboutContent;
    }

})();
