class LearnConstructor {
  private readonly t3: string;

  constructor(
      private readonly t1: string,
      readonly t2: string,
  ) {
    this.t3 = 'private member';
  }

  print() {
    console.log(this.t1);
    console.log(this.t2);
    console.log(this.t3);
  }
}

const test = new LearnConstructor('A', 'B');

test.print();
console.log(test.t2);
