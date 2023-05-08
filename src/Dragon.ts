import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints < 1) this._lifePoints = -1;
    return this._lifePoints;
  }
}