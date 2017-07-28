(function() {

  angular
    .module('towerApp')
    .controller('UserController', UserController)


  UserController.$inject = ['$http']

  function UserController($http) {
    const vm = this;
    const residentsURL = "https://intense-island-70998.herokuapp.com/api/v1/residents/"

    vm.$onInit = function() {
      $http.get(residentsURL)
        .then(results => {
          console.log(results);
          vm.residents = results.data
        })

    }

  }

})()
