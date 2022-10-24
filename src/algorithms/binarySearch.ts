import BucketSort from "./bucketSort";

abstract class Log {
    constructor(public array: Array<number>) {
        this.array = array;
    }
    abstract indexOf(item: number): number;
    abstract findLogTwo(x: number): number;
}
/**
*
* logarithm for binary serach or O(Log n)
*   - Loops 3.32 times or O(Log 10(n) = 2^3.32 = 10)
*   - Loops 4.32 times or O(Log 20(n) = 2^4.32 = 20
*
*/
export default class Logarithm extends Log {
    public constructor(array: Array<number>) {
        super(array);
    }

    public indexOf(item: number): number {
        if (!this.isSorted(this.array)) {
            const sort = new BucketSort(this.array);
            this.array = sort.sort();
        }
        let count = 0;
        let start = 0;
        let end = this.array.length;
        while (count < (this.findLogTwo(this.array.length) + 1)) {
            count++
            let middle = Math.floor((start + end) / 2);
            if (item === this.array[middle]) return middle;
            item > this.array[middle] ? start = middle++ : end = middle--
        }
        return -1
    }

    public isSorted(x: Array<number>) {
        let output: boolean = false;
        for (let i = 0; i < x.length - 1; i++) {
            if (x[0] < x[1]) {
                if (x[i] < x[i + 1]) output = true;
                else {
                    output = false;
                    break;
                }
            }
            else if (x[i] < x[i + 1]) output = true;
            else {
                output = false;
                break;
            }
        }
        return output
    }

    public findLogTwo(x: number): number {
        return Math.log(x) / Math.log(2);
    }
}

export class InheritLogarithms extends Logarithm {
    public constructor(array: Array<number>, public search: number | null) {
        super(array);
    }
    public returnLookupValue(): string | void | number {
        if (!this.search) return
        const ans = super.indexOf(this.search)
        return ans === -1 ? 'ITEM NOT FOUND' : this.array[ans]
    }
}