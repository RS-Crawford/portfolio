(function () {

  var portfolio = angular.module('portfolio', ['ui.router']);

  // configure our routes
  portfolio.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/landing');

    $stateProvider
      // route for the landing page
      .state('landing', {
        url: '/landing',
        templateUrl : '/client/landing/landing.html',
        controller  : 'LandingCtrl'
      })
      // route for the about page
      .state('about', {
        url: '/about',
        templateUrl : '/client/about/about.html',
        controller  : 'AboutCtrl'
      })
      .state('article', {
        url: '/article',
        templateUrl : '/client/article/article.html',
        controller  : 'LandingCtrl'
      });
      
  });

  portfolio.run(function($rootScope) {
    angular.element(document).on('click', function(e) {
      $rootScope.$broadcast('documentClicked', angular.element(e.target));
    });
  });


})();
