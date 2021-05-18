$(function () {
  loadPage__One();
  $(".next").click(loadPage__Two);
  $(".previous").click(loadPage__One);
});

function loadPage__One() {
  $(".previous").hide();
  $(".next").show();
  $.ajax({
    url: "https://reqres.in/api/users?page=1",
    method: "GET",
    success: function (response) {
      var users__Data = $(".users__Data");
      users__Data.empty();
      for (var i = 0; i < 7; i++) {
        var user__Data = response.data[i];
        users__Data.append(
          `<div class="user__Data"> <div> <img src="${
            user__Data.avatar
          }" alt="Avatar"></div> <div class="firstLast__Name"><h4 class="firstname ">Name: ${
            user__Data.first_name + " " + user__Data.last_name
          }
            </h4><h5 class="email">Email: ${user__Data.email}</h5></div> </div>`
        );
      }
    },
  });
}
function loadPage__Two() {
  $(".next").hide();
  $(".previous").show();
  $.ajax({
    url: "https://reqres.in/api/users?page=2",
    method: "GET",
    success: function (response) {
      var users__Data = $(".users__Data");
      users__Data.empty();
      for (var i = 0; i < 7; i++) {
        var user__Data = response.data[i];
        users__Data.append(
          `<div class="user__Data"> <div> <img src="${
            user__Data.avatar
          }" alt="Avatar"></div> <div class="firstLast__Name"><h4 class="firstname ">Name: ${
            user__Data.first_name + " " + user__Data.last_name
          }
            </h4><h5 class="email">Email: ${user__Data.email}</h5></div> </div>`
        );
      }
    },
  });
}
