angular.module("postApp",['ui.router'])
   .config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'HomeController'
    })

     .state('posts',{
         url: '/posts/{id}',
         templateUrl:'/posts.html',
         controller:'PostCtrl'
     });

  $urlRouterProvider.otherwise('home');
}])
   
   .factory('posts',[function(){
   	var o={
      posts:[]
   	};
   	  return o;
   }])

  .controller('HomeController', ['$scope','posts',function($scope,posts){
     $scope.posts=posts.posts;
    $scope.post = {title:"",upvotes:0,link:"",comments:[]}
    $scope.title="";
    $scope.upvotes = 0;
    $scope.link="";
    $scope.comments=[];
    $scope.comment='';
    
    $scope.addPost=function(){
    	console.log("title=" + $scope.title);
    	$scope.post={title:$scope.title,upvotes:$scope.upvotes,link:$scope.link,comment:[]}
        $scope.posts.push($scope.post)
    }

    $scope.incrementVotes=function(index){
    	$scope.posts[index].upvotes=$scope.posts[index].upvotes+1

    }

    $scope.addComment=function(index){
          console.log($scope.comment + "lol");

         $scope.posts[index].comment = $scope.comment;
         
    }
    $scope.removePost=function(index){
    	$scope.posts.splice(index,1)
    }
  }])
   
   .controller('PostCtrl',['$scope','$stateParams','posts',function($scope,$stateParams,posts){
        $scope.post=posts.posts[$stateParams.id]
   }])





