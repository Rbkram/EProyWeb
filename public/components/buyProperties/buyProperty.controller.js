(function(){
  angular
  .module('myApp')
  .controller('buyPropCtrl', buyPropCtrl);

  buyPropCtrl.$inject = ['$scope', '$location', '$mdDialog', 'imageService', 'playerService','propertiesService'];

    function buyPropCtrl($scope, $location, $mdDialog, imageService, playerService, propertiesService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var vm = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        vm.players = playerService.getPlayers();
        vm.properties = propertiesService.getProperties();
      }init();

      vm.buy = function(pProp, pPlayer) {
        console.log(pProp);
        console.log(pPlayer);
        // for (var i = 0; i < vm.players.length; i++) {
        //   var moneyUpdate = 0;

        //   if (pInfo.player === vm.players[i].id) {
        //     if (vm.players[i].money >= pInfo.price) {
        //       moneyUpdate = vm.players[i].money - pInfo.price;
        //       vm.players[i].money = moneyUpdate;
        //       playerService.updatePlayer(vm.players[i]);
        //     }
        //   }
        // }
        // for (var j = 0; j < vm.properties.length; j++) {
        //   if (pInfo.id === vm.properties[j].id) {
        //     vm.properties[i].ownedby = pInfo.player;
        //     propertiesService.updateProperty(vm.properties[i]);
        //   }
        // }
      };


    }

     //se establece un objeto de angular normal

   })();
