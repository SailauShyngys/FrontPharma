$(document).ready(function () {
    $("#2").submit(function (event) {
      event.preventDefault();
      var formData = {
        drug_name: $("#drug_name").val(),
        country: $("#country").val(),
        price: $("#price").val(),
      };
      $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/createD",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
    });
  });