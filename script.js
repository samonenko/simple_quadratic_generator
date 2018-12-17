var step = 0;
var x_1 = 0;
var x_2 = 0;

function generate_equation() {
	var key = document.getElementById("input_key").value;
	x_1 = my_random(key) % 20 - 10;
	x_2 = my_random(key) % 20 - 10;
	var p = -(x_1 + x_2);
	var q = x_1 * x_2;
	var text = create_euqation(p, q);
	print_in_div("equation", text);
}

function show_answer() {
	text = "$$x_1 = "+x_1+", \\quad x_2 = "+x_2+"$$";
	print_in_div("answer", text);
}

function create_euqation(p, q) {
	return "$$x^2 + ("+p+") \\cdot x + ("+q+") = 0$$";
}

function print_in_div(divID, print_text) {
	var div = document.getElementById(divID);
	div.innerHTML = print_text;
	MathJax.Hub.Queue(['Typeset',MathJax.Hub,'result']);  //Нужно для применения MathJax после нового вывода
}

function my_random(key) {
	var value = Math.abs(Math.floor(Math.sin(key + step*step)*1000));
	step++;
	return value;
	
}