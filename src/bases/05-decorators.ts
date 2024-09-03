export class NewPokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log('POKEMON!!!')
  }

  speak() {
    console.log('Pokemon, Pokemon')
  }
}

@MyDecorator()
export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name}, ${this.name}`)
  }
}

function MyDecorator() {
  return (target: Function) => {
    return NewPokemon
  }
}

export const charmander = new Pokemon(4, 'Charmander')

charmander.scream()
charmander.speak()
