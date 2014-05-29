export default Ember.Component.extend({
  pages: ['playerContent', 'paperContent', 'quizContent', 'discussContent', 'relativedContent'],
  defaultPageName: 'playerContent',
  currentPage: 'playerContent',
  smallW: 265,
  smallH: 225,
  orignW: 700,
  orighH: 500,
  playerShowStatus: true, // true for big , false for small one;
  pageAnimated: true,
  videoFile: '',

  // nothing happend didInsertElement.
  didInsertElement: function() {
    var pages = this.get('pages') || [],
      currentPage = this.get('currentPage') || '';
    var that = this,
      jp;
    pages.forEach(function(elem, idx) {
      if (pages[idx] !== currentPage && pages[idx] !== 'playerContent') {
        $('#' + pages[idx]).hide();
      }
    });
    var orignW = this.get('orignW'),
        orignH = this.get('orignH'),
        smallW = this.get('smallW'),
        smallH = this.get('smallH');
    var videoFile = this.get('videoFile');

    orignW = $('#playerContent').width();
    orignH = orignW*9/16;
    $('#playerWrapper').height(orignH);
    smallW = $('#playerWrapper').width() - orignW;
    smallH = smallW*9/16;
    $(pages).each(function(idx,ele){
      $('#'+ele).height(orignH);
    });


    this.set('orignW', orignW);
    this.set('smallW', smallW);
    this.set('orignH', orignH);
    if (currentPage !== 'playerContent') {
      //$('#playerContent').animate({left:'+=700'},'fast');

      jp = jwplayer("player").setup({
        //file: window.ENV.demoVideoPath,
        file: videoFile,
        flashplayer: 'AvaPlayer.swf',
        height: smallH,
        width: smallW
      }).onReady(function() {
        // console.log("jwplayer ready ");
      });

      //jp.onReady(function(){
      that.get('togglePlayer')(false);
      //});
    } else {
      jp = jwplayer("player").setup({
        //file: window.ENV.demoVideoPath,
        file: videoFile,
        flashplayer: 'AvaPlayer.swf',
        height: orignH,
        width: orignW
      }).onReady(function() {
        // console.log("jwplayer ready ");
      });
    }

    this.set('pageAnimated', 'true');
  },
  togglePlayer: function() {
    var playerShowStatus = this.get('playerShowStatus') || false;
    var that = this;
    return function(isPlayerClick) {
      var orignW = that.get('orignW'),
        orignH = that.get('orignH'),
        smallW = that.get('smallW'),
        smallH = that.get('smallH');
      if (isPlayerClick) {

        that.set('pageAnimated', false);
        $('#playerContent').animate({
          //opacity: 0.25,
          height: orignH,
          left: "-=" + orignW
        }, 800, function() {
          $('#player').animate({
            width: orignW,
            height: orignH
          }, 400, function() {
            // Animation complete.
            that.set('pageAnimated', true);
            that.set('playerShowStatus', true);
          });

          $("#playerNav").animate({
            top: "-=" + smallH
          }, 'fast');
        });


      } else {
        if (playerShowStatus) {
          that.set('pageAnimated', false);
          $("#playerNav").animate({
            top: "+="+ smallH
          }, 'fast', function() {
            //console.log($('#player'));


            $('#player').animate({
              width: smallW,
              height: smallH
            }, 400, function() {
              $('#playerContent').animate({
                //opacity: 0.25,
                height: smallH,
                left: "+=" + orignW
              }, 800, function() {
                // Animation complete.
                that.set('pageAnimated', true);
                that.set('playerShowStatus', false);
              });

            });
          });


        }
      }
    };
  }.property('playerShowStatus', 'pageAnimated','orignW','smallW','smallH'),

  togglePage: function() {
    var currentPage = this.get('currentPage') || '',
      that = this;
    return function(nextPage) {
      if (currentPage === '') return;
      if (currentPage !== nextPage) {
        if (currentPage !== 'playerContent')
          $("#" + currentPage).hide();
        $("#" + nextPage).show();
        that.set('currentPage', nextPage);
      }
    };
  }.property('currentPage'),

  actions: {
    navClicked: function(pageName) {
      var defaultPageName = this.get('defaultPageName') ||
        this.get('pages')[0] || "";

      if (this.get('currentPage') !== pageName &&
        this.get('pageAnimated')) {
        if (pageName === defaultPageName) {
          this.get('togglePlayer')(true);
        } else {
          this.get('togglePlayer')(false);
        }

        this.get('togglePage')(pageName);
      }
    }
  }
});
