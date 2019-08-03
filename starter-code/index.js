class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a-b);
      this.length ++;
    }
    get(pos) {
      if(this.length || pos > this.length){
        throw Error("OutOfBounds");
      }
      return this.items(pos);
    }
    max() {
      if(!this.length){
        throw Error ("EmptySortedList");
      }
      return this.length(this.length -1);
      //return this.items[this.length-1]
    }
    min() {
      if(!this.length){
        throw Error ("EmptySortedList");
      }
      return this.item(0);
    }
    average() {
      if(!this.length){
        throw Error("EmptySortedList")
      }
      return this.sum()/this.length;
    }
    sum() {
      if(!this.length){
        return 0;
      }
      return this.items.reduce((total, currentValue)=> total+ currentValue);
    }
  };

  // class List extends SortedList{
  //   constructor(){
  //   }
  // }
  
  module.exports = SortedList;