app.controller("TodoCtrl", function($scope) {

  $scope.title = 'Angular Todo!';
  $scope.potato = '';
  $scope.dan = '';
  $scope.bob = '';

  $scope.newTodo = '';
  $scope.taskType = 'home';

  $scope.selectedTodo = 'nothing'

  $scope.tasks = [
    { name: "Make the bed", type: "home" },
    { name: "Let the dogs out", type: "home" },
    { name: "Eat breakfast", type: "home" },
    { name: "Finish Project", type: "work" },
    { name: "Yell at Boss", type: "work" }
  ]

  $scope.addTodo = function () {
    $scope.tasks.push({ name: $scope.newTodo, type: $scope.taskType});
    $scope.newTodo = '';
  }

  $scope.removeTodo = (tasks) => {
    const taskIndex = $scope.tasks.indexOf(tasks);
    if (taskIndex >= 0) {
      $scope.tasks.splice(taskIndex, 1);
    }
  }

})
