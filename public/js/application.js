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

  // $("form#new-horse-form").on("submit", function() {
  //   event.preventDefault();
  //   console.log("please")
  // })

  // ---------------------------------------------------------
  // I have tried several different approaches to this. For each of them I have not been able to prevent default. Each and every time the browser brings me over to the horse's show page. I am disgusted by this website and these horses.

  // I think this might have something to do with the form being situated on the /horses/new view page, but the user being on the homepage when submitting the new horse. But I'm not quite sure.
  // ---------------------------------------------------------

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
