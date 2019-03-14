app.controller("bankControl",function($scope,$state)
{
	 $scope.back = function() {
    if ($scope.tabIndex > 0) {
      $scope.tabIndex--;
    }
  };
  $scope.next = function() {
    if ($scope.tabIndex < 2) {
      $scope.tabIndex++;
    }
  }

 
});
