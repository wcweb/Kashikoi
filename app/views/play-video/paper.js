export
default Ember.View.extend({
  templateName: 'views/_paper',
  name: 'fuck bob',
  didInsertElement: function() {
    Ember.run(function() {
      $('#documentViewer').FlexPaperViewer({
        config: {
          SWFFile: '/assets/ppt.swf',
          //SWFFile : '/vendor/flexpaper_2.2.3/docs/Paper.pdf.swf',
          //PDFFile : '/vendor/flexpaper_2.2.3/pdf/Paper.pdf',
          jsDirectory: '/vendor/flexpaper_2.2.3/js/',
          Scale: 0.6,
          ZoomTransition: 'easeOut',
          ZoomTime: 0.5,
          ZoomInterval: 0.2,
          FitPageOnLoad: true,
          FitWidthOnLoad: false,
          FullScreenAsMaxWindow: false,
          ProgressiveLoading: false,
          MinZoomSize: 0.2,
          MaxZoomSize: 5,
          SearchMatchAll: false,
          InitViewMode: 'Portrait',
          RenderingOrder: 'flash',
          StartAtPage: '',

          ViewModeToolsVisible: true,
          ZoomToolsVisible: true,
          NavToolsVisible: true,
          CursorToolsVisible: true,
          SearchToolsVisible: true,
          WMode: 'window',
          localeChain: 'en_US'
        }
      });
      $('#documentViewer').on('onDocumentLoaded', function(e, eventInfo) {
        // console.log(eventInfo);
        //                   console.log(e);
      });
      $('#documentViewer').on('onCurrentPageChanged', function(e) {
        // console.log(e);
      });
    });
  }


});
