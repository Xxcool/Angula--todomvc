(function (angular) {
	'use strict';
	// Your starting point. Enjoy the ride!

  // 1.创建模块
  var app = angular.module('todosApp', [])

  // 2.创建控制器
  app.controller('todosController', ['$scope', function($scope){

    // 功能1.任务的展示(ng-repeat)
    // 假设已经得到数据
    $scope.todos = [
    {id:1,name:'吃饭',completed:true},
    {id:2,name:'睡觉',completed:true},
    {id:3,name:'打豆豆',completed:false},
    {id:4,name:'学习',completed:true},
    {id:5,name:'喝水',completed:false},
    ]

    // 功能2.添加任务
    $scope.newTodo=''  // ng-model
    $scope.add = function(){
      // 判断newTodo是否为空，为空则不添加任务
		console.log(!!$scope.newTodo)
      if(!$scope.newTodo){
        return
      }

      // 把新任务添加到$scope.todos中去
      $scope.todos.push({
        id:Math.random(),
        name:$scope.newTodo,
        completed:false
      })
      // 置空
      $scope.newTodo=''
    }

	  //3 删除任务
	  $scope.remove = function (id) {
		  //根据id到数组$scope.todos中查找相应元素，并删除
		  for(var i = 0; i < $scope.todos.length; i++ ){
			  var item = $scope.todos[i]
			  if(item.id === id) {
				  $scope.todos.splice(i,1) //删除数据
				  return
			  }
		  }
	  }

	  //功能4 修改任务
	  $scope.isEditingId = -1
	  $scope.edit = function (id) {
		  $scope.isEditingId = id
	  }
	  $scope.save = function () {
		  $scope.isEditingId = -1
	  }

	  //批量切换任务状态
	  $scope.selectAll = false
	  $scope.toggleAll = function () {
		  // 让$scope.todos中所有数据的completed值等于$scope.selectAll
		for(var i =0; i < $scope.todos.length; i++){
			var item = $scope.todos[i]
			item.completed = $scope.selectAll
		}
	  }

	  //显示未完成的任务数
	  $scope.getActive = function () {
		  var count = 0;
		  for(var i =0; i < $scope.todos.length; i++){
			  var item = $scope.todos[i]
			  if(!item.completed){
				  count++
			  }
		  }
		  return count
	  }

	  //清除所有已完成的任务
	  $scope.clearAll = function () {
		  // 如果要删除一个数组中多条数据，就使用逆向遍历
		  for(var i = $scope.todos.length - 1; i >= 0; i--){
			  var item = $scope.todos[i]
			  if(item.completed){
				  $scope.todos.splice(i,1)
			  }
		  }
	  }

	  $scope.isCompleted = {}
	  //显示未完成的任务
	  $scope.active = function () {
		  $scope.isCompleted = {completed:false}
	  }
	  //显示已完成的任务
	  $scope.active = function () {
		  $scope.isCompleted = {completed:true}
	  }
	  //显示所有任务
	  $scope.all = function () {
		  $scope.isCompleted = {}
	  }
  }])

})(angular);
