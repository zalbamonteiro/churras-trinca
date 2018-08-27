app.controller("allChurrasCtrl", [ '$scope', 'MyService', function ($scope, MyService) {

  let vm = this;


    vm.addChurras = function() {
      vm.all_churras.push({
        date : '06/01',
        title: 'Sem motivo',
        qtd: '12',
        price: '140'
      })
    };

    MyService.getChurras().success(function(jsonResp){
      vm.all_churras = jsonResp;
    });
    
  }]);
