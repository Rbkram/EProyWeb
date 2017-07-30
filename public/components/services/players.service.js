(function(){
  'use strict';
  angular
  .module('myApp')
  .service('playerService', playerService);

  function playerService(){
    var players = [
  {
    id: '001',
    name:'Goku',
    alias: 'Kokkun',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'
  },
  {
    id: '002',
    name:'Piccolo',
    alias: 'PikOREO',
    money: 1500,
  photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    id: '003',
    name:'Logan',
    alias: 'Lovezno',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {
    id: '004',
    name:'Bomberman',
    alias: 'Don Pepe y los Globos',
    money: 1500,
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }
];
    var publicAPI = {
      setPlayers : _setPlayers,
      getPlayers : _getPlayers
      //updateCompetition : _updateCompetition
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    // Función para guardar eventos
    function _setPlayers(pPlayer){
      var playersList = _getPlayers();
      playersList.push(pPlayer);
      localStorage.setItem('lsPlayersList', JSON.stringify(playersList));
      console.log(playersList);
    }

    // Función para extraer información de eventos
    function _getPlayers(){
      var playersList = JSON.parse(localStorage.getItem('lsPlayersList'));
      if(playersList == null){
        playersList = players;
      }
      return playersList;
    }
  }

})();