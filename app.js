var challenge = angular.module('movieApp', ['ui.bootstrap'])
  .controller('ModalCtrl', function($scope, $modalInstance, movie){
  
    var backdropImage = "http://image.tmdb.org/t/p/w1280" + movie.backdrop_path   
     document.getElementById("backdrop").setAttribute("src", backdropImage);

      $scope.movie = movie; 
      $scope.exit = function(){
        $modalInstance.close();

        document.getElementById("backdrop").removeAttribute("src");
        document.getElementById("backdrop").setAttribute("src", "nothing");

      }
  })
  .controller('MainCtrl', function($scope, $window, $http, $modal, $log, $timeout, $filter){
    var i = 1; 
    getMovies();

    $scope.prev = function(){
      if (i==1){
        alert("these are the latest now_playing movies ! ");
      }else{
        i-= 1 
        getMovies();
      }
    }
    $scope.next = function(){
      i+= 1 
      getMovies();
    }
    function getMovies(){
    $http.get("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page="+i)
      .success(function(data){
        $scope.movies = data.results
      })
      .error(function(data){
        console.log(data);
      });
    }

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