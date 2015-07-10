var challenge = angular.module('movieApp', ['ui.bootstrap'])
  .controller('ModalCtrl', function($scope, $modalInstance, movie){
  
    var backdropImage = "http://image.tmdb.org/t/p/w1280" + movie.backdrop_path   
     document.getElementById("backdrop").setAttribute("src", backdropImage);
     
     // var backdrop = document.createElement("img");
     // backdrop.setAttribute("id", "backdrop"); 
     // backdrop.setAttribute("src", backdropImage);  


      $scope.movie = movie; 
      $scope.exit = function(){
        $modalInstance.close();
        // var element = document.getElementById("backdrop");
        // element.parentNode.removeChild(element);
         document.getElementById("backdrop").removeAttribute("src");
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