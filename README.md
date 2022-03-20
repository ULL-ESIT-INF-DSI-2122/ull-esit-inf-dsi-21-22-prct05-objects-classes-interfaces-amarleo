# Práctica 5: Objetos, clases e interfaces

## Indice

  - [Introducción](#introducción)
  - [Tareas previas](#tareas-previas)
  - [Ejercicios](#ejercicios)
  - [Conclusión](#conclusión)

***
## Introducción

El presente informe perteneciente a la quinta práctica de la asignatura de Desarrollo de Sistemas Informáticos tiene como principales objetivos seguir poniendo en práctica el desarrollo dirigido por pruebas a través de Mocha y Chai, además de comenzar a familiarizarse con las herramientas [Instanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/), de las que se obtendrá un informe sobre el cubrimiento del código desarrollado.

## Tareas Previas



## Ejercicios

A continuación, se comenzará a detallar cada uno de los ejercicios propuestos en esta práctica, mostrando y detallando los planteamientos que han sido llevados a cabo para la resolución de los mismos.

### Ejercicio 1: Pokédex

Este ejercicio principalmente se ha planteado haciendo uso de tres clases, separadas en sus  tres respectivos ficheros. Según el enunciado propuesto, se han planteado las clases:

- Pokemon
- Pokedex
- Combar

A continuación se pretende detallar de forma más concreta todas y cada una de las decisiones empleadas tanto para la costrucción de las clases como la implemetación de todos sus métodos.

#### Pokemon

La idea principal para esta clase es la de crear objetos "Pokemon" que contengan toda la información relevante para cada Pokémon, donde se pueda almacenar tanto el nombre, como sus características físicas y estadísticas principales.

Tal y como se ha realizado en las prácticas anteriores, todos los ficheros y clases han sido construidas con sus tests de comprobación previos a través de Chai Y Mocha. Para esta clase se han propuesto los siguientes tests: 

```typescript
const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

describe('Pokemon class tests', () => {
  describe('Pokemon Attributes must be accessibles', () => {
    it('Example 1: Gyarados', () => {
      expect(Gyarados.name).to.be.eql('Gyarados');
      expect(Gyarados.height).to.be.eql(6.5);
      expect(Gyarados.weight).to.be.eql(230);
      expect(Gyarados.type).to.be.eql('Water');
      expect(Gyarados.attack).to.be.eql(65);
      expect(Gyarados.defense).to.be.eql(60);
      expect(Gyarados.speed).to.be.eql(110);
      expect(Gyarados.hp).to.be.eql(500);
    });
  });
  describe('Pokemon Class getters', () => {
    it('getName method', () => {
      expect(Gyarados.getName()).to.be.eql('Gyarados');
      expect(Chikorita.getName()).to.be.eql('Chikorita');
      expect(Ninetales.getName()).to.be.eql('Ninetales');
    });
    it('getHeight method', () => {
      expect(Gyarados.getHeight()).to.be.eql(6.5);
      expect(Chikorita.getHeight()).to.be.eql(0.9);
      expect(Ninetales.getHeight()).to.be.eql(1.1);
    });

    [. . .]
```
Tal y como se puede comprobar en el código anterior, los tests se han dividido por escenarios, donde se prueba en primer lugar el acceso a cada uno de los atributos de un objeto construido por la clase en cuestión. Posteriormente se han dividido las pruebas para los diferentes métodos de la clase, donde, en este ejemplo se muestran sólamente dos ejemplos de los métodos probados.

Como es de costumbre en esta metodología, después de crear las pruebas, se procede a realizar el código en cuestión para la clase Pokémon. En primer lugar se exporta la clase, incluyendo en ella todos y cada uno de los atributos que serán necesarios.


```typescript
export class Pokemon {
  name: string;
  height: number;
  weight: number;
  type: PokemonType;
  attack: number;
  defense: number;
  speed: number;
  hp: number;

  [...]
```

Tal y como se puede observar en el código anterior, se plantea el siguiente listado de atributos. Como se puede observar existen principalmente tres tipos de datos, string, number y **PokemonType**. Éste último se trata de un type propuesto el cuál funciona de forma que este atributo únicamente podrá contener algunos de los tipos propuestos en la siugiente línea de código: 

```typescript
type PokemonType = 'Water' | 'Fire' | 'Grass' | 'Electric';
```
Como se puede observar, en este programa se ha reducido el caso a principalmente cuatro tipo de Pokémon, problema el cuál es fácilmente ampliable.

Posteriormente, se plantea el constructor, que en resumidas cuentas se encarga de settear cada uno de los atributos propuestos. En este caso se ha planteado que cada atributo es obligatorio.

```typescript
  constructor(name: string, height: number, weight: number, type: PokemonType,
      attack: number, defense: number, speed: number, hp: number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.type = type;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.hp = hp;
  }
```

Luego, se han definido todos y cada uno de los getters, uno por cada atributo de la clase. Un ejemplo de esto es el siguiente: 

```typescript
  getName() {
    return this.name;
  }
```

Finalmente, con el objetivo de comprobar el buen funcionamiento de la clase, se han ejecutado las pruebas. Se puede ver como a continuación todas han pasado satisfactoriamente: 

```bash
  Pokemon class tests
    Pokemon Attributes must be accessibles
      ✔ Example 1: Gyarados
    Pokemon Class getters
      ✔ getName method
      ✔ getHeight method
      ✔ getWeight method
      ✔ getType method
      ✔ getAttack method
      ✔ getDefense method
      ✔ getSpeed method
      ✔ getHp method

```

#### Pokédex 

El enfoque principal que se le ha dado a esta clase es la de contenedor de objetos de Pokémon. Es decir, se tratará principalmente de un objeto que contenga un array de Pokemons.

Al igual que para la clase anterior, se han planteado en un primer momento los tests unitarios: 

```typescript
const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);
const Voltorb = new Pokemon('Voltorb', 0.5, 10.4, 'Electric', 30, 50, 100, 40);

const pokedex = new Pokedex([Gyarados, Chikorita, Ninetales]);

describe('Pokedex Class Tests', () => {
  describe('Pokedex Attributes must be accessibles', () => {
    it('Pokedex List', () => {
      expect(pokedex.pokemonList).to.be.eql([Gyarados, Chikorita, Ninetales]);
    });
    it('First Pokemon on the Pokedex name', () => {
      expect(pokedex.pokemonList[0].getName()).to.be.eql('Gyarados');
    });
  });
  describe('Pokedex getters tests', () => {
    it('getPokemonList', () => {
      expect(pokedex.getPokemonList())
          .to.be.eql([Gyarados, Chikorita, Ninetales]);
    });
  });
  describe('Pokedex setters tests', () => {
    it('setPokedexList', () => {
      const pokedexKanto = new Pokedex();
      pokedexKanto.setPokemonList([Gyarados, Ninetales]);
      expect(pokedexKanto.getPokemonList()).to.be.eql([Gyarados, Ninetales]);
    });
  });

  [. . .]
```
Al igual que para el caso anterior, en este extracto de código únicamente se muestran alguno de los diferentes escenarios que se han propuesto para esta clase. Principalmente se puede observar en primer lugar una inicialización de los diferentes objetos que serán necesarios para las pruebas siguientes. Seguido de esto, un setter y un getter.

Una vez listos todos los tests, se procede de la misma forma a crear la clase Pokédex: 

```typescript
export class Pokedex {
  pokemonList: Pokemon[];
```
Tal y como se observa en el código anterior, esta clase cuenta con un único atributo, en este caso se trata de un array de objetos (Pokemon). De la misma forma, se ha creado el constructor propio de la clase: 

```typescript
  constructor(pokemonList: Pokemon[] = []) {
    this.pokemonList = pokemonList;
  }
```
Finalmente se muestra el código desarrollado para los diferentes métodos:

```typescript
  getPokemonList() {
    return this.pokemonList;
  }

  setPokemonList(pokemonList: Pokemon[]) {
    this.pokemonList = pokemonList;
  }

  setNewPokemon(newPokemon: Pokemon) {
    if (this.pokemonList.indexOf(newPokemon) === -1) {
      this.pokemonList.push(newPokemon);
    }
  }
```
Con los dos primeros métodos se permite tanto obtener el listado completo de Pokemons dentro de una Pokedex, como la posibilidad de settear un nuevo contenido sobre otra pokedex, ya sea vacía o no.

Finalmente, con el método **setNewPokemon** se obtiene un pequeño control, tomando como clave el objeto pokemon a settear, donde si no es encontrado previamente en la Pokédex, se puede introducir en la misma. De esta forma, aunque no haya sido pedido en los requerimientos de la práctica, se comprueba que en una misma pokédex no se registre dos veces una misma especie de Pokémon.

Finalmente, se ejecutan todos los tests: 

```bash
  Pokedex Class Tests
    Pokedex Attributes must be accessibles
      ✔ Pokedex List
      ✔ First Pokemon on the Pokedex name
    Pokedex getters tests
      ✔ getPokemonList
    Pokedex setters tests
      ✔ setPokedexList
    Pokedex new pokemon add list
      ✔ Wild Voltorb Appeared!
```

#### Combat



```typescript

```
```typescript

```
```typescript

```
```typescript

```


### Ejercicio 2: Conecta 4


## Conclusión