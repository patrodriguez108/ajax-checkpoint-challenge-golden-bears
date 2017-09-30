$(document).ready(function() {
  $("form#add_horse").on("click", function() {
    event.preventDefault();
    $form = $(this);
    var method = $form.attr("method");
    var url = $form.attr("action");
    var request = $.ajax({
      method: method,
      url: url
    });

    request.done(function(response) {
      var button = $form.children("button");
      button.hide();
      $form.append(response)
    });
  });


});
