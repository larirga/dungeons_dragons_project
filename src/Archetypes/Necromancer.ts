import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _type: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer._createdInstances += 1;
  }

  get energyType(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances() {
    return Necromancer._createdInstances;
  }
}