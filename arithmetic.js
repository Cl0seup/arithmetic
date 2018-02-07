var a;
a = parseFloat(prompt("Enter a value"));
document.write("<div>")
document.write("Given value is :-" + " " + a + " " + ".");
document.write("<br>" + "<br>");

function numbers() {
	document.write("Numbers from 1 to " + a + " :-" + " " + " ");
	for (i = 1; i < a; i++) {
		document.write(i + " " + "," + " ");
	}
	document.write(a + " " + ".")
	document.write("<br>" + "<br>");
}
numbers();

function table() {
	document.write("Table is :-" + "<br>")
	for (i = 1; i <= 10; i++) {
		document.write(a + "*" + i + "=", a * i, "<br>");
	}
}
table();

document.write("<br>" + "Square is :-" + "  " + a * a + " " + "." + "<br>");

document.write("<br>" + " Square root is :-" + " " + Math.sqrt(a) + " " + "." + "<br>" + "<br>");

function numbertype() {
	if (a % 2 == 0) {
		document.write("This is  a prime number:-" + " " + a + " " + ".");
	} else if (a % 2 != 0) {
		document.write("This is an odd number :-" + " " + a + " " + ".");
	} else if (a == 0) {
		document.write(" Please enter a valid number")
	}
	document.write("<br>" + "<br>");
}
numbertype();

function primenumbers() {
	document.write("Prime numbers are :-" + " ");
	for (i = 2; i < a; i += 2) {
		document.write(i + " " + "," + " ");
	}
	if (a % 2 == 0) {
		document.write(a + " " + ".");
	}
	document.write("<br>" + "<br>");
}
primenumbers();

function oddnumbers() {
	document.write("Odd numbers  are :-" + " ");
	for (i = 1; i < a; i += 2) {
		document.write(i + " " + "," + " ");
	}
	if (a % 2 != 0) {
		document.write(a + " " + ".");
	}
	document.write("<br>" + "<br>");
}
oddnumbers();
document.write("</div>")
