/**
 * Container class
 */
class Container {
  /**
   * Container constructor
   * @constructor
   * @param  {Object} package_         [description]
   * @param  {Object} diStrategy   [description]
   */
  constructor(resolver, diStrategy) {
    this._resolver = resolver;
    this._diStrategy = diStrategy;
  }
  /**
   * Returns resolved bean
   * @param  {String} className name of class as object
   * @param  {...[Object]} args other
   * @return {Object} returns object with className specified
   */
  getBean(className, ...args) {
    let classes = this._resolver.getClasses();
    if (!classes[className]) {
      throw new TypeError('[' + className + '] Container has no such class!');
    }
    return this._diStrategy.execute(className, classes, ...args);
  }
}

module.exports = Container;
