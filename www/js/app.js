// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider)  {

  // Turn off caching for demo simplicity's sake
  $ionicConfigProvider.views.maxCache(0);

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  .state('app.menu', {
      url: '/menu',
      views: {
        'menuContent': {
          templateUrl: 'templates/menu_home.html',
          controller: 'MenuCtrl'
        }
      }
    })

  //Table Top Menus
  .state('app.drinks', {
    url: '/drinks',
    views: {
      'menuContent': {
        templateUrl: 'templates/drinks.html',
        controller: 'DrinksCtrl'
      }
    }
  })

  .state('app.appetizers', {
    url: '/appetizers',
    views: {
      'menuContent': {
        templateUrl: 'templates/appetizers.html',
        controller: 'AppetizersCtrl'
      }
    }
  })

  .state('app.kids', {
    url: '/kids',
    views: {
      'menuContent': {
        templateUrl: 'templates/kids.html',
        controller: 'KidsCtrl'
      }
    }
  })

  .state('app.entrees', {
    url: '/entrees',
    views: {
      'menuContent': {
        templateUrl: 'templates/entrees.html',
        controller: 'EntreesCtrl'
      }
    }
  })

  .state('app.deserts', {
    url: '/deserts',
    views: {
      'menuContent': {
        templateUrl: 'templates/deserts.html',
        controller: 'DesertsCtrl'
      }
    }
  })

   .state('app.items', {
    url: '/items',
    views: {
      'menuContent': {
        templateUrl: 'templates/item.html',
        controller: 'ItemsCtrl'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/menu');
});
