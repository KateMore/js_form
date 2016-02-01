

$(document).ready(function() {

$("input").hide();
$("input").first().show();
$("#name").keydown(function(){ 
$("#tel").show(); 
});
$("#tel").keydown(function(){ 
$("#email").show(); 
});
$("#email").keydown(function(){ 
$("#password").show(); 
});
$("#password").keydown(function(){ 
$("#agree").show(); 
});
})


