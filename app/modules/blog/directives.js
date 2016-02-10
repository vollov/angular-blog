'use strict'

angular.module('myApp.posts.directives',['myApp.admin.services']).directive('spbComments',['Post',function(Post){
   return {
       restrict:'AEC',

       scope:{
           postInstance:'='
       },
       replace:true,

       link:function(scope,elem,attrs){

           scope.saveComment=function(){

               var postID=scope.postInstance._id,
                   savedPostInstance={};

               scope.comment.datePublished=new Date();

               angular.copy(scope.postInstance,savedPostInstance);

               savedPostInstance.comments.unshift(scope.comment);

              scope.postInstance.comments.unshift(scope.comment);

               scope.comment={};

               savedPostInstance.$update();
           }
       },
       templateUrl:'modules/blog/views/comments.html'
   }
}]);