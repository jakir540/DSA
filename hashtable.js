class Hashtable {
  constructor(size) {
    this.arr = new Array(size);
    this.size = size;
  }
  HashFunction(str) {
    str = str + "";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum = sum + str.charCodeAt(i);
    }
    let index = sum % this.size;
    return index;
  }

  set(value) {
    let index = this.HashFunction(value);

    let indexArr = this.arr[index];

    if (!indexArr) {
      indexArr = [value];
    } else {
      indexArr.push(value);
    }
    this.arr[index] = indexArr;
  }

  get(value) {
    let index = this.HashFunction(value);
    let resultArr = this.arr[index];

    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] === value) {
        return true;
      }
    }
    return false;
  }
}

let hash = new Hashtable(5);

hash.set("jamir");
hash.set("Taniya");
hash.set("anis");
hash.set("anik");
hash.set("jakir");
hash.set("Jakia");
hash.set("asia");
hash.set("jarin");
hash.set("5");
console.log(hash.arr);
hash.get("hasan");
console.log(hash.get("jakir"));
