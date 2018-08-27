app.controller("detailChurrasCtrl", [ '$scope', '$stateParams', 'MyService', function ($scope, $stateParams, MyService) {

  let vm = this;
  let total = 0;
  let count_people = 0;

    MyService.getChurras().success(function(jsonResp){
      jsonResp.map(function(ele){
        if(ele.id == $stateParams.id){
          vm.churras_detail = ele;
          vm.churras_detail.people.map(function(p){
            if(p.NoAccept==false)
              total += p.value;
              count_people++;
          })

          vm.churras_detail.qtd   = count_people
          vm.churras_detail.total = total;
        }
      })
    });

    vm.invite = function(person_id){
      vm.churras_detail.people.map(function(ele){
        if(ele.id == person_id)
          if(ele.NoAccept == true){
            total -= ele.value;
            count_people--;
          }
          else {
            total += ele.value;
            count_people++;
          }
      });
      
      vm.churras_detail.qtd   = count_people
      vm.churras_detail.total = total;
    }


  }]);
