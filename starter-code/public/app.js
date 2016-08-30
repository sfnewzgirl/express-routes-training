console.log('app.js connected');
$(document).ready(function(){
  console.log('DOM ready');

$('#guess-number-form').on('submit', function(event){
  event.preventDefault();
  
  $.ajax({
    method: 'GET',
    url: "/pickanumber",
    dataType: 'text',
    success: onSuccess
  });

  function onSuccess(text) {
    $("#guess-number-form").html("success");
  };
});
