app.controller("mainCtrl", [ '$scope', 'MyService', function ($scope, MyService) {

        let vm = this;

        vm.login = function() {
          if($scope.myFormLogin.$valid){
            MyService.getLogin().success(function(jsonResp){
              if (vm.email == jsonResp.email) {
                  if (vm.password == jsonResp.password) {
                      window.location.href ="/#/all-churras";
                  }
                  else
                    vm.msgError = "Senha não localizada.";
              }
              else
                  vm.msgError = "E-mail não localizado.";
            });
          }
        };

    }]);
