class Actors {
    constructor(obj) {
        const Avenger = () => `${Avenger.alias.toUpperCase()}\n${Avenger.powers.join("\n")}`;
        Avenger.toString = () => `name:${Avenger.name} \ngender:${Avenger.gender}\nage:${Avenger.age}`;
        const {name, ...rest} = obj;
        Object.defineProperty(Avenger, "name", {value: name});
        Object.assign(Avenger, rest);
        Object.setPrototypeOf(Avenger, Actors.prototype);
        return Avenger;
    }
}


const act1= new Actors({
  name: 'Tony Stark',
  alias: 'Iron Man',
  gender: 'man',
  age: 38,
  powers: ["intelligence", "durability", "magnetism"]
})

const act2= new Actors({
  name: 'Natasha Romanoff',
  alias: 'Black Widow',
  gender: 'woman',
  age: 35,
  powers: ["agility", "martial arts"]
})

const examine = (avenger) => {
  console.count('Actors');
  console.group('*** Actors introduced ***');
  console.log(avenger.toString());
  console.groupEnd();
  console.group('*** Actors called ***');
  console.log(avenger());
  console.groupEnd();
  console.group('*** Actors\'s internals ***');
  console.log(avenger, '\n');
  console.groupEnd();
  console.log(avenger instanceof Actors);
}

examine(act1);
examine(act2);

class Actors extends Function {
    constructor(obj) {
        super(`return arguments.callee.avenger()`);
        let {name, ...rest} = obj;
        Object.defineProperty(this, "name", {value: name});
        Object.assign(this, rest);
    }
    toString() {
        return `name: ${this.name}\ngender: ${this.gender}\nage: ${this.age}`;
    }
    avenger() {
        return `${this.alias.toUpperCase()}\n${this.powers.join("\n")}`;
    }
}

const act1= new Actors({
  name: 'Tony Stark',
  alias: 'Iron Man',
  gender: 'man',
  age: 38,
  powers: ["intelligence", "durability", "magnetism"]
})

const act2= new Actors({
  name: 'Natasha Romanoff',
  alias: 'Black Widow',
  gender: 'woman',
  age: 35,
  powers: ["agility", "martial arts"]
})

const examine = (avenger) => {
  console.count('Actors');
  console.group('*** Actors introduced ***');
  console.log(avenger.toString());
  console.groupEnd();
  console.group('*** Actors called ***');
  console.log(avenger());
  console.groupEnd();
  console.group('*** Actors\'s internals ***');
  console.log(avenger, '\n');
  console.groupEnd();
  console.log(avenger instanceof Actors);
}

examine(act1);
examine(act2);

