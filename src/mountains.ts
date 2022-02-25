export interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    {
        name: "Kilamanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    }
]

export function findNameOfTallestMountain (array: Mountain[]): string{
    let tallestMoutain = "Everest";
    for (let i = 0; i < array.length; i++) {
        for(let j=1;j<array.length;j++){
            for(let k =2;k<array.length;k++){
                if(array[i].height > array[j].height && array[i].height > array[k].height){
                      tallestMoutain = array[i].name;
             }
           }
        }
     } return tallestMoutain;
}

console.log(findNameOfTallestMountain(mountains));

