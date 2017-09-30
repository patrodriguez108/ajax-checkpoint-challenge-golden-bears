$(document).ready(function() {
  $("form#to_horse_form").on("submit", function() {
    event.preventDefault();
    $form = $(this);
    var url = $form.attr("action");
    var request = $.ajax({
      method: "get",
      url: url
    });

    request.done(function(response) {
      var button = $form.children("button");
      button.hide();
      $form.append(response)
    });
  });

  // $("form#new-horse-form").on("click", "button#submit-new-horse", function() {
  //   event.preventDefault();
  //   console.log("plz work");
  // });

  $("ul.list").on("click", "a", function() {
    event.preventDefault();
    $link = $(this);
    var url = $link.attr("href");
    var request = $.ajax({
      method: "get",
      url: url
    });

    request.done(function(response) {
      var li = $link.closest("li");
      li.append(response)
    })
  })
});
