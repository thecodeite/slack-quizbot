var expect = require('chai').expect;

describe('quizBot', function () {
  it('is a function that, when called, returns an object with a function startQuizBot', function () {
    var quizBot = require('../quiz-bot');
    expect(typeof quizBot({}).startQuizBot).to.equal('function');
  });

  describe('startQuizBot', function () {
    it('connects to slack when invoked');
    
    describe('on receiving slack message', function () {
      it('ignores the message if it\'s not in the specified channel');

      it('ignores the message if it\'s not "q"')
    });
  });
});
