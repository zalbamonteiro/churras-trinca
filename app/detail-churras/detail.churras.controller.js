app.controller("detailChurrasCtrl", [ '$scope', function ($scope) {

  let vm = this;
  let total = 0;

    vm.churras_detail = {
      qtd : 15,
      total : 280,
      date: '01/12',
      title: 'Níver do Gui',
      people: [
        {
            id: 1,
            name: 'Alice',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 2,
            name: 'Beto',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 3,
            name: 'Diego B.',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 4,
            name: 'Diego P.',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 5,
            name: 'Fernando',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 6,
            name: 'Gabriel',
            value: 20.00,
            NoAccept: true,
        },
        {
            id: 7,
            name: 'Leonardo',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 8,
            name: 'Marcus J.',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 9,
            name: 'Michele',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 10,
            name: 'Paulo',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 11,
            name: 'Rafael S.',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 12,
            name: 'Ralf',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 13,
            name: 'Ruan',
            value: 20.00,
            NoAccept: true,
        },
        {
            id: 14,
            name: 'Thales',
            value: 20.00,
            NoAccept: false,
        },
        {
            id: 15,
            name: 'Wait',
            value: 20.00,
            NoAccept: false,
        }
      ]
    }

    vm.churras_detail.people.map(function(p){
      if(p.NoAccept==false)
        total += p.value;
    })

    vm.churras_detail.total = total;

    vm.invite = function(person_id){
      vm.churras_detail.people.map(function(ele){
        if(ele.id == person_id)
          if(ele.NoAccept == true){
            total -= ele.value;
            vm.churras_detail.total = total;
          }
          else {
            total += ele.value;
            vm.churras_detail.total = total;
          }
      });
    }



  }]);
