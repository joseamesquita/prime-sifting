$(document).ready(function(){
  $("form#prime").submit(function(event){
    event.preventDefault();
    var input = $("#num").val();

    var result = [];
    for(var i = 2; i <= input; i++){
      result.push(i);
      if(i % 2 === 0){
        result.pop();
      }
    }


    $("#result").text(result);
  });
});
