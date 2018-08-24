# Churras Trinca


Como rodar:

Para rodar essa aplicação é necessária uma pequena conofigurações de ambiente de desenvolvimento, para que tudo ocorra bem, precisamos:

	- nodejs instalado globalmente (iremos utilizar o npm para baixar nossas dependências)
	- npm para baixar nossas dependências
	- gulp instalado na nossa máquina
	- rubygems instalado para que possamos usar nossa sass maroto!
	- sass , porque ele vai deixarn osso código legivel
	- Uma IDE ou editor de texto favorito

Depois de ter isso instalado no seu computador, basta então fazer o npm install que todas as dependências necessárias serão baixadas como módulo odo projeto.

Descrição do projeto:

O projeto de churras da trinca foi realizado com as seguintes tecnologias:

	- AngularJS v1.3.16
	- Gulp
	- Sass

O projeto apresenta um módulo só, com 3 controllers que são responsaveis pelo carregamento dos dados mockados e pela simulação de manipulação desses dados, como pessoas em um churras e adicionar o churras, toda a simulação de inserção é feita através de um incremeto no objeto que conoteém o dados que está presente no controller. Para realizar o login há uma pequena validação onde para acessar devemos ter as seguintes credenciais:

	email: zalbasmonteiro@gmail.com
	password : trinca

A sessão de login contém algumas validações de email e campos vazios e de credeciais, com mensagem de erro apresentada.
Já na sessão de todos os churras utilizo um bojeto para simular os churras e faço o carregamento dos dados na view, essa sessão também tem uma simulação de inserção de churras onde eu incremento esse objeto, utilizo a variavel vm, para que a aplicação não tenha uma sobrecarga no $scope, o que pode muitas vezes deixar a aplicação lenta.
Por ultimo mas não menos importante temos o detalhe do churras onde eu também carrego um objeto para a simulação dos dados, nela temos ainda a possibilidade de uma participante confirmar ou desmarcar sua presença no churrasco, onde o valor total de gastos é variavel e calculado perante as confirmações. No estilo do projeto optei pela utilização ode sass e do padrão BEM, pois é um padrão muito aceito na comunidade e do qual eu gosto muito de utilizar em minhas aplicação.
