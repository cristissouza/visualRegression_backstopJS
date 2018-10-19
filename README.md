# visualRegressionbackstopJS
Teste de regressão visual

*Instalação do BackstopJS
  $ npm install -g backstopjs
*Iniciando o backstopjs
  $ backstop init
  *utiliza esse comando no terminar*
  
O arquivo que contém os cenários de testes é o **backstop_modify.json**, no arquivo *backstop.json* 
comtém apenas o exemplo da estrutura básica criada após iniciar o backstopJS

*Principais comandos
- **backstop test** => Roda os testes e tira as screnshoots
- **backstop approve** => Aprova as screnshots, criando uma  *baseline* com as screnshoots aprovadas
- **backstop reference** => Aprova as screenshots quando utilizada-se testes em ambientes diferentes, ex: **dev** x **holol**

> Foi utilizado o servidor apache local para rodar o template web, o diretório *magazine* foi colocado para rodar nesse servidor. 
> Não é obrigatório utilizar o servidor local para que funcione, basta apenas apontar o correto caminho do diretório *magazine*
*Ex: './magazine/index.html'* deve ser alterado no arquivo backsto_modify.json, nos elemntos **url** e **referenceUrl**
para caso de não utilização do servidor.

