$(document).ready(function(){

    var interval = setInterval(function() {
	$.ajax({
	     url:'scripts/php/Chat.php',
		 success:function(data){
		   $('#messages').html(data);
		 }
	});
	},1000);
});