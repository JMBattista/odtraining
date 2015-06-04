

describe('demoApp tests', function () {

  var ctrl;
  var scope;

  beforeEach(module('demoApp'));

  beforeEach(inject(function ($controller) {
    scope = {};
    ctrl = $controller('FirstController', {$scope: scope});
  }));

  it('sample test', function () {
    expect(true).toBe(true);
  });

});
