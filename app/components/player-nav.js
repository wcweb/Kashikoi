export default Ember.Component.extend({
  // classNames: ['pretty-color'],
  // attributeBindings: ['style'],
  // style: function(){
  //   return 'color: ' + this.get('name') + ';';
  // }.property('name')
  pages:['playerContent', 'paperContent','quizContent','discussContent','relativedContent'],
  defaultPageName:'playerContent',
  currentPage:'discussContent',
  playerShowStatus:true, // true for big , false for small one;
  pageAnimated:true,

  // nothing happend didInsertElement.
  didInsertElement:function(){
    var pages = this.get('pages') || [],
        currentPage = this.get('currentPage') || '';
        var that = this,jp;
    pages.forEach(function(elem,idx){
        if(pages[idx] !== currentPage && pages[idx]!== 'playerContent'){
            $('#'+pages[idx]).hide();
        }
    });
            if(currentPage !== 'playerContent'){
              //$('#playerContent').animate({left:'+=700'},'fast');

              jp = jwplayer("player").setup({
                        file: 'assets/demo.m4v',
                        flashplayer: 'AvaPlayer.swf',
                        height: 225,
                        width: 350
                    }).onReady(function(){
                      console.log("jwplayer ready ");
                    });
                    
              //jp.onReady(function(){
                     that.get('togglePlayer')(false);  
              //});
             }else{
               jp = jwplayer("player").setup({
                        file: 'assets/demo.m4v',
                        flashplayer: 'AvaPlayer.swf',
                        height: 500,
                        width: 700
                    }).onReady(function(){
                      console.log("jwplayer ready ");
                    });
             }
        
    this.set('pageAnimated','true');
  },

  togglePlayer: function(){
    var playerShowStatus = this.get('playerShowStatus') || false;
    var that = this;
    return function(isPlayerClick){
            
            if(isPlayerClick){

                that.set('pageAnimated',false);
                $('#playerContent').animate({
                    //opacity: 0.25,
                    left: "-=700"
                  }, 800, function() {
                    $('#player').animate({
                      width:"700",
                      height: "500"
                    },400,function(){
                      // Animation complete.
                      that.set('pageAnimated',true);
                      that.set('playerShowStatus',true);
                    });
                    
                    $("#playerNav").animate({
                        top:"-=225"
                    }, 'fast');
                  });

            
            }else{
                if(playerShowStatus ){
                    that.set('pageAnimated',false);
                    $("#playerNav").animate({
                        top:"+=225"
                    }, 'fast',function(){
                        //console.log($('#player'));
                      

                      $('#player').animate({
                        width:"350",
                        height: "225"
                      },400,function(){
                          $('#playerContent').animate({
                          //opacity: 0.25,
                          left: "+=700"
                          }, 800, function() {
                          // Animation complete.
                            that.set('pageAnimated',true);
                            that.set('playerShowStatus',false);
                        });
                        
                      });
                    });
                    
                    
                }
            }
        };
    }.property('playerShowStatus','pageAnimated'),

  togglePage: function(){
    var currentPage = this.get('currentPage') || '',
        that = this;
    return function(nextPage){
        if(currentPage === '') return;
        if(currentPage !== nextPage){
            if(currentPage !== 'playerContent')
            $("#"+currentPage).hide();
            $("#"+nextPage).show();
            that.set('currentPage',nextPage);
        }
    };
  }.property('currentPage'),

  actions:{
    navClicked:function(pageName){
        var defaultPageName = this.get('defaultPageName') || 
                                this.get('pages')[0]|| "";

         if(this.get('currentPage') !== pageName && 
            this.get('pageAnimated')){
            if(pageName === defaultPageName){
                this.get('togglePlayer')(true);
            }else{
                this.get('togglePlayer')(false);
            }

            this.get('togglePage')(pageName);
        }
    }
  }
});


