 var a;
 a = prompt("enter a value");
 document.write("<div>");

 for (i = 1; i <= 10; i++) {
     document.write(a + "*" + i + "=");
     document.write(a * i, "<br>");
 }
 document.write("</div>");

 function table() {
     for (i = 1; i <= 10; i++) {
         document.write(a + "*" + i + "=", a * i, "<br>");
     }
 }
 document.write("table is :" + "<br>")
 table();

 function square() {
     document.write("<br>" + "square is :", +a * a, "<br>");
 }
 square();
 document.write("<br>");
 document.write(" square root is :");
 document.write(Math.sqrt(a), "<br>");
 document.write("<br>");
 document.write("Numbers are :" + "<br>");

 function numbers() {
     for (i = 1; i <= a; i++)
         document.write(i + "<br>");
 }
 numbers();

 function check() {



 }
