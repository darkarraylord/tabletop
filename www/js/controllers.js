angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http, $stateParams, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

$http.get('js/data.json').success(function(data){
  $scope.mainmenu = data.menu;  
  console.log($scope.mainmenu);
});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('MenuCtrl', function($scope) {
  $scope.menu = [
    { title: 'Bebidas', 
    id: 1, 
    itens: [
      {
        id:1,
        base:'Alcool',
        type: 'Vodka',
        title:'Grey Goose',
        price:'$3',
        unit:'Dose (50ml)'
      },
      {
        id:1,
        base:'Alcool',
        type: 'Cerveja',
        title:'Original',
        price:'$3',
        unit:'garrafa (50ml)'
      },
      {
        id:1,
        base:'fruta',
        type: 'Suco',
        title:'Laranja',
        price:'$3',
        unit:'Copo (500ml)'
      },
      {
        id:1,
        base:'Fruta',
        type: 'Suco',
        title:'Melancia',
        price:'$3',
        unit:'Copo (500ml)'
      }
    ]
  },
    { 
    title: 'Aperitivos', 
    id: 2,
    itens: [
      {
        id:1,
        base:'Alcool',
        type: 'Vodka',
        title:'Grey Goose',
        price:'$3',
        unit:'Dose (50ml)'
      },
      {
        id:1,
        base:'Alcool',
        type: 'Cerveja',
        title:'Original',
        price:'$3',
        unit:'garrafa (50ml)'
      },
      {
        id:1,
        base:'fruta',
        type: 'Suco',
        title:'Laranja',
        price:'$3',
        unit:'Copo (500ml)'
      },
      {
        id:1,
        base:'Fruta',
        type: 'Suco',
        title:'Melancia',
        price:'$3',
        unit:'Copo (500ml)'
      }
    ]
  },
    { 
    title: 'Entradas', 
    id: 3,
    itens: [
      {
        id:1,
        base:'Alcool',
        type: 'Vodka',
        title:'Grey Goose',
        price:'$3',
        unit:'Dose (50ml)'
      },
      {
        id:1,
        base:'Alcool',
        type: 'Cerveja',
        title:'Original',
        price:'$3',
        unit:'garrafa (50ml)'
      },
      {
        id:1,
        base:'fruta',
        type: 'Suco',
        title:'Laranja',
        price:'$3',
        unit:'Copo (500ml)'
      },
      {
        id:1,
        base:'Fruta',
        type: 'Suco',
        title:'Melancia',
        price:'$3',
        unit:'Copo (500ml)'
      }
    ]
    },
    { 
      title: 'Pratos Principais', 
      id: 4,
      itens: [
      {
        id:1,
        base:'Alcool',
        type: 'Vodka',
        title:'Grey Goose',
        price:'$3',
        unit:'Dose (50ml)'
      },
      {
        id:1,
        base:'Alcool',
        type: 'Cerveja',
        title:'Original',
        price:'$3',
        unit:'garrafa (50ml)'
      },
      {
        id:1,
        base:'fruta',
        type: 'Suco',
        title:'Laranja',
        price:'$3',
        unit:'Copo (500ml)'
      },
      {
        id:1,
        base:'Fruta',
        type: 'Suco',
        title:'Melancia',
        price:'$3',
        unit:'Copo (500ml)'
      }
    ]
    },
    { 
      title: 'Sopas', 
      id: 5,
      itens: [
      {
        id:1,
        base:'Alcool',
        type: 'Vodka',
        title:'Grey Goose',
        price:'$3',
        unit:'Dose (50ml)'
      },
      {
        id:1,
        base:'Alcool',
        type: 'Cerveja',
        title:'Original',
        price:'$3',
        unit:'garrafa (50ml)'
      },
      {
        id:1,
        base:'fruta',
        type: 'Suco',
        title:'Laranja',
        price:'$3',
        unit:'Copo (500ml)'
      },
      {
        id:1,
        base:'Fruta',
        type: 'Suco',
        title:'Melancia',
        price:'$3',
        unit:'Copo (500ml)'
      }
    ]
    },
    { 
      title: 'Pizzas', 
      id: 6,
      itens: [
      {
        id:1,
        base:'Alcool',
        type: 'Vodka',
        title:'Grey Goose',
        price:'$3',
        unit:'Dose (50ml)'
      },
      {
        id:1,
        base:'Alcool',
        type: 'Cerveja',
        title:'Original',
        price:'$3',
        unit:'garrafa (50ml)'
      },
      {
        id:1,
        base:'fruta',
        type: 'Suco',
        title:'Laranja',
        price:'$3',
        unit:'Copo (500ml)'
      },
      {
        id:1,
        base:'Fruta',
        type: 'Suco',
        title:'Melancia',
        price:'$3',
        unit:'Copo (500ml)'
      }
    ]
    }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})



//Tabletop Controlers
.controller('DrinksCtrl', function($scope, $stateParams) {
})
.controller('AppetizersCtrl', function($scope, $stateParams) {
})
.controller('KidsCtrl', function($scope, $stateParams) {
})
.controller('EntreesCtrl', function($scope, $stateParams) {
})
.controller('DesertsCtrl', function($scope, $stateParams) {
})
.controller('ItemsCtrl', function($scope, $stateParams) {
})
;
