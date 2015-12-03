var expect = require('chai').expect;

describe('quizBot', function () {
  it('is a function that creates an object when invoked', function () {
    expect(typeof require('../quiz-bot')({})).to.equal('object');
  });


});
