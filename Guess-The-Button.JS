function Winner(a) {
	let x = Math.floor(Math.random()* a + 1);
    for(let i  = 1; i <= a; ++i){
    if( i == x){
    return alert ("Button " + i + " won");
    	}
    }
}
document.getElementById("demo").innerHTML = window.Winner(3); 
