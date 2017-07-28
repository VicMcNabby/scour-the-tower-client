(function() {
  angular
    .module('towerApp')
    .controller('NavbarController', NavbarController)

  NavbarController.$inject = ['$http']

  function NavbarController($http) {
    const vm = this

    const newUserURL = "https://intense-island-70998.herokuapp.com/auth/signup"

    vm.addUser = function() {

      let info = {
        "first_name": vm.newUser.first,
        "last_name": vm.newUser.last,
        "sex": vm.newUser.sex,
        "imageURL": vm.newUser.imageUrl,
        "email": vm.newUser.email,
        "password": vm.newUser.password,
        "tower_id": vm.newUser.tower_id
      }

      console.log(info);

      $http.post(newUserURL, info)
        .then(function(result) {

        })

    }
    console.log('hello from navbar');

  }
}());
