/* Create a Cat object that has a property averageWeight that is shared from
 * all instances of Cat objects. Each cat should have a name and a weight.
 * Create getters and setters for the cat weight using Object.defineProperty.
 * When the weight of a cat is updated, the average weight should also be updated.
 */
var Cat = (function (){
  var cats = {
    count: 0,
    totalWeight: 0,
    avgWeight: 0
  }

  function Cat(catName, catWeight){
    if(!catName || !catWeight){
      throw new Error('Need name and weight');
    }
    cats.count++;
    this.name = catName;

    Object.defineProperty(this, 'weight', {
      get: function() {
        return this._weight || 0;
      },
      set: function(val) {
        cats.totalWeight = cats.totalWeight - this.weight + val;
        cat.avgWeight = cats.totalWeight / cats.count;
        return this._weight = val;
      }
    });

    this.weight = catWeight;
  }
  Cat.averageWeight = function() {
    return cats.avgWeight;
  }

  return Cat;

}());
