const Di = require('../src');

class TestApplication {
  static main() {
    console.time('APP');
    let appModules = new Di.Package(__dirname, [
      './test-beans/*.bean.js'
    ]);

    let classResolver = new Di.ClassesResolver(appModules);

    let recursiveDiStrategy = new Di.RecursiveStrategy();

    let container = new Di.Container(classResolver, recursiveDiStrategy);

    container.getBean('Ninja').run();

    console.timeEnd('APP');
  }
}

if (require.main === module) {
  TestApplication.main();
}
