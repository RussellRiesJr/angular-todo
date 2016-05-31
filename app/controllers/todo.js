app.controller("TodoCtrl", function($scope) {

  $scope.title = 'Angular Todo!';
  $scope.potato = '';
  $scope.dan = '';
  $scope.bob = '';

  $scope.newTodo = '';

  $scope.tasks = [
    { name: "Make the bed", type: "home" },
    { name: "Let the dogs out", type: "home" },
    { name: "Eat breakfast", type: "home" },
    { name: "Finish Project", type: "work" },
    { name: "Yell at Boss", type: "work" }
  ]

  $scope.addTodo = function () {
    $scope.tasks.push({ name: $scope.newTodo, type: "home"});
    $scope.newTodo = '';
  }

  $scope.removeTodo = (tasks) => {
    const taskIndex = $scope.tasks.indexOf(tasks);
    $scope.tasks.splice(taskIndex, 1);
  }

})
