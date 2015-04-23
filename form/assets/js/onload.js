jQuery(function($){
    // standard event
    $('#form-demo')
        .validator()
        .on('submit', function (e) { // standard event
          if (!e.isDefaultPrevented()) {
            // trigger custom event instead of direct call rule
            $(e.target).trigger('form submit',{name:'DTM Form Demo'});
          }
        })
        .on('invalid.bs.validator', function (e) { // custom event from plugin
            var fieldName = $(e.relatedTarget).attr('name'),
                message = e.detail[0],
                obj = {name:fieldName,message:message};
            // trigger custom event
            console.log(e.currentTarget,obj);
            $(e.currentTarget).trigger('invalid form submit',[{test:'test'}}]);
        });
});