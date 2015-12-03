var Slack = require('slack-client');
var _ = require('lodash');
var util = require('util');

var config = require('./config');
var quizRepo = require('./quiz-repo');
var formatAsBlanks = require('./format-as-blanks');
var quizBot = require('./quiz-bot')({
  slack: new Slack(config.get('slack.token'), true, true),
  config: config,
  quizRepo: quizRepo
});


quizRepo.getQuestionCount()
  .then(quizBot.startQuizBot);




