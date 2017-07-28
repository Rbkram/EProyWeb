(function(){
  angular
    .module('myApp')
    .controller('landingCtrl', landingCtrl);

    landingCtrl.$inject = ['$scope', '$location'];

    function landingCtrl($scope, $location){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        
       }init();

       // vm.logIn = function(event){
       //  event.preventDefault();
       //  $location.path('/login');
       // }

       

    }

     //se establece un objeto de angular normal

})();
