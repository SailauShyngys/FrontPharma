function GetDrug(){
    $(document).ready(function () {
      $.ajax({
        url: "http://127.0.0.1:8000/api/showD",
        dataType: "json"
      }).done(function(response) {
        let drugsDiv = $("#drug");
        console.log(response.data);
        $.each(response.data, function(i, drug) {
          drugsDiv.append('<p> ' + drug.drug_name + '</p>');
          $.each(drug.order, function(i, drugOrder) {
            console.log(drugOrder);
            drugsDiv.append('<p>' + drugOrder + '</p>');
          });
        });
      });
    });
    }