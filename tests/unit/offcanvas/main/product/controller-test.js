import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | offcanvas/main/product', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:offcanvas/main/product');
    assert.ok(controller);
  });
});
