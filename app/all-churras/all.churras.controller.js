app.controller("allChurrasCtrl", [ '$scope', function ($scope) {

  let vm = this;

    vm.all_churras = [
      {
        date : '01/12',
        title: 'Niver do Gui',
        qtd: '15',
        price: '280'
      },
      {
        date : '23/12',
        title: 'Final de Ano',
        qtd: '28',
        price: '400'
      },
      {
        date : '06/01',
        title: 'Sem motivo',
        qtd: '12',
        price: '140'
      }
    ]
    //access login
    vm.addChurras = function() {
      vm.all_churras.push({
        date : '06/01',
        title: 'Sem motivo',
        qtd: '12',
        price: '140'
      })
    };



  }]);
