# libraryCardValidator

Esta biblioteca destina-se à validação de números de cartão de crédito.

## Como instalar:

```
$  npm install librarycardvalidator
```

## Como utilizar:

```javascript
const cardValidator = require('librarycardvalidator');
cardValidator('5367151096056004');
// returns 'true'

const cardValidator = require('librarycardvalidator');
cardValidator('1234567891022');
// returns 'false'
```

## roadmap oficial do projeto*

### Versão 3.0.0

* README translated to english.

### Versão 2.0.0

* Correção de bugs.

### Versão 1.0.0

* Funcionalidades: validação de cartão de crédito;
* Entrada de Strings e Numbers.