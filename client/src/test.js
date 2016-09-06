var tester;

(function () {
  tester = {
    init: function() {
        $('body').append('<h1>More Test Text</h1>');
        setTimeout(function() {
          $('body').append('<h1 style="float: left;">More Test Text</h1>');
        }, 1000);
    }
  };
})();
