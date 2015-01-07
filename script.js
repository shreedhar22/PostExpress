angular.module("postApp",['ui.router'])
   .config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'HomeController'       //needs to be passed in the controller, we don't use it in html file after routing.
    })

     
  $urlRouterProvider.otherwise('home');
}])

   .factory('posts',[function(){           //'posts' is the argument passed in the controller where posts service is required.
   	var o={
      posts:[]
   	};
   	  return o;
   }])

   .controller("HomeController", ['$scope','posts',function($scope,posts){          //'posts' is the argument from the factory service. 
     $scope.posts=posts.posts;                                                      // use of posts array form the 'posts' service
   $scope.post = {title:"",upvotes:0,link:"",comment:""}
    $scope.title="";
    $scope.upvotes = 0;
    $scope.link="";
    $scope.comment="";
    
    $scope.addPost=function(){
    	
    	$scope.post={title:$scope.title,upvotes:$scope.upvotes,link:$scope.link,comment:$scope.comment}
        $scope.posts.push($scope.post)
    };


    $scope.incrementVotes=function(index){
    	$scope.posts[index].upvotes=$scope.posts[index].upvotes+1

    }

    $scope.removePost=function(index){
    	$scope.posts.splice(index,1)
    }
 }])



