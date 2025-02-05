class UniqueCollection<T> {
    private items: Set<T>;
  
    constructor(initialItems?: T[]) {
      this.items = new Set(initialItems);
    }
  
    add(item: T): void {
      this.items.add(item);
    }
  
    remove(item: T): void {
      this.items.delete(item);
    }
  
    has(item: T): boolean {
      return this.items.has(item);
    }
  
    union(otherSet: UniqueCollection<T>): UniqueCollection<T> {
      return new UniqueCollection([...this.items, ...otherSet.toArray()]);
    }
  
    intersection(otherSet: UniqueCollection<T>): UniqueCollection<T> {
      return new UniqueCollection([...this.items].filter(i => otherSet.has(i)));
    }
  
    toArray(): T[] {
      return [...this.items];
    }
  }
  
  // 🔥 Uso de UniqueCollection
  const setA = new UniqueCollection([1, 2, 3, 4]);
  const setB = new UniqueCollection([3, 4, 5, 6]);
  
  console.log(setA.union(setB).toArray()); // [1, 2, 3, 4, 5, 6]
  console.log(setA.intersection(setB).toArray()); // [3, 4]
  