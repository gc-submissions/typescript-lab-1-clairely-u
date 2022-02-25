export interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    {
        name: "Cat pens",
        price: 1.99
    },
    {
        name: "starry stationery set",
        price: 5
    },
    {
        name: "Cards",
        price: .99
    },
    {
        name: "Flowers",
        price: 2,
    }
]

export function calcAverageProductPrice (array: Product[]): number {
    if (array.length > 0) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i].price;
        }
        var avg: number = total / array.length;
        return avg;
    } else {
        return 0;
    }
}
calcAverageProductPrice(products);
let avgPrice = calcAverageProductPrice(products);
console.log(avgPrice);