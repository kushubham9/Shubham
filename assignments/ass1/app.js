(function(){
  angular.module('lunchChecker',[])

  .controller('lunchCheckerController',lunchCheckerController);

  lunchCheckerController.$inject = ['$scope'];
  function lunchCheckerController($scope){
      $scope.list = '';
      $scope.textColor = '';
      $scope.processList = function(){
        if ($scope.list === '')
          alertMsg(EmptyListString(), true);

        else{
          dishes = $scope.list.split(',');
          var count = 0;
          for (var i = 0; i < dishes.length; i++)
          {
            if (dishes[i].trim() !== '')
              count++;
          }

          if (count <= 3)
            alertMsg(enjoyMsgString(), false);

          else
            alertMsg(tooMuchMsgString(), false);
        }
      };

      function alertMsg(msg, isError)
      {
          if (isError)
            failAlert();

          else
            successAlert();

          $scope.alert = msg;
      }

      function failAlert()
      {
        $scope.textColor = "red";
      }

      function successAlert()
      {
        $scope.textColor = "green";
      }

      function enjoyMsgString()
      {
        return "Enjoy!";
      }

      function tooMuchMsgString()
      {
        return "Too Much!";
      }

      function EmptyListString()
      {
        return "Please enter data first";
      }
  }

})();
