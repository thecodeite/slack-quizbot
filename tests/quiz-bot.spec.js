var expect = require('chai').expect;

describe('quizBot', function () {
  it('is a function that, when called, returns an object', function () {
    var quizBot = require('../quiz-bot');
    expect(typeof quizBot({}).startQuizBot).to.equal('function');
  });

  it('returned object has properties startQuizBot and state');

  it('returned object is an EventEmitter');

  it('emits events when state changes');

  it('emits events when commands received');

  it('emits event when question answered correctly');

  it('emits event when question timed out');

  describe('startQuizBot', function () {
    it('connects to slack when invoked');
    
    
    describe('on receiving slack message', function () {
      it('ignores the message if it\'s not in the specified channel');

      it('ignores the message if it\'s not "q"')
    });
  });
});
