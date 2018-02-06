var a;
a = prompt("Enter a number");

document.write("<div class='style'>");

document.write("Given number is :-" + a);
document.write("<br>" + "<br>");

function table() {
	document.write("Table is :-" + "<br>")
	for (i = 1; i <= 10; i++) {
		document.write(a + "*" + i + "=", a * i, "<br>");
	}
}
table();

function square() {
	document.write("<br>" + "Square is :-" + " " + a * a, "<br>");
}
square();

document.write("<br>" + " Square root is :-" + " " + Math.sqrt(a) + "<br>" + "<br>");

function numbers() {
	document.write("Numbers are :-" + " ");
	for (i = 1; i <= a; i++) {
		document.write(i + ",");
	}
	document.write("<br>" + "<br>");
}
numbers();

function numbertype() {
	if (a % 2 == 0) {
		document.write("Number is Prime number:-" + " " + a);
	} else if (a % 2 != 0) {
		document.write("Number is Odd number :-" + " " + a);
	}
	document.write("<br>" + "<br>");
}
numbertype();

function primenumbers() {
	document.write("Prime numbers are :-" + " ");
	for (i = 2; i <= a; i += 2) {
		document.write(i + ",");
	}
	document.write("<br>" + "<br>");
}
primenumbers();

function oddnumbers() {
	document.write("Odd numbers  are :-" + " ");
	for (i = 1; i <= a; i += 2) {
		document.write(i + ",");
	}
	document.write("<br>" + "<br>");
}
oddnumbers();

function addition() {
	var sum = 0;
	for (i = 1; i <= a; i++) {
		document.write(i);
	}

}
addition();
document.write("</div>");
