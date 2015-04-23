jQuery(function($){
    // standard event
    $('#form-demo')
        .validator()
        .on('submit', function (e) { // standard event
          if (e.isDefaultPrevented()) {
            // handle the invalid form...
            console.log('invalid');
          } else {
            // everything looks good!
            console.log('go for it');
          }
        })
        .on('invalid.bs.validator', function (e) { // custom event
            console.log(e);
        })
});