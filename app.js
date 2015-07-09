var challenge = angular.module('movieApp', [])
  .controller('MainCtrl', function($scope, $window, $http){
    
    $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c")
      .success(function(data){
        console.log(data);
        $scope.movies = data.results; 
      })
      .error(function(data){
        console.log(data);
      });
  
  });