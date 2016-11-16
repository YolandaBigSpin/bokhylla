// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
/** 
   angular.module('starter', ['ionic'])

*/

angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('TrendCtrl', function($scope, $ionicActionSheet) {
$scope.books = [
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Blood Song" },
  { name : "Semper Mine" },
  { name : "Walflower Girl" },
  { name : "His Innocent Designer" },
  { name : "Indebted" }
];
 $scope.doRefresh = function() {
  alert("Refreshing");
  $scope.$broadcast('scroll.refreshComplete');  
 };
 $scope.showActionSheet = function() {
  // Show the action sheet:
  $ionicActionSheet.show({
    buttons: [{
      text: '<b>Share</b> to Facebook'
    }, {
      text: '<b>Add</b> to my books gallery'
    }],
   
    cancelText: 'Cancel',
    titleText: 'Like this book?',
    
    cancel: function() {
      alert("Clicked Cancel");
    },
   
    buttonClicked: function(index, buttonObj) {
      switch (index) {
        case 0:
          alert("Clicked Share");
          return false;
        case 1:
          alert("Clicked Add");
          return false;
      }
    }
  });
 };

}) 

.controller('MyBooksCtrl', function($scope) {
$scope.mybooks = [
  { name : "The Hobbit" },
  { name : "Robinson Crusoe" },
  { name : "A Taste of Blackberries" },
  { name : "Nightmare Abbey" },
  { name : "The Cat in the Hat" },
  { name : "A Wizard of Earthsea" },
  { name : "Pilgrim's Progress" },
  { name : "Robinson Crusoe" },
  { name : "A Taste of Blackberries" },
  { name : "Nightmare Abbey" },
  { name : "The Cat in the Hat" },
  { name : "A Wizard of Earthsea" },
  { name : "Pilgrim's Progress" },
  { name : "Robinson Crusoe" },
  { name : "A Taste of Blackberries" },
  { name : "Nightmare Abbey" },
  { name : "The Cat in the Hat" },
  { name : "A Wizard of Earthsea" },
  { name : "The Little Prince" }
];

 $scope.data = {
    showDelete: false
  };
  $scope.edit = function(mybook) {
    alert('Edit book: ' + mybook.name);
  };
  $scope.share = function(mybook) {
    alert('Share book: ' + mybook.name);
  }; 
  $scope.onBookDelete = function(mybook) {
    $scope.mybooks.splice($scope.mybooks.indexOf(mybook), 1);
  };
  $scope.moveBook = function(mybook, fromIndex, toIndex) {
    $scope.mybooks.splice(fromIndex, 1);
    $scope.mybooks.splice(toIndex, 0, mybook);
 };
  $scope.deleteBook = function (mybook) {
    $scope.mybooks.splice($scope.mybooks.indexOf(mybook), 1);
 };
})  

.controller('SettingCtrl', function($scope, $ionicModal) {
 $ionicModal.fromTemplateUrl('my-modal.html', {
   scope: $scope,
   animation: 'slide-in-up'
 }).then(function(modal) {
   $scope.modal = modal;
 });

   $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
   $scope.modal.hide();
  };

})

.controller('OnlineBookCtrl', function($scope) {

}) 

.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

 // Set up an abstract state for the tabs directive.
   .state('tab', {
   url: "/tab",
   abstract: true,
   templateUrl: "templates/tabs.html"
 })

 // Each tab has its own nav history stack:
 .state('tab.trend', {
   url: '/trend',
   views: {
     'tab-trend': {
       templateUrl: 'templates/tab-trend.html',
       controller: 'TrendCtrl'
     }
   }
 })

 .state('tab.mybooks', {
     url: '/mybooks',
     views: {
       'tab-mybooks': {
         templateUrl: 'templates/tab-mybooks.html',
         controller: 'MyBooksCtrl'
       }
     }
   })
   
.state('tab.onlineBook', {
    url: '/onlineBook',
    views: {
      'tab-online-book': {
        templateUrl: 'templates/tab-online-book.html',
        controller: 'OnlineBookCtrl'
      }
    }
  })

 .state('tab.setting', {
   url: '/setting',
   views: {
     'tab-setting': {
       templateUrl: 'templates/tab-setting.html',
       controller: 'SettingCtrl'
     }
   }
 });

 // If none of the above states are matched, use this as the fallback:
 $urlRouterProvider.otherwise('/tab/trend');
})
