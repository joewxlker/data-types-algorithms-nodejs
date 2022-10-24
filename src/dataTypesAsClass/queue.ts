export default class Queue {

  public collection: Array<any> = [];
  print = () => console.log(this.collection)

  enqueue = (element: any) => {
    if (this.collection.length === 0) return this.collection.push(element)
    let added = false;
    for (let i = 0; i < this.collection.length; i++) {
      if (element[1] < this.collection[i][1]) {
        this.collection.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) this.collection.push(element);
  }


  dequeue = () => this.collection.shift();
  front = () => this.collection[0];
  size = () => this.collection.length;
  isEmpty = () => this.collection.length === 0;

}