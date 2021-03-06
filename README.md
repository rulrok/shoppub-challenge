# Shoppub code challenge

- [Shoppub code challenge](#shoppub-code-challenge)
  * [Estrutura do projeto](#estrutura-do-projeto)
    + [Modo desenvolvimento](#modo-desenvolvimento)
    + [Modo produção](#modo-produ--o)
- [Componentes](#componentes)
  * [*Hover* e personalizaçào](#-hover--e-personaliza--o)
- [Settings mixin](#settings-mixin)
- [Dependências](#depend-ncias)
  * [Async properties](#async-properties)
  * [Carrossel](#carrossel)
  * [Bulma](#bulma)
  * [Variáveis](#vari-veis)
  
## Estrutura do projeto

O projeto é construído com `vue cli` com o template mínimo sem `router` nem `vuex`.

```
|-src
    | - assets => Arquivos SVG
    | - components
        | - ProductItem.vue => Principal componente
        | - ...
        | - ... outros sub-componentes
    | - mixins
        | - index.js => Facilidade para importart mixins com nomes definidos ao longo do código
        | - settings-mixin.js => Facilidade para acessar configurações de settings.json (idealmente usar-se-ia vuex)
        | - add-product-quantity-mixin.js => Comportamento compartilhado entre componentes BuySeeProduct.vue e AvailabilityWidget.vue
    | - styles
        | - variables.scss => Cores CSS para estilos globais
        | - custom-bulma.scss => Código base, grid e imagens responsivas do framework bulma.
    - App.vue => Componente raiz para montar o grid principal com todos os componentes listados
    - main.js => Carrega settings.json para montar App.vue
```

### Modo desenvolvimento

Para executar modo de desenvolvimento:

```
npm install
npm run serve
```

A página deverá estar disponível em `http://localhost:8080`

Nesse modo, `settings.json` e `products.json` por padrão serão lidos de
`src/public` e servidos como qualquer outro *asset* público.

### Modo produção

Para compilar em modo produção

```
npm run build
```

O código será colocado em `./dist`

Use `http-serve` para facilmente servir a página.

```
npm install -g http-serve
cd dist
http-serve . 
```
A página deverá estar disponível em `http://localhost:8080`

Você pode modificar `settings.json` e `products.json` na raiz do diretório `dist`.

Por favor, certifique-se de usar `ctrl+r/ctrl+f5` para recarregar do cache.

# Componentes

O principal component é `ProductItem.vue` e ele é usado no componente raiz `App.vue`.

A lista de produtos é carregada por uma chamada assíncrona simples ao `.json` e 
cada item é iterado usando-se `ProductItem`. Todas as propriedades são passadas
diretamente através de `v-bind` ao invés de `v-bind:attribute` individuais.

Com exceção do nome do produto, cada parte da apresentação é delegada para um 
sub-componente menor.

A comunicação é feita através de eventos emitidos pelos sub-componentes.

O uso de `ProductItem` é ilustrado como:

```html
<div v-for="product in products">
    <product-item
            :key="product.id"
            v-bind="product"
            @add-to-cart="addToCart"/>
</div>
```

O único evento necessário a ser reagido é `add-to-cart`.
Esse evento é disparado quando o usuário clicar em **Adicionar** ou **Comprar**.
Ele pode ser tratado como:


```js
function addToCart({id, quantity, attributes = []}) {
    alert(`Adicionado ${quantity} produto(s) (id ${id}). Atributo(s): ${attributes.map(a => a.id)}`);
}
```

Objeto parâmetro exemplo

```json
{
  "id" : 1, //id do produto
  "quantity" : 5, //quantidade do produto
  "attributes" : [ //ids das tags escolhidas para o produto (opcional)
    { "id": 17 },
    { "id": 20 }
  ]
}
```

## *Hover* e personalizaçào

Para tentar obter um melhor desempenho no navegador, toda a personalização do
componente `.product-item` é dependente apenas da classe `.hover` estar ou não
presente também no componente raiz do produto.

Para alternar a classe `.hover`, os eventos `mouseover` e `mouseleave`
são ouvidos e usados em `ProductItem.vue`.
 
 Isso permite que qualquer componente possa facilmente ser estilizado utilizando-se
 dessa classe em um nível superior.
 
 Essa prática é inspirada de frameworks que costumam utilizar-se de classes css
 de apoio (`is-desktop`, `is-mobile`, etc) em elementos superiores 
 (como `html` ou `body`) para facilmente controlar vários estilos 
 diferentes de elementos aninhados.

# Settings mixin

Para simplificar esse código, ao invés de introduzir `vuex`, eu optei por apenas
usar um mixin para poder ter acesso às configurações em qualquer componente
facilmente. Veja `src/mixins/settings-mixin.js`

# Dependências

## Async properties

[vue-async-properties](https://www.npmjs.com/package/vue-async-properties)

Para carregar os arquivos `.json` como numa situação real com delay e com 
tratamento para os dados padrões iniciais, `vue-async-properties` é usado.

## Carrossel

[vue-agile](https://github.com/lukaszflorczak/vue-agile)

 O componente de carrossel é externo.
 
 ## Bulma
 
 [bulma](https://bulma.io/documentation/)
 
 Para o sistema de responsividade e grid, eu em geral escolho delegar essa
 responsabilidade para um framework dedicado open-source.
 
 As vantagens são: projeto bem documentado e comunidade ativa para garantir que
 o framework é relevante para web-design moderno.

Apenas as dependências necessárias são trazidas para o bundle dentro do arquivo 
`src/styles/custom-bulma.scss`.

## Variáveis

Cores e outras dependências customizáveis podem ser inseridas em arquivos de
estilo como em `src/styles/variables.scss`.
