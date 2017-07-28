(function() {

  angular
    .module('towerApp')
    .controller('TowerController', TowerController)

  TowerController.$inject = ['$http']

  function TowerController($http) {
    const vm = this;
    const towersURL = "https://intense-island-70998.herokuapp.com/api/v1/towers/"

    vm.$onInit = function() {
      $http.get(towersURL)
        .then(results => {
          console.log(results);
          vm.towers = results.data
        })

    }

  }

}());
