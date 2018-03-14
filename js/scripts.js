$( document ).on( "change", "input[name='picture']", function() {
    var reader = new FileReader();
    reader.onload = function(){
        $('.itm-view-picture img').attr('src', reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
});