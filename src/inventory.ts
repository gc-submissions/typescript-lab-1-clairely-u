import { calcAverageProductPrice, Product } from "../src/products";

export interface InventoryItem {
    product: Product;
    quantity: number;
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10,
        },
        quantity: 10,
    },
    {
        product: {
            name: "sensor",
            price: 12.50,
        },
        quantity: 4,
    },
    {
        product: {
            name: "LED",
            price: 1,
        },
        quantity: 20,
    }
] 

export function calcInventoryValue (array: InventoryItem[]): number {
    /* This is calculated as follows: For each InventoryItem take the product price times the quantity. Add these together for all the items. For the above data, the total will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170. */
    let invTotal = 0;
    for (let i = 0; i < array.length; i ++) {
        invTotal += (array[i].product.price * array[i].quantity)
    }
    return invTotal;
}
calcInventoryValue(inventory);
let invResult = calcInventoryValue(inventory);
console.log(invResult);