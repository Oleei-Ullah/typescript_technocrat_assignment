function formatString(input: string, toUpper?: boolean): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce(
    (prevArray, currentArray) => prevArray.concat(currentArray),
    []
  );
}



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



function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}


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