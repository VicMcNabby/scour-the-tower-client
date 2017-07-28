(function() {

  angular
    .module('towerApp')
    .config(config)

  function config($stateProvider, $locationProvider, $urlServiceProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state('home', {
        url: '/towers',
        component: 'towers'
      }).state('users', {
        url: '/users',
        component: 'users'
      }).state('tower1', {
        url: '/towers/1',
        component: 'tower1'
      })

    $urlServiceProvider.rules.otherwise({
      state: 'home'
    })
  }

}());
