 var a;
 a = prompt("enter a value");
 /* document.write("<div>");
  for (i = 1; i <= 10; i++) {
      document.write(a + "*" + i + "=");
      document.write(a * i, "<br>");
  }
  document.write("</div>");*/

 function table() {
     document.write("table is :" + "<br>")
     for (i = 1; i <= 10; i++) {
         document.write(a + "*" + i + "=", a * i, "<br>");
     }
 }

 table();

 function square() {
     document.write("<br>" + "square is :", +a * a, "<br>");
 }
 square();
 document.write("<br>" + " square root is :" + Math.sqrt(a) + "<br>" + "<br>");

 function numbers() {
     document.write("Numbers are :");
     for (i = 1; i <= a; i++) {
         document.write(i + ",");
     }
     document.write("<br>" + "<br>");
 }
 numbers();

 function primenumbers() {
     document.write("Prime numbers are :");
     for (i = 2; i <= a; i += 2) {
         document.write(i + ",");
     }
     document.write("<br>" + "<br>");
 }
 primenumbers();

 function oddnumbers() {
     document.write("Odd numbers  are :");
     for (i = 2; i <= a; i += 1) {
         document.write(i + ",");
     }
 }
 oddnumbers();
