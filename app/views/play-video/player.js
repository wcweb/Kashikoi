var PlayerView = Ember.View.extend({
    templateName: 'views/_player',
    didInsertElement:function(){
       
         // if($("#player").length>0){
         //    jwplayer("player").setup({
         //        file: 'assets/demo.m4v',
         //        flashplayer: 'AvaPlayer.swf',
         //        height: 200,
         //        width: 350
         //    });
         // }
            
    }
});

export default PlayerView;
