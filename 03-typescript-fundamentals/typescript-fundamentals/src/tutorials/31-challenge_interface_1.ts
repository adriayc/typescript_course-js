// CHALLENGE - INTERFACE I
interface Computer {
  readonly id: number; // Cannot be changed once initialized
  brand: string;
  ram: number;
  storage?: number; // Optional property
  // Methods
  upgradeRam(increase: number): number;
}

const laptop: Computer = {
  id: 123,
  brand: 'random brand',
  ram: 8,
  // storage: 128,
  // Methods
  upgradeRam(increase) {
    this.ram += increase;
    return this.ram;
  },
};

laptop.storage = 256;

console.log(laptop);
console.log(laptop.upgradeRam(8));
