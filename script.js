jQuery(document).ready(function ($) {
  $(".previous").hide();
  $.ajax({
    type: "GET",
    url: "https://reqres.in/api/users?page=" + 1,

    success: function (res) {
      $(".users__Data").html("");
      for (var a = 0; a < res.data.length; a++) {
        $(".users__Data").append(
          `<div class="user__Data"> <div> <img src="${
            res.data[a].avatar
          }" alt="Avatar"></div> <div class="firstLast__Name"><h4 class="firstname ">Name: ${
            res.data[a].first_name + " " + res.data[a].last_name
          }
            </h4><h5 class="email">Email: ${
              res.data[a].email
            }</h5></div> </div>`
        );
      }
    },
  });
  $(".next").click(function () {
    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users?page=" + 2,

      success: function (res) {
        $(".users__Data").html("");
        for (var a = 0; a < res.data.length; a++) {
          $(".users__Data").append(
            `<div class="user__Data"> <div> <img src="${
              res.data[a].avatar
            }" alt="Avatar"></div> <div class="firstLast__Name"><h4 class="firstname ">Name: ${
              res.data[a].first_name + " " + res.data[a].last_name
            }
            </h4><h5 class="email">Email: ${
              res.data[a].email
            }</h5></div> </div>`
          );
        }
      },
    });
    $(".next").hide();
    $(".previous").show();
  });
  $(".previous").click(function () {
    $.ajax({
      type: "GET",
      url: "https://reqres.in/api/users?page=" + 1,

      success: function (res) {
        $(".users__Data").html("");
        for (var a = 0; a < res.data.length; a++) {
          $(".users__Data").append(
            `<div class="user__Data"> <div> <img src="${
              res.data[a].avatar
            }" alt="Avatar"></div> <div class="firstLast__Name"><h4 class="firstname ">Name: ${
              res.data[a].first_name + " " + res.data[a].last_name
            }
            </h4><h5 class="email">Email: ${
              res.data[a].email
            }</h5></div> </div>`
          );
        }
      },
    });

    $(".previous").hide();
    $(".next").show();
  });
});
