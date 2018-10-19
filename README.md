# Visual Regression Testing - backstopJS
Teste de Regressão Visual

## Instalação do BackstopJS

  $ npm install -g backstopjs
  
## Iniciando o backstopjs
  $ backstop init
  *utiliza esse comando no terminal*
  
O arquivo que contém os cenários de testes é o **backstop_modify.json**, no arquivo *backstop.json* 
contém apenas o exemplo da estrutura básica criada após iniciar o backstopJS

## Principais comandos
- **backstop test** => Roda os testes e tira as screnshoots
- **backstop approve** => Aprova as screnshots, criando uma  *baseline* com as screnshoots aprovadas
- **backstop reference** => Aprova as screenshots quando utilizada-se testes em ambientes diferentes, ex: **dev** x **holol**

## Executando cenário e arquivos expecíficos

**--filter**=nome_do_cenário

**--config**=-nome_arquivo_json

**Ex:** 
$ backstop test --config=backstop_modify.json --filter=Menu




> Foi utilizado o servidor apache local para rodar o template web, o diretório *magazine* foi colocado para rodar nesse servidor. 
> Não é obrigatório utilizar o servidor local para que funcione, basta apenas apontar o correto caminho do diretório *magazine*
*Ex: './magazine/index.html'* deve ser alterado no arquivo backsto_modify.json, para os elementos **url** e **referenceUrl**
caso não use o servidor.

