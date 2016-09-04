var app;

(function () {
  app = {
    init: function() {
        $('body').append('<h1>Test Text</h1>');
        setTimeout(function() {
          $('body').append('<h1>Test Text</h1>');
        }, 3000);
    }
  };
})();
