export interface TestInterface {
    test(): void;
  asd(): void;
}
export class TestClass {

  test(): void {
    console.log('test');

    if (true) {
      console.log('if');
    }

    console.log('asd');
  }

  asd(): void {
    console.log('asd');
  }
}
