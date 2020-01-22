$(document).ready(function(){
  $("form#prime").submit(function(event){
    event.preventDefault();
    var input = $("#num").val();

    var result = [];
    for(var i = 2; i <= input; i++){
      result.push(i);
      if(i % 2 === 0 && i !== 2){
        result.pop();
      }
      else if(i % 3 === 0 && i !== 3){
        result.pop();
      }
      else if(i % 5 === 0 && i !== 5){
        result.pop();
      }
    }


    $("#result").text(result);
  });
});
