app.controller("mainCtrl", [ '$scope', function ($scope) {

        let vm = this;

        //access login
        vm.login = function() {
          if($scope.myFormLogin.$valid){
            if (vm.email == "zalbasmonteiro@gmail.com") {
                if (vm.password == "trinca") {

                    window.location.href ="/#/all-churras";
                }
                else
                  vm.msgError = "Senha não localizada.";

            }
            else
                vm.msgError = "E-mail não localizado.";
          }
        };

    }]);
