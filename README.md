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

En primer lugar se muestra cómo ha sido creada la clase, enumerando los diferentes atributos: 

```typescript
export class Board {
  rows: number;
  columns: number;
  board: number[][];
  rowToken: number;

```

Como se puede observar, principalmente se ha decidido tener en cuentra las dimensiones de la board, donde se deberá de conocer el número de columnas y filas. Además, se ha creado un atributo que almacena el contenido del tablero. Además, se emplea en el método **dropToken** un setteo de la columna en la que fue posicionada la última ficha. Este atributo será utilizado en otra clase.

En el constructor principalmente se pide por parámetros dos datos de forma obligatoria, tanto el número de columnas como el de filas. De forma opcional se encuentra la posibilidad de establecer además una board.

```typescript
  constructor(rows: number = 6, columns: number = 7, board?: number[][]) {
    this.rows = rows;
    this.columns = columns;
    this.board = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]];
    this.rowToken = 0;
  }

```
Como se puede comprobar, además se han colocado valores por defecto a las filas y columnas, pudiendo así tener la posibilidad de crear un objeto sin parámetros. La tabla board se construye por defecto con el valor 0. Esta inicialización se ha realizado de forma manual, pero podría ser creada de forma automática gracias a los valores introducidos por parámetros. Siguiendo el enunciado de la práctica, se ha limitado a generar este dato de esta forma.

A continuación, en el fichero **board.ts** se encuentran una serie de getters y setters, de los cuales se podrá hacer uso en el resto de métodos.

El siguiente método se trata de **printBoard**, el cuál recoorre la tabla y concatena cada uno de sus elementos en el string que retorna.

```typescript
printBoard(): string {
  let result: string = '';
  this.board.forEach((element: number[]) => {
    result += '[' + element + ']\n';
  });
  return result;
}

```
Finalmente se ha incluido el método **dropToken**, el cuál, gracias a la posición y el token que se le pasa por parámetro, determina en sobre qué columna introducirá la moneda. Recorriendo todas las filas, empezando desde la última, se comprueba si la celda no está ocupada. Si es así, cambia el valor 0 (celda vacía) por el token indicado. Una vez introducido, terminará el bucle y se retorna el nuevo objeto board. 

```typescript
  dropToken(pos: number, token: number): Board {
    let dropped: boolean = false;
    let i: number = this.board.length - 1;
    while (i >= 0) {
      if ((this.board[i][pos] === 0) && (dropped === false)) {
        this.board[i][pos] = token;
        this.setRowToken(i);
        dropped = true;
      }
      i--;
    }
    let newBoard = new Board(this.rows, this.columns);
    newBoard.setBoard(this.board);
    return newBoard;
  }
```

Finalmente se puede comprobar como todos los tests han pasado de forma satisfactoria: 
```bash
  Board Class tests
    Constructor values tests
      ✔ Board Constructor
      ✔ Board Constructor Default values
    Board getters
      ✔ getRows method
      ✔ getColumns method
    Board methods
      ✔ print board method
      ✔ drop token method
    Board setters
      ✔ setBoard method
```
#### Clase Player

La clase Player se ha planteado de forma que a cada jugador se le asocie un token. En este caso, se ha propuesto como caso sencillo que cada jugador tenga un número que lo identifique.

En primer lugar, y como para el resto de casos hasta ahora, se ha propuesto los siguientes tests a superar: 

```typescript
const player1 = new Player(1);
const player2 = new Player(2);

describe('Player Class tests', () => {
  describe('Player Class Constructor', () => {
    it('Player attibutes must be accessible', () => {
      expect(player1.token).to.be.eql(1);
      expect(player2.token).to.be.eql(2);
    });
  });
  describe('Player Class Methods', () => {
    it('getToken method', () => {
      expect(player1.getToken()).to.be.eql(1);
      expect(player2.getToken()).to.be.eql(2);
    });
  });
});
```

Y viendo la clase en cuestión: 

```typescript
export class Player {
  token: number;

  constructor(token: number) {
    this.token = token;
  }

  getToken(): number {
    return this.token;
  }
}
```

Como se puede observar, esta clase simplemente contiene como atributos el token asociado al jugador, donde el constructor lo settea y se encuentra un único getter.

Esta clase fue principalmente ideada con la intención de poder ampliar el juego y que, incluso, se pudieran jugar mas de dos personas a la vez. Sin embargo esto no ha sido terminado con éxito como se verá en la siguiente clase.

```bash
  Player Class tests
    Player Class Constructor
      ✔ Player attibutes must be accessible
    Player Class Methods
      ✔ getToken method
```

Se puede observar como todos los tests han pasado de forma satisfactoria.

#### Clase Connect4

En cuanto a la Clase Connect4 se trata de la clase que contiene todos y cada uno de los procesos del juego. Se ha intentado establecer un método que gestiona los turnos de cada jugador, así como de un método que comprueba posibles soluciones sobre el tablero.

En primer lugar, y tal como se ha realizado ya para el resto de clases, se ha planteado el siguiente esquema de tests:

```typescript
let player1 = new Player(1);
let player2 = new Player(2);
let board = new Board();
let match = new Connect4(board, [player1, player2]);

describe('Connect4 Class Tests', () => {
  describe('Connect4 Class Constructor', () => {
    it('2 players', () => {
      expect(match.matchBoard.board).to.be.eql([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]]);
      expect(match.players[0]).to.be.eql(player1);
      expect(match.players[1]).to.be.eql(player2);
    });
  });
  describe('Connect4 Class getters', () => {
    it('getMatchBoard() method', () => {
      expect(match.getMatchBoard()).to.be.eql([
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]]);
    });
    it('getPlayers() method', () => {
      expect(match.getPlayers()).to.be.eql([player1, player2]);
    });
    it('getPlayer(player) method', () => {
      expect(match.getPlayer(0)).to.be.eql(player1);
      expect(match.getPlayer(1)).to.be.eql(player2);
    });
  });
  describe('checkWin method', () => {
    it('Horizontal Win', () => {
      const newBoard: number[][] = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0]];
```

Estos son algunos de los ejemplos que se han propuesto, el resto se encuentran detallados dentro de la carpeta **tests**. Como se puede observar, se ha planteado que el constructor recoja el objeto board inicial, así como un array de objetos Players.

A continuación, se ha creado la clase connect4 donde: 

```typescript
export class Connect4 {
  matchBoard: Board;
  players: Player[];

  constructor(matchBoard: Board, players: Player[]) {
    this.matchBoard = matchBoard;
    this.players = players;
  }

  getMatchBoard() {
    return this.matchBoard.board;
  }

  getPlayers() {
    return this.players;
  }

  getPlayer(index: number) {
    return this.players[index];
  }
```

En primer lugar, se encuentran los atributos propuestos para esta clase. Estos se tratan de como ya se comentó, **matchBoard** que es un objeto de la Clase Board y **players**, un array de objetos de la clase Player. Además, como es normal, se han creado los diferentes getters para la clase.

Lo siguiente ha sido crear el método **checkWin**, cuyo cometido principal es el de comprobar si sobre el estado del tablero actual se encuentra alguna combinación ganadora en el juego. Como se sabe, existen tres principales formas de ganar en este juego, y es alinear 4 fichas del mismo color de forma horizontal, vertical o diagonal. A continuación se muestra el código planteado:  

```typescript
  checkWin(player: number, row: number, col: number): boolean {
    // horizontal
    let counter: number = 0;
    let fail: boolean = false;
    // let rowIndex: number = 0;
    for (let i = col + 1; i < this.getMatchBoard().length; i++) {
      if ((this.getMatchBoard()[row][i] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    fail = false;
    for (let i = col - 1; i >= 0; i--) {
      if ((this.getMatchBoard()[row][i] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    if (counter >= 3) {
      return true;
    }
    // vertical
    fail = false;
    counter = 0;
    for (let i = row + 1; i < this.matchBoard.getRows(); i++) {
      if ((this.getMatchBoard()[i][col] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    fail = false;
    for (let i = row - 1; i >= 0; i--) {
      if ((this.getMatchBoard()[i][col] === player) && (fail === false)) {
        counter++;
      } else {
        fail = true;
      }
    }
    if (counter >= 3) {
      return true;
    }
    // Diagonal 1

    // fail = false;
    // counter = 0;
    // rowIndex = row - 1;
    // if (row >= 1) rowIndex = row - 1;
    // else {
    // rowIndex = row;
    // }
    // for (let i = col + 1; i < this.matchBoard.getColumns(); i++) {
    // if ((this.getMatchBoard()[rowIndex][i] === player) && (fail === false)) {
    // counter++;
    // } else {
    // fail = true;
    // }
    // console.log(rowIndex);
    // if (rowIndex > 0) rowIndex--;
    // }
    // fail = false;
    // if (this.matchBoard.getRows() - row > 1) rowIndex = row + 1;
    // else {
    // rowIndex = row;
    // }
    // for (let i = col - 1; i >= 0; i--) {
    // console.log(rowIndex);
    // if ((this.getMatchBoard()[rowIndex][i] === player) && (fail === false)) {
    // counter++;
    // } else {
    // fail = true;
    // }
    // if (rowIndex < this.matchBoard.getColumns()) rowIndex++;
    // }
    // if (counter >= 3) {
    // return true;
    // }

    return false;
  }
```

Separado por comentarios se encuentran seccionadas las diferentes soluciones. En primer lugar se encuentra el código para la solución horizontal. El principal planteamiento para ello ha sido recorrer la fila donde se encuentra la última moneda que fue lanzada. Para ello, partiendo de la posición se recorre el array en ambas direcciones, realizando sumas en un contador cada vez que se encuentre una ficha del mismo jugador consecutiva. En caso de encontrar una ficha diferente, deja de contar. Finalmente se comrpueba si se han contado al menos 3 fichas. Si es así, se retorna true, en caso contrario, false.

Para el caso vertical es similar, donde esta vez a partir de la posición de la última ficha colocada se examina, esta vez, la columna en la que se encuentra esta. Se recorre tanto las fichas que tiene porencima como las que tiene debajo, contando hasta que se encuentre un valor distinto al del propio jugador. En caso de contar al menos tres monedas, el método retornará true y por tanto se sabrá qué jugador ha ganado

Si hasta ahora no se ha encontrado ninguna solución ganadora, se examinan las diagonales. A pesar de ser un planteamiento similar, como se puede comprobar, no se ha podido encontrar una solución óptima a este problema. En este caso, este juego sólo será capaz de encontrar soluciones en horizontal o en vertical.

Por último, se encuentra el método **start**, este tiene como cometido iterar entre los turnos de los jugadores hasta que se encuentre un ganador. De forma similar al ejercicio de Pokemon, se itera entre turnos dependiendo de si es par o impar. Como se puede comprobar, haciendo uso de la función importada al comienzo del fichero:  

```typescript
const prompt = require('prompt-sync')();
```

Con esta función se permite recoger datos a través de la terminal. Recogiendo en el rango de [0-6] el valor de la columna sobre la que el jugador desea colocar su ficha. A través de la ya comentada funcion **dropToken**, se introduce en la Board. Antes de finalizar el turno, se comprueba si existe una posible solución al problema, y si no, comienza el turno del siguiente jugador.

A continuación se puede observar lo retornado a través de los test realizados, donde se puede comprobar que no han pasado de forma satisfactoria 2 de las condiciones propuestas para la incidendcia en el método **checkWin**.

```bash
  Connect4 Class Tests
    Connect4 Class Constructor
      ✔ 2 players
    Connect4 Class getters
      ✔ getMatchBoard() method
      ✔ getPlayers() method
      ✔ getPlayer(player) method
    checkWin method
      ✔ Horizontal Win
      ✔ Vertical Win
      1) Diagonal 1 Win
      2) Diagonal 2 Win
```

Finalmente, se encuentra al final del fichero comentado una serie de líneas de código donde se puede probar el funcionamiento del mismo a través del comando **npm run connect4**: 

```bash
Player 1 turn

Type the selected col
2
[1,1,0,0,0,0,0]
[1,2,0,0,0,0,0]
[2,1,0,0,0,0,0]
[2,1,1,0,0,0,0]
[1,2,1,0,0,0,0]
[1,2,2,2,0,0,0]

Player 2 turn

Type the selected col
4
[1,1,0,0,0,0,0]
[1,2,0,0,0,0,0]
[2,1,0,0,0,0,0]
[2,1,1,0,0,0,0]
[1,2,1,0,0,0,0]
[1,2,2,2,2,0,0]

Player 2 won!
```

## Conclusión

Para finalizar, comentar que esta práctica ha servido para poner a prueba nuevos conceptos de Typescript, donde se ha aprendido a manejar las clases, así como de aprender ciertos conceptos avanzados sobre las mismas. Por mi parte, he aprendido más aún sobre el testing y el uso de Mocha y Chai, además de empezar a comprender los principios SOLID.