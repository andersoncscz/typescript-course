//This is a generic abstract class, which receives 2 args with types that we don't know yet (generics).
abstract class BinaryOperation<T , R> {
    
    constructor(public op1: T, public op2: T) {}

    abstract execute(): R;
}

//BinarySum needs to receives two args type number
class BinarySum extends BinaryOperation<number, number> {
    execute = (): number => {
        return this.op1 + this.op2;
    }
}

//BinarySum needs to receives two args type string
class BinarySumChanged extends BinaryOperation<string, string> {
    execute = (): string => {
        return this.op1 + this.op2;
    }
}

//BinarySum: Executes a sum
console.log(new BinarySum(5, 15).execute());
//BinarySumChanged: Executes the same behavior, but now the args are strings, so it's going to return a new concat string.
console.log(new BinarySumChanged('5', '15').execute());



// ***************************************************************************************************************************************************************************************************



class CustomDate {
    constructor(public day: number, public month: number, public year: number) {}
}

//Dates needs to receives two diferent args: a CustomDate type and a string type.
class Dates extends BinaryOperation<CustomDate, string> {
    
    //OVERRIDES the execute method inherited from BinaryOperation
    execute = (): string => {
        const t1 = this.getTime(this.op1);
        const t2 = this.getTime(this.op2);
        const dif = Math.abs(t1 - t2);

        const day = 1000 * 60 * 60 * 24; //miliseconds that represents one day

        return `${Math.ceil(dif / day)} day(s)`;
    }

    getTime = (date: CustomDate): number => {
        let {day, month, year } = date;
        return new Date(`${month}/${day}/${year}`).getTime();
    }
    
}

//Calculate the diference in days between two dates.
const date1 = new CustomDate(1, 2, 2020);
const date2 = new CustomDate(5, 5, 2020);
console.log(new Dates(date1, date2).execute());




// ***************************************************************************************************************************************************************************************************




//A Generic queue which accepts only number or string
class Queue<T extends number | string> {

    private queue: Array<T>;
    
    constructor(...args: T[]) {
        this.queue = args;
    }

    getInLine = (item: T) => this.queue.push(item);

    next = (): T | null => {
        if (this.queue.length >= 0 && this.queue[0]) {
            const  first = this.queue[0];
            this.queue.splice(0, 1);
            return first;
        }
        return null;
    }

    print = (): void => console.log(this.queue);
}

console.log('Generic Queue: \n');


//const queueObject = new Queue<object>(1, 2, 3, 4); //Type 'object' does not satisfy the constraint 'string | number'.
const queueNumber = new Queue<number>(1, 2, 3, 4);
const queue = new Queue<string>('Anderson', 'Patricia', 'Alex', 'Maria');

queue.print();
queue.getInLine('Heitor');
queue.print();
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
console.log(queue.next());
queue.print();



// ***************************************************************************************************************************************************************************************************

type Item<K, V> = { key: K, value: V };

class Map<K, V> {
    
    //private items: Array<{ key: K, value: V }> //another option
    private items: Array<Item<K, V>>;
    
    constructor() {
        this.items = new Array<Item<K, V>>();
    }
    
    push = (item: Item<K, V>) => {
        const found = this.get(item.key);
        found ? found.value = item.value : this.items.push(item);
    }
    
    print = () => console.log(this.items);

    get = (key: K): Item<K, V> | null => {
        const result = this.items.filter(item => item.key === key);
        return result ? result[0] : null;
    }

    clear = () => this.items = new Array<Item<K, V>>();

}

console.log('\nGeneric Map: \n');

//Generic items defined as number, string.
const map = new Map<number, string>();

map.push({ key: 1, value: 'Anderson'});
map.push({ key: 2, value: 'Patricia'});
map.push({ key: 3, value: 'Maria'});
map.push({ key: 4, value: 'Heitor'});
map.push({ key: 5, value: 'Alex'});

console.log('\nElement 3:');
console.log(map.get(3));

console.log('\nAll Map:');
map.print();
map.clear();
console.log('\nMap Cleaned:');
map.print();