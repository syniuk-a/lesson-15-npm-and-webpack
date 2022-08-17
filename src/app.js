const some = (a, b) => a + b;

some(7, 9);

class Hero {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

const someHero = new Hero('ajax');