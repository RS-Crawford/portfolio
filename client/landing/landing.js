(function () {

  angular.module('portfolio')

    .service('LandingService', service )

    .controller('LandingCtrl', [ '$scope', '$state', 'DataService', 'Utilities', controller ]);

    function service () {
      var service = this;
    }

    function controller ($scope, $state, DataService, Utilities) {
      $scope.data = DataService.data;
      $scope.article = DataService.article;

      Utilities.watchServiceValueInScope(DataService, 'data', $scope);

      $scope.setArticle = function (name) {
        DataService.setArticle(name);
        $state.go('article');
      };

      Utilities.watchServiceValueInScope(DataService, 'article', $scope);

    }

})();
