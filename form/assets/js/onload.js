$( document ).ready(function() {
    // standard event
    $('#form-demo')
        .validator()
        .on('submit', function (e) { // standard event
          if (!e.isDefaultPrevented()) {
            // trigger custom event instead of direct call rule
            $(e.target).trigger('form-submit',['DTM Form Demo']);
          }
        })
        .on('invalid.bs.validator', function (e) { // custom event from plugin
            var fieldName = $(e.relatedTarget).attr('name'),
                message = e.detail[0],
                obj = {name:fieldName,message:message};
            // trigger custom event - passing object
            $(e.target).trigger('form-invalid',obj);
        });
});