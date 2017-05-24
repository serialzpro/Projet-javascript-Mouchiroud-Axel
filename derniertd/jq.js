$ (document).ready(function(){
	console.log("ok ok");


$ ("#req_get").click(function(){
	$.get('index4.php?name=re&firstname=te', function(data){
		console.log(data);
	});
	
	$.getJSON('index4.php',  {
			"name" : 're',
			"firstname" : '1'
		},
		function(data){
			console.log(data);
		});
});


});