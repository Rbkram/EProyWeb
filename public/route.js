(function(){
  'use strict';
  angular
  .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'angularCSS'])
  .config(configuration);

  configuration.$inject = ['$stateProvider','$urlRouterProvider'];

  function configuration($stateProvider,$urlRouterProvider){
    $stateProvider

    .state('player',{
      url : '/players', //ruta del url del estado
      templateUrl : 'components/players/player.view.html',//vista que se va a cargar para este estado
      //El resolve sirve para  cargar el controlador junto con la vista
      
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('components/players/player.controller.js')
        }]
      },
      controller: 'playerCtrl',
      controllerAs:'vm'
    })

    .state('buyProperty',{
      url : '/buyProperties', //ruta del url del estado
      templateUrl : 'components/buyProperties/buyProperty.view.html',//vista que se va a cargar para este estado
      // El resolve sirve para  cargar el controlador junto con la vista
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('components/buyProperties/buyProperty.controller.js')
        }]
      },
      controller: 'buyPropCtrl',
      controllerAs:'vm'
    })

    .state('soldProperty',{
      url : '/soldProperties', //ruta del url del estado
      templateUrl : 'components/soldProperties/soldProperty.view.html',//vista que se va a cargar para este estado
      // El resolve sirve para  cargar el controlador junto con la vista
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('components/soldProperties/soldProperty.controller.js')
        }]
      },
      controller: 'soldPropCtrl',
      controllerAs:'vm'
    })

    .state('landing',{
      url : '/landing', //ruta del url del estado
      templateUrl : 'components/landing/landing.view.html',//vista que se va a cargar para este estado
      // El resolve sirve para  cargar el controlador junto con la vista
      resolve: {
        load: ['$ocLazyLoad', function($ocLazyLoad){
          return $ocLazyLoad.load('components/landing/landing.controller.js')
        }]
      },
      controller: 'landingCtrl',
      controllerAs:'vm'
    })


    $urlRouterProvider.otherwise('/landing');
  }
})();