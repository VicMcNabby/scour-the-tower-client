(function() {

  angular
    .module('towerApp')
    .controller('Tower1Controller', Tower1Controller)

  Tower1Controller.$inject = ['$http']

  function Tower1Controller($http) {
    const vm = this;
    const tower1URL = "https://intense-island-70998.herokuapp.com/api/v1/towers/1"

    vm.$onInit = function() {
      $http.get(tower1URL)
        .then(results => {
          console.log(results);
          vm.towers = results.data
        })

    }

  }

}());
