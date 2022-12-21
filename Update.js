$(document).ready(function () {
    $("form").submit(function (event) {
      event.preventDefault();
      var formData = {
        Type: $("#Type").val(),
        drug_name: $("#drug_name").val(drug_name),
        country: $("#country").val(country),
        price: $("#price").val(price),
      };
      $.ajax({
        type: "PUT",
        url: "http://127.0.0.1:8000/api/updateD/11",
        data: formData,
        dataType: "json",
        encode: true,
        success: function(response) {
          console.log(data);
        }
     });
  
    });
  });