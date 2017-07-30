(function(){
  angular
    .module('myApp')
    .controller('playerCtrl', playerCtrl);

    playerCtrl.$inject = ['$scope', '$location'];

    function playerCtrl($scope, $location){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador
      vm.selectedIndex = 0;

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        
       }init();

       // vm.buy = function(event){
       //  event.preventDefault();
       //  $location.path('/buyProperties');
       // }

    }

     //se establece un objeto de angular normal

})();
