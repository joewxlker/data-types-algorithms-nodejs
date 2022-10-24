/**
 * 
 *  
 * 
 */
export default class BucketSort {

    readonly array: Array<number> = [];

    constructor(array: Array<number>) {
        this.array = array;
    }

    public sort() {
        const count: number[] = [];
        const output: number[] = [];
        const max = Math.max(...this.array);

        for (let i = 0; i < max + 1; i++) {
            count[i] = 0;
        }
        for (let i = 0; i < this.array.length; i++) {
            output[i] = 0;
        }
        for (let i = 0; i < this.array.length; i++) {
            count[this.array[i]]++
        }

        for (let i = 1; i < count.length; i++) {
            count[i] = count[i] + count[i - 1];
        }

        for (let i = this.array.length - 1; i >= 0; i--) {
            output[--count[this.array[i]]] = this.array[i];
        }

        return output
    }
}
