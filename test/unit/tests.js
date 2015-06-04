describe("demoApp tsts", function() {

	describe("sanity", function() {
		it("should evaluate true to true", function() {
			expect(true).toBe(true);
		});
	});

	describe("the app", function() {
		beforeEach(module('demoApp'));

		it('should pass sanity', function() {
			expect(true).toBe(true);
		});
	});
})