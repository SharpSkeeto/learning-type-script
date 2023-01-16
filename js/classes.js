"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Vehicle_internalId;
class Animal {
}
let tabbyCat = new Animal();
tabbyCat.id = 1;
tabbyCat.name = "Tabby";
tabbyCat.species = "Feline";
console.log("Simple class declaration (default constructor)");
console.log(tabbyCat);
console.log(`Tabby Cat Id: ${tabbyCat.id}`);
console.log(`Tabby Cat Name: ${tabbyCat.name}`);
console.log(`Tabby Cat Species: ${tabbyCat.species}`);
console.log();
class Vehicle {
    get GetId() {
        return __classPrivateFieldGet(this, _Vehicle_internalId, "f");
    }
    set SetType(value) {
        this.type = value;
    }
    constructor(internalId, externalId, model, type) {
        _Vehicle_internalId.set(this, void 0);
        this.externalid = externalId;
        __classPrivateFieldSet(this, _Vehicle_internalId, internalId, "f");
        this.model = model;
        this.type = type;
    }
    getVehicleModel() {
        return `The vehicle model is ${this.model}`;
    }
}
_Vehicle_internalId = new WeakMap();
let vehicle = new Vehicle(4567, 1, "Mustang GT", "Sports Car");
console.log("Class declaration (with constructor):");
console.log(vehicle);
console.log(vehicle.getVehicleModel());
console.log();
class Sedan extends Vehicle {
    constructor(internalId, externalId, model, type) {
        super(internalId, externalId, model, type);
    }
    static getDealershipInventoryCount() {
        return 4;
    }
    getVehicleModel() {
        return `The sedan model is ${this.model}`;
    }
}
let tesla = new Sedan(1234, 2, "Model S Plaid", "Sedan");
console.log(tesla);
console.log(`Sedan model: ${tesla.getVehicleModel()}`);
console.log(`Internal Id of sedan record: ${tesla.GetId}`);
tesla.SetType = "Fullsize Sports Sedan";
console.log(tesla);
console.log(`Number of sedans at dealership: ${Sedan.getDealershipInventoryCount()}`);
console.log();
