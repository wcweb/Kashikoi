export default Ember.View.extend({
    templateName: 'views/_quiz',
    name:function(){
      return "boo foo";
    }.property(),
    orignW:700,
    didInsertElement:function(){
        this.set('orignW',$('#quizContent').width());
        $(function () {
            $.ajax({
                url:"http://localhost:3000/api/quiz/1",
                data:{item:1}
            }).done(function(msg){
                Ember.run(function(){
                    var options = {
                        json:msg,
                        backButtonText:' &laquo;  返回 ',
                        nextButtonText:' 下一题 &raquo; ',
                        checkAnswerText:  '检查答案!',
                        nextQuestionText: '下一题 &raquo; ',
                        tryAgainText:'再试一次',
                        perQuestionResponseMessaging:true,
                        completionResponseMessaging:true,
                        skipStartButton:true
                    };
                    $('#slickQuiz').slickQuiz(options);
                });
            },function(e){
                Ember.run(function(){

                });
            });
        });
    }
});


