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
- Combat

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

La clase combat pretende ser un simulador de combate entre dos pokémons. En este caso, los tests desarrollados para esta clase son los que se muestran a continuación: 

```typescript

const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);

const GyaradosVsNinetales = new Combat(Gyarados, Ninetales);
const ChikoritaVsGyarados = new Combat(Chikorita, Gyarados);

describe('Combat Class tests', () => {
  it('Combat Constructor', () => {
    expect(GyaradosVsNinetales.firstPokemon).to.be.eql(Gyarados);
    expect(GyaradosVsNinetales.secondPokemon).to.be.eql(Ninetales);
  });
  describe('Combat Class methods', () => {
    it('Pokemon Combat getters', () => {
      expect(GyaradosVsNinetales.getFirstPokemon()).to.be.eql(Gyarados);
      expect(GyaradosVsNinetales.getSecondPokemon()).to.be.eql(Ninetales);
    });
  });
  describe('Pokemon Damage Function', () => {
    it('Example 1: Gyarados vs Ninetales', () => {
      expect(GyaradosVsNinetales.pokemonDamage(Gyarados, Ninetales))
          .to.be.eql(87);
    });
    it('Example 2: Chikorita vs Gyarados', () => {
      expect(GyaradosVsNinetales.pokemonDamage(Chikorita, Gyarados))
          .to.be.eql(82);
    });
  });
  describe('Pokemon Start Combat Function', () => {
    it('Example 1: Gyarados vs Ninetales', () => {
      expect(GyaradosVsNinetales.start()).to.have.string('Gyarados Wins!');
    });
    it('Example 2: Chikorita vs Gyarados', () => {
      expect(ChikoritaVsGyarados.start()).to.have.string('Gyarados Wins!');
    });
  });
});

```
Siguiendo la misma metodología que para las anteriores clases, se han propuesto diferentes tests para tanto el constructor de clase como para los métodos.

En esta clase unicamente se necesitarán los dos Pokémon que serán contrincantes en el combate. Es por ello que los únicos atributos por los que se compone esta clase son los siguientes:  

```typescript
export class Combat {
  firstPokemon: Pokemon;
  secondPokemon: Pokemon;
```
Como se puede observar, se tratan de dos atributos de tipo Pokémon. De esta forma, será posible el acceso a toda la información necesaria para el combate, como son el nombre de cada uno y las estadísticas principales.

En cuanto al constructor, se ha diseñado de forma que sea necesario siempre pasar como parámetros dos objetos de tipo Pokémon, y éste únicamente se encargará de settear ambos atributos.

Posteriormente, se pretende desarrollar los diferentes métodos que serán necesarios para el desarrollo del combate. Al igual que el resto de clases, esta contendrá dos metodos o "getters" para obtener cada uno de los objetos por separado.

Además, se ha traído de prácticas anteriores el método **pokemonDamage**, el cuál tras pasarle ataque y defensa de dos pokemons, retorna el daño total causado. Este método se encuentra a continuación: 

```typescript
  pokemonDamage(atkPokemon: Pokemon, defPokemon: Pokemon) {
    let multiplier: number = 1;
    if (atkPokemon.getType() == 'Fire') {
      if (defPokemon.getType() == 'Grass') multiplier = 2;
      if (defPokemon.getType() == 'Water') multiplier = 0.5;
    }
    if (atkPokemon.getType() == 'Water') {
      if (defPokemon.getType() == 'Grass') multiplier = 0.5;
      if (defPokemon.getType() == 'Fire') multiplier = 2;
    }
    if (atkPokemon.getType() == 'Grass') {
      if (defPokemon.getType() == 'Fire') multiplier = 0.5;
      if (defPokemon.getType() == 'Water') multiplier = 2;
    }
    if (atkPokemon.getType() == 'Electric') {
      if (defPokemon.getType() == 'Grass') multiplier = 0.5;
      if (defPokemon.getType() == 'Water') multiplier = 2;
    }
    return Math.round(
        50 * (atkPokemon.getAttack() / defPokemon.getDefense()) * multiplier);
  }
```
Por último, se encuentra el método **start**, el cuál se encarga de gestionar los turnos del combate, así como de realizar las diferentes operaciones respecto a lo retornado del método pokemonDamage. Tal y como se comenta en el enunciado, el combate terminará cuando uno de los Pokemon se quede sin HP restantes. Es por ello, que se ha tomado la decisión de hacer uso del bucle **while** que se encuentra a continuación: 

```typescript
    while (firstPokemonTotalDamage < this.secondPokemon.getHp() &&
      secondPokemonTotalDamage < this.firstPokemon.getHp()) {
```

Como se puede ver, este bucle no acabará de realizar turnos hasta que uno de los Pokemon sea derrotado. Posteriormente, se han incluido dos principales casos, dependiendo del turno que sea. En caso de ser un turno impar, ataca el primer Pokemon. Por el contrario, en los turnos pares será el segundo Pokemon el que ataque. 

En esencia, ambas condiciones se comportan de forma similar. En resumen, se recoge del método anterior el daño causado por un Pokemon hacia otro. Este valor es sumado al valor total de daño que ha producido este Pokemon durante el combate. Finalmente, se concatena al string que servirá como retorno al final del combate como historial.

Una vez se rompa el bucle, se comprueba qué pokemon ha resultado vencedor y se añade comentarios extras al string. 

A continuación se muestra un ejemplo del resultado de un combate protagonizado por los siguientes Pokémon: 


```typescript
const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Chikorita = new Pokemon('Chikorita', 0.9, 6.4, 'Grass', 49, 65, 45, 45);

const ChikoritaVsGyarados = new Combat(Chikorita, Gyarados);
console.log(ChikoritaVsGyarados.start());

```
Como se puede observar, se han creado dos nuevos objetos de Pokemon, los cuáles han sido colocados como parámetros en el costructor de la clase Combat. Finalmente, imprimiendo por pantalla el resultado del método **start** se devuelve lo siguiente:  

```bash
Turn 1: Chikorita hits Gyarados with 82 points of damage -> [ 500 - 82 = 418HP left ]
Turn 2: Gyarados hits Chikorita with 25 points of damage -> [ 45 - 25 = 20HP left ]
Turn 3: Chikorita hits Gyarados with 82 points of damage -> [ 418 - 82 = 336HP left ]
Turn 4: Gyarados hits Chikorita with 25 points of damage -> [ 20 - 25 = -5HP left ]
Chikorita fainted!
Gyarados Wins!
```
Como se puede observar, se muestra información por cada turno del combate. En primer lugar, se informa del Pokémon agresor y el agredido, junto con la potencia del ataque. Finalmente se muestra un resultado de cuántos HP restantes le queda al Pokemon agredido. En el momento en el que un Pokémon tiene 0HP o menos, se muestra un mensaje de que este Pokémon ha sido derrotado.

Para finalizar, se muestra el caso de un combate de un sólo turno: 

```typescript
const Gyarados = new Pokemon('Gyarados', 6.5, 230, 'Water', 65, 60, 110, 500);
const Ninetales = new Pokemon('Ninetales', 1.1, 19.9, 'Fire', 76, 75, 100, 73);
const GyaradosVsNinetales = new Combat(Gyarados, Ninetales);
console.log(GyaradosVsNinetales.start());

```
```bash
Turn 1: Gyarados hits Ninetales with 87 points of damage -> [ 73 - 87 = -14HP left ]
Ninetales fainted!
Gyarados Wins!

```
Tal y como se puede observar, el combate termina de forma automática cuando un Pokémon ha sido derrotado.


### Ejercicio 2: Conecta 4

Este ejercicio principalmente se ha planteado haciendo uso de tres clases, separadas en sus  tres respectivos ficheros. Según el enunciado propuesto, se han planteado las clases:

- Clase Board
- Clase Player
- Clase Connect4

A continuación, se mostrará el desarrollo de cada clase, así como del planteamiento que ha sido llevado a cabo.

#### Clase Board

Se ha planteado la clase Board, la cuál tiene como principal objetivo almacenar y clasificar toda la información relacionada con el tablero del famoso juego Conecta 4. Según el enunciado, el tablero se compone de celdas. Para representar esto, se ha ideado un array de array, representando cada celda por fila y columna.

Teniendo este planteamiento, se ha propuesto los siguientes tests unitarios: 

```typescript
const emptyBoard = new Board(6, 7);
const defaultBoard = new Board();

describe('Board Class tests', () => {
  describe('Constructor values tests', () => {
    it('Board Constructor', () => {
      expect(emptyBoard.rows).to.be.eql(6);
      expect(emptyBoard.columns).to.be.eql(7);
      expect(emptyBoard.board)
          .to.be.eql([
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]]);
    });
    it('Board Constructor Default values', () => {
      expect(defaultBoard.rows).to.be.eql(6);
      expect(defaultBoard.columns).to.be.eql(7);
      expect(defaultBoard.board)
          .to.be.eql([
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]]);
    });
  });
  describe('Board getters', () => {
    it('getRows method', () => {
      expect(defaultBoard.getRows()).to.be.eql(6);
    });
    it('getColumns method', () => {
      expect(defaultBoard.getColumns()).to.be.eql(7);
    });
  });
  describe('Board methods', () => {
    it('print board method', () => {
      expect(defaultBoard.printBoard()).to.be.eql(
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n');
    });
    it('drop token method', () => {
      expect((defaultBoard.dropToken(1, 7).printBoard())).to.be.eql(
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,0,0,0,0,0,0]\n' +
          '[0,7,0,0,0,0,0]\n');
    });
  });

  [. . .]
```
En las líneas de código anteriores se puede observar sólo algunos de los ejemplos de los escenarios que se han planteado para superar. Tal y como se realizó para el ejercicio anterior, principalmente se comprueba el funcionamiento del constructor de clase, así como de sus principales métodos. 

Una vez terminado los tests de clases, se procede a realizar el desarrollo del código. 


```typescript

```

```typescript

```


#### Clase Player

#### Clase Connect4



```typescript

```

```typescript

```

```typescript

```

## Conclusión