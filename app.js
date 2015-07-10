var challenge = angular.module('movieApp', ['ui.bootstrap'])
  .controller('ModalCtrl', function($scope, $modalInstance, movie){

      var backgroundImage = "url(http://image.tmdb.org/t/p/w1280" + movie.backdrop_path + ") no-repeat"  
     document.body.style.background = backgroundImage;  

      $scope.movie = movie; 
      $scope.exit = function(){
        $modalInstance.close();
        document.body.style.background = "";
      }
  })
  .controller('MainCtrl', function($scope, $window, $http, $modal, $log, $timeout){
    
    $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c")
      .success(function(data){
        console.log(data);
        $scope.movies = data.results; 
      })
      .error(function(data){
        console.log(data);
      });

    // MODAL WINDOW
    $scope.open = function (_movie) {
      var modalInstance = $modal.open({

        controller: "ModalCtrl",
        templateUrl: 'selectedMovie.html',
        resolve: {
          movie: function(){
              return _movie;
          },
        }
      });

    };




  });