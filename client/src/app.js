var app;

(function () {
  app = {
    init: function() {
        $('body').append('<div>Test Text</div>');
        setTimeout(function() {
          $('body').append('<div>Test Text</div>');
        }, 3000);
    }
  };
})();
