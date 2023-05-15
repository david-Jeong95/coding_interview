class ThreeInOne {
  constructor() {
    this.container = [];
    this.first = 0;
    this.middleBottom = 0;
    this.middleTop = 0;
  }
  // push1(value) {
  //   this.container.unshift(value);
  //   this.middleBottom++;
  //   this.middleTop++;
  // }
  push1(value) {
    this.container.splice(this.first, 0, value);
    this.first++;
    this.middleBottom++;
    this.middleTop++;
  }
  push2(value) {
    this.container.splice(this.middleTop, 0, value);
    this.middleTop++;
  }
  push3(value) {
    this.container.push(value);
  }
  // pop1() {
  //   if (this.isEmpty1()) {
  //     return undefined;
  //   }
  //   var answer = this.container.shift();
  //   if (this.middleBottom > 0) {
  //     this.middleBottom--;
  //     this.middleTop--;
  //   }
  //   return answer;
  // }
  pop1() {
    if (this.isEmpty1()) {
      return undefined;
    }

    var answer = this.container[this.first - 1];
    this.container.splice(this.first - 1, 1);
    if (this.middleBottom < this.middleTop) {
      this.middleTop--;
    }
    this.first--;
    return answer;
  }
  pop2() {
    if (this.isEmpty2()) {
      return undefined;
    }

    var answer = this.container[this.middleTop - 1];
    this.container.splice(this.middleTop - 1, 1);
    if (this.middleBottom < this.middleTop) {
      this.middleTop--;
    }
    return answer;
  }
  pop3(value) {
    if (this.isEmpty3()) {
      return undefined;
    }

    return this.container.pop(value);
  }
  peek1() {
    return this.isEmpty1() ?
      undefined : this.container[0];
  }
  peek2() {
    return this.isEmpty2() ?
      undefined : this.container[this.middleTop - 1];
  }
  peek3() {
    return this.isEmpty3() ?
      undefined : this.container[this.container.length - 1];
  }
  isEmpty1() {
    return this.middleBottom === 0;
  }
  isEmpty2() {
    return this.middleBottom === this.middleTop;
  }
  isEmpty3() {
    return this.middleTop === this.container.length;
  }
};




var t = new ThreeInOne();
t.push3('3b');
t.push2('2b');
t.push3('3a');
t.push1('1b');
t.push1('1a');
t.push1('1c');
t.push2('2a');
// t.push2('2b');
t.push2('2c');
// t.push3('3a');
// t.push3('3b');
t.push3('3c');

t.pop1();
t.pop1();
t.pop1();
// var a2 = t.pop2();
// var a3 = t.pop3();

// var peek1 = t.peek1();
// var peek2 = t.peek2();
// var peek3 = t.peek3();

// var b1 = t.pop1();
// var b2 = t.pop2();
// var b3 = t.pop3();

// var isEmptya1 = t.isEmpty1();
// var isEmptya2 = t.isEmpty2();
// var isEmptya3 = t.isEmpty3();

// var c1 = t.pop1();
// var c2 = t.pop2();
// var c3 = t.pop3();

// var d1 = t.pop1();
// var d2 = t.pop2();
// var d3 = t.pop3();

// var isEmptyb1 = t.isEmpty1();
// var isEmptyb2 = t.isEmpty2();
// var isEmptyb3 = t.isEmpty3();

console.log(t.container, t.middleBottom, t.middleTop);
// console.log(a1, a2, a3);
// console.log(peek1, peek2, peek3);
// console.log(b1, b2, b3);
// console.log(isEmptya1, isEmptya2, isEmptya3);
// console.log(c1, c2, c3);
// console.log(d1, d2, d3);
// console.log(isEmptyb1, isEmptyb2, isEmptyb3);