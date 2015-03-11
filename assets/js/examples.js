$(document).ready(function(){

  $("header").load("assets/html/examples-header.html");      
  $("nav").load("assets/html/examples-nav.html");      
  $("footer").load("assets/html/examples-footer.html");      

  if ($("input[name='direction']").length) {
    $("input[name='direction']").on('change',function(){
      if ($(this).val() === "row") {
        $('.example').css('flex-direction','row');
      } else {
        $('.example').css('flex-direction','column');
      }
    });
  }
  console.log($('header').html);

});
