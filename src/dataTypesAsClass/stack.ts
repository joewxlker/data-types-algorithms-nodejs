export default class Stack {
  public storage: any = {}
  public count: number = 0;

  push = (value: any) => {
    this.storage[this.count] = value;
    this.count++;
  }

  peek = () => {
    return this.storage[this.count - 1]
  }
}