export class Pokemon {
  constructor(
    public readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  @Deprecated('Most use speak2 method instead')
  speak() {
    console.log(`${this.name}, ${this.name}`)
  }
}

function Deprecated(deprecationReason: string) {
  return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    return {
      get() {
        const wrapperFn = (...args: any[]) => {
          console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`)
          
          propertyDescriptor.value.apply(this, args)
        }

        return wrapperFn
      }
    }
  }   
}

export const charmander = new Pokemon(4, 'Charmander')

charmander.scream()
charmander.speak()
