window.onload = my_fun;

function my_fun() {
	var element = document.getElementById("button");
    element.onclick = function(){

    var httpRequest = new XMLHttpRequest();
	var url = "http://localhost:8080/superheroes.php";
	httpRequest.onreadystatechange = function(){
		
		if (httpRequest.readyState === XMLHttpRequest.DONE){
			if (httpRequest.status === 200) {
			var response = httpRequest.responseText;
			alert(response);
		}
		else{
			alert('Error!');
		}
	
	
	httpRequest.open("POST",url,true);
	httpRequest.send();}
		
	}
		
    }
}
