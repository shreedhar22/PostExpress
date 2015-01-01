angular.module("postApp",[])
   .controller("postController", ['$scope',function($scope){
     $scope.posts=[];
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



