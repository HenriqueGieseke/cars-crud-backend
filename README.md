
<div  align="center">

![Javascript](https://badges.aleen42.com/src/javascript.svg)
</div>

:car: Cars CRUD Backend - CRUD que manipula banco de dados do MongoDB com informações sobre carros :car:

#
### 📖 Prerequisites

- [NPM](https://npmjs.com/): please refer to their [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
#
### 🖥️ Local development

```

npm install

npm start

```
#
### :vertical_traffic_light: ENDPOINTS

<strong>CREATE CAR</strong>

`Method POST`

```
http://localhost:5000/addCar
```
O body da request precisa ser preenchido com todos os campos do documento

<strong>Exemplo de body:</strong>
```
{
	"brand": "Volkswagen",
	"model": "Voyage 2021",
	"version": "1.6 Msi Totalflex Manual",
	"year": 2021,
	"mileage": 59071,
	"gearshift": "manual",
	"salesPrice": 64790
}
```
<strong>Exemplo da resposta:</strong>
```
{
  "_id": "60f9eba11175295368faa1f3",
  "brand": "Volkswagen",
  "model": "Voyage 2021",
  "version": "1.6 Msi Totalflex Manual",
  "year": 2021,
  "mileage": 59071,
  "gearshift": "manual",
  "salesPrice": 64790,
  "_brandForSearch": "volkswagen",
  "_modelForSearch": "voyage2021",
  "_versionForSearch": "1.6msitotalflexmanual",
  "__v": 0
}
```
#
<strong>RETRIEVE CAR</strong>

<h5>Buscar brand(marca), model(modelo), version(versão) ou gearshift(câmbio)</h5>

`Method GET`

```
http://localhost:5000/getCar/searchInput
```
O searchInput pode ser preenchido com os valores da brand, model, version ou gearshift do carro

#
<h5>Buscar por preço</h5>

`Method GET`

```
http://localhost:5000/getCarByPrice/minValue/maxValue
```
A rota deve ser preenchida com o valor mínimo(minValue) e valor máximo(maxValue) de preço.
#

<h5>Buscar por ano</h5>

`Method GET`

```
http://localhost:5000/getCarByYear/minValue/maxValue
```
A rota deve ser preenchida com o valor mínimo(minValue) e valor máximo(maxValue) do ano.
#
<h5>Buscar por quilometragem</h5>

`Method GET`

```
http://localhost:5000/getCarByMileage/minValue/maxValue
```
A rota deve ser preenchida com o valor mínimo(minValue) e valor máximo(maxValue) de quilometragem.
#
<strong>Exemplo da resposta:</strong>
```
{
  "_id": "60f9eba11175295368faa1f3",
  "brand": "Volkswagen",
  "model": "Voyage 2021",
  "version": "1.6 Msi Totalflex Manual",
  "year": 2021,
  "mileage": 59071,
  "gearshift": "manual",
  "salesPrice": 64790,
  "_brandForSearch": "volkswagen",
  "_modelForSearch": "voyage2021",
  "_versionForSearch": "1.6msitotalflexmanual",
  "__v": 0
}
```
#
<strong>UPDATE CAR</strong>

`Method PATCH`

```
http://localhost:5000/editCar/searchInput
```
O searchInput pode ser preenchido com os valores da brand, model ou version. O body da request precisa ser preenchido com pelo menos um campo do documento para ser substituído. A resposta retorna o documento modificado.

<strong>Exemplo de body:</strong>
```
{
	"year": 2019
}
```
<strong>Exemplo da resposta:</strong>
```
{
  "_id": "60f9eba11175295368faa1f3",
  "brand": "Volkswagen",
  "model": "Voyage 2021",
  "version": "1.6 Msi Totalflex Manual",
  "year": 2019,
  "mileage": 59071,
  "gearshift": "manual",
  "salesPrice": 64790,
  "_brandForSearch": "volkswagen",
  "_modelForSearch": "voyage2021",
  "_versionForSearch": "1.6msitotalflexmanual",
  "__v": 0
}
```
#
<strong>DELETE CAR</strong>

`Method DELETE`

```
http://localhost:5000/deleteCar/:searchInput
```
O searchInput pode ser preenchido com os valores da brand, model ou version. Retorna uma mensagem com a marca do carro que foi deletado.

<strong>Exemplo da resposta:</strong>
```
O carro da marca Volkswagen foi deletado com sucesso.
```