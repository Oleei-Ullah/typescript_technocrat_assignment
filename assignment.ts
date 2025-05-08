// No.1 ------>
function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// NO.2 -------->
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

//No.3 --------->
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce(
    (prevArray, currentArray) => prevArray.concat(currentArray),
    []
  );
}

// No.4 --------->

class Vehicle {
  constructor(private make: string, public year: number) {}
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(make, year);
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

//N0.5 ----------->

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// No.6 ---------->
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length) {
    return products.reduce(
      (onTrackedProduct, highestPricedProduct) =>
        onTrackedProduct.price > highestPricedProduct.price
          ? onTrackedProduct
          : highestPricedProduct,
      products[0]
    );
  } else {
    return null;
  }
}

// No.7 ------->

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// No.8 ---------------->

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n ** 2);
      }, 1000);
    } else {
      reject(new Error(`Negative numbers are not allowed!`));
    }
  });
}