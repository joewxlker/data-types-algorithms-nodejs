export default class mySet {
  public collection: Array<any> = [];

  has = (element: any) => this.collection.indexOf(element) !== -1

  values = () => this.collection;

  add = (element: any) => {
    this.has(element) && this.collection.push(element);
    return this.has(element)
  }

  delete = (element: any) => {
    if (!this.has(element)) return
    const index = this.collection.indexOf(element);
    this.collection.splice(index, 1)
  }

  size = () => this.collection.length;

  union = (otherSet: any) => {
    let unionSet = new Set()
    const firstSet = this.values();
    const secondSet: any[] = otherSet.values();
    firstSet.forEach(x => unionSet.add(x))
    secondSet.forEach(x => unionSet.add(x))
    return unionSet;
  }
}
