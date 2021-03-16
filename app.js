// Chp # 1: ALERTS

// Q1
//alert("Good Evening!!");

// Q2
//alert("Error ! Please enter a valid password");

// Q3
//alert("Welcome to JS land...\nHappy Coding!");

// Q4
//alert("Welcome to JS Land..");
//alert("Happy Coding!\n Prevent this page from creating additional dialogs");

// Q5
//alert("Hello…! I can run JS through my web browsers console");

//Chp # 2: VARIABLES FOR STRINGS

// Q1
 //var username="Shahzaib Ansari";

// Q2
//  var Myname="Shahzaib Ansari";
//  alert(Myname);

// Q3
//  var message="Hello World";
//  alert(message);

// Q4
//  var a="Shahzaib Ansari";
//  alert(a);
//  var b="20 year old";
//  alert(b);
//  var c="Certified Mobile Application Development";
//  alert(c);

// Q5
// var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP";
//  alert(pizza);

// Q6
//  var email="ansarishahzaib567@gmail.com";
//  alert("My email address is "+email);

// Q7
//  var book="A smarter way to learn Java Script";
//  alert("I am learning from the book "+book);

// Q8
//  var html="Yah !  I can write HTML content through JavaScript";
//  document.write(html);

// Q9
//  var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬";
//  alert(design);

//Chp # 3 VARIABLES FOR NUMBERS

//Q1
//  var age= 20;
//  alert("I am "+ age+" years old")

//Q2
// var visno= 14;
// alert("You have visited this site "+ visno+" times")

//Q3
// var birthYear= 2001;
// document.write("My birth year is "+ birthYear+"<br>"+ "Datatype of my declared variable is number")

//Q4
// var visname="Shahzaib";
// var prodtitle="Tshirts";
// var quant="10";
// document.write(visname +" ordered "+quant + prodtitle+ " on XYZ Clothing Store");

//Chp # 4 VARIABLE NAMES: LEGAL AND ILLEGAL

//Q1
//var v1,v2, v3;

//Q2
//var 1s, 6z, %5z, S, V, %s, a, b, c, 2#;

//Q3
//Script in HTML body tag
//<h1><b>Rules for naming JS variables</b></h1>
// document.write("Variable names can only contain numbers, $, _ and . For example $my_1stVariable"+"<br>")
// document.write("Variables must begin with a letter, $ or_. For example $name, _name or name"+"<br>")
// document.write(" Variable names are case sensitive"+"<br>")
// document.write(" Variable names should not be JS Keywords"+"<br>")

//chp # 5 MATH EXPRESSIONS

// Q1
// var a=3;
// var b=5;
// var c=a+b;
// document.write("Sum of "+a+" and "+b+" is "+c);

// Q2
// var a=3;
// var b=5;
// var d=b-a;
// document.write("Subtraction of "+a+" and "+b+" is "+d+".<br/>");
// var e=b*a;
// document.write("Multiplication of "+a+" and "+b+" is "+e+".<br/>");
// var f=b/a;
// document.write("Division of "+a+" and "+b+" is "+f+".<br/>");
// var g=b%a;
// document.write("Modulus of "+a+" and "+b+" is "+g+".<br/>");

//Q3
// var vari="Value after variable declaration is undefined";
// document.write(vari+".<br/>");
// var var1=3;
// document.write("Initial value: "+var1+".<br/>");
// ++var1;
// document.write("After increment: "+var1+".<br/>");
// var2=var1+7;
// document.write("After Addition with 7: "+var2+".<br/>");
// --var2;
// document.write("After Decrement: "+var2+".<br/>");
// var var3=var2%3;
// document.write("The Remainder is::"+var3+".<br/>");

// Q4
// var a=600;
// var b=a*5;
// document.write("Total Cost to buy 5 movie ticket is "+b+"PKR");

// Q5
// var num= 4;
// document.write("Table of "+num+"<br>");
// document.write("4 x 1 = "+(num*1)+"<br>");
// document.write("4 x 2 = "+(num*2)+"<br>");
// document.write("4 x 3 = "+(num*3)+"<br>");
// document.write("4 x 4 = "+(num*4)+"<br>");
// document.write("4 x 5 = "+(num*5)+"<br>");
// document.write("4 x 6 = "+(num*6)+"<br>");
// document.write("4 x 7 = "+(num*7)+"<br>");
// document.write("4 x 8 = "+(num*8)+"<br>");
// document.write("4 x 9 = "+(num*9)+"<br>");
// document.write("4 x 10 = "+(num*10)+"<br>");

// Q6
// var ctemp=+prompt("Enter Temperature in Celsius");
// f=((ctemp * (9/5))+32);
// var ftemp=+prompt("Enter Temperature in Fahrenheit");
// c=((ftemp - 32) * (5/9));
// document.write(ctemp+"C Is"+f+"F"+"<br>");
// document.write(ftemp+"F Is"+c+"C"+"<br>");

// Q7
// var p1 = 650;
// var p2 = 100;
// var q1 = 3;
// var q2 = 7;
// var sc = 100; 
// document.write("Price of item 1 is "+p1+"<br>");
// document.write("Quantity of item 1 is "+q1+"<br>");
// document.write("Price of item 2 is "+p2+"<br>");
// document.write("Quantity of item 2 is "+q2+"<br>");
// document.write("Shipping Charges "+sc+"<br>");
// document.write("Total cost of your order is "+((p1*q1)+(p2*q2)+sq));

// Q8
// var total=+prompt("Enter Total Marks");
// var obtained=+prompt("Enter Obtained Marks");
// pecentage=obtained/total
// finalpercentage=pecentage*100

// document.write("Total Marks:"+total+"<br>");
// document.write("Marks Obtained:"+obtained+"<br>");
// document.write("Percentage="+finalpercentage+"%");

// Q9
// var dollar=10;
// var riyals=25;
// var dollarpkr=dollar*104.80;
// var riyalpkr=riyals*28;
// document.write("Currency in PKR.<br>");
// document.write("10 Dollars in Rupees: "+dollarpkr+".<br>");
// document.write("25 Riyal in Rupees: "+riyalpkr+".<br>");

// Q10
// var exp=((5+1)*10)/2;
// document.write("((5+1)*10)/2 = "+exp);

// Q11
// var currentyear = 2021;
// var birthyear = 2001;
// document.write("Your age is either: "+(currentyear-birthyear)+" or "+((currentyear-birthyear)-1));

// Q12
// var r=+prompt("Enter the Radius of Circle")
// document.write("The Geometrizer<br>");
// document.write("Radius of Circle is: "+r+".<br>");
// var circum= 2*3.142*r;
// document.write("Circumference is: "+circum+".<br>");
// var area=3.14*(r*r);
// document.write("Area is: "+area+".<br>");

// Q13
// var snack = "chocolate chip";
// var age = 15;
// var max_age = 65;
// var amount = 3;
// document.write("Favourite Snack: "+(snack)+"<br>");
// document.write("Current Age: "+age+"<br>");
// document.write("Estimated Maximum Age: "+max_age+"<br>");
// document.write("Amount of snacks per day: "+amount+"<br>");
// document.write("You will need "+((max_age-age)*amount)+" to last you until the ripe old age of "+max_age);

// Chapters 6-9 MATH EXPRESSIONS

// Q1
// var a = +prompt("Enter your Number: ");
// document.write("Result:"+"<br>"+"The value of a is:"+a+"<hr>");
// var x=++a;
// document.write("The Value of ++a is"+x+"<br>"+"Now The value of a is:"+x+"<br>");
// var y=x++;
// document.write("The Value of a++ is"+y+"<br>"+"Now The value of a is:"+x+"<br>");
// var z=--x;
// document.write("The Value of --a is "+z+"<br>"+"Now The value of a is:"+x+"<br>");
// var w=x--;
// document.write("The Value of --a is "+w+"<br>"+"Now The value of a is:"+x+"<br>");

// Q2
// var a = 2, b = 1;
// document.write("a is:"+a+"<br>");
// document.write("b is:"+b+"<br>");
// var result = --a ;
// document.write("--a: "+result+"<br>");
// var re1=result- --b ;
// document.write("--a - --b: "+re1+"<br>");
// var re2=re1 + ++b ; 
// document.write("--a - --b + ++b: "+re2+"<br>"); 
// var re3=re2 + b--;
// document.write("--a - --b + ++b +b—Result is: "+re3+"<br>");

// Q3
// var name = prompt("Enter Your Name: ");
// document.write("Hello,"+name);
// alert("Hello,"+name);

//Q4 N/A

// Q5
// var a = +prompt("enter your number to generate table");
// if (a == 0) {
//     document.write("5 x 1"+"="+5*1+"<br>");
//     document.write("5 x 2"+"="+5*2+"<br>");
//     document.write("5 x 3"+"="+5*3+"<br>");
//     document.write("5 x 4"+"="+5*4+"<br>");
//     document.write("5 x 5"+"="+5*5+"<br>");
// 	document.write("5 x 6"+"="+5*6+"<br>");
// 	document.write("5 x 7"+"="+5*7+"<br>");
// 	document.write("5 x 8"+"="+5*8+"<br>");
// 	document.write("5 x 9"+"="+5*9+"<br>");
// 	document.write("5 x 10"+"="+5*10+"<br>");
//   }else {
//     document.write(a+"x 1"+"="+a*1+"<br>");
//     document.write(a+"x 2"+"="+a*2+"<br>");
//     document.write(a+"x 3"+"="+a*3+"<br>");
//     document.write(a+"x 4"+"="+a*4+"<br>");
//     document.write(a+"x 5"+"="+a*5+"<br>"); 
// 	document.write(a+"x 6"+"="+a*6+"<br>");
// 	document.write(a+"x 7"+"="+a*7+"<br>");
// 	document.write(a+"x 8"+"="+a*8+"<br>");
// 	document.write(a+"x 9"+"="+a*9+"<br>");
// 	document.write(a+"x 10"+"="+a*10+"<br>");
//   }

// Q6
// var a = prompt("enter Subject 1 Name");
// var x = +prompt("enter Subject 1 Marks");
// var b = prompt(" enter Subject 2 Name");
// var y = +prompt("enter Subject 2 Marks");
// var c = prompt("enter Subject 3 Name");
// var z = +prompt("enter Subject 3 Marks");
// var sum=x+y+z;
// var pecentage=sum/300;
// var final=pecentage*100;
// document.write("The Final Percentage is="+final);


//chapter 9-11 USER INPUT AND CONDITIONAL STATEMENTS

// Q1
// var city=prompt("Enter The City Name:","Enter City Name Here");
// if (city=="karachi") {
//     alert("Welcome to the city of lights");
// }
// else{
//     alert("Invalid City name");
// }

// Q2
// var gender=prompt("Enter your Gender:","Enter Gender Here");
// if (gender=="male") {
//     alert("Good Morning Sir");
// }
// else if (gender=="female"){
//     alert("Good Morning Ma'am");
// }
//  else{
//     alert("Invalid Gender");
// }

// Q3
// var color=prompt("Enter traffic signal color:","Enter color Here");
// if (color=="red") {
//     alert("Must Stop");
// }
// else if (color=="yellow"){
//     alert("Ready to Move");
// }
// else if (color=="green"){
//     alert("Move now");
// }
//  else{
//     alert("Invalid color");
// }

// Q4
// var fuel=prompt("Insert the amount of Fuel in your car(In liters)","Insert fuel Value");
// if (fuel<0.25 && fuel>0){
//     alert("Please refill fuel in your car");
// }
// else if (fuel>=0.25){
//     alert("You are ready to go");
// }
// else{
//  alert("Invalid Insertion")
// }

// Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    

// Q6
// document.write("Marks Sheet<br>");
// document.write("<br/>");
// var marks=prompt("Enter your marks","Marks");
// var per= (marks/300)*100;
// if (per>=80 && per<=100){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: A-one <br/>");
//     document.write("Remarks: Excellent");
// }
// else if(per>=70 && per<80){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: A <br/>");
//     document.write("Remarks: Good");
// }
// else if(per>=60 && per<70){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: B <br/>");
//     document.write("Remarks: You need to improve");
// }
// else if(per<=60 && per>=00){
//     document.write("Total Marks: 300.<br>");
//     document.write("Marks Obtained: "+marks+"<br/>");
//     document.write("Percentage: "+per+"<br/>");
//     document.write("Grade: Fail <br/>");
//     document.write("Remarks: Sorry");
// }
// else{
//     document.write("Insert valid Marks")
// }

// Q7
// var secretnum=+prompt("Enter your Number from 1 to 10: ");
// if (secretnum==7){
//  alert("Bingo! Correct answer");
// }
// else if (secretnum==7+1){
//     alert("Close enough to the correct answer");
// }
// else if (secretnum>10 || secretnum<1){
//     alert("Invalid Number");
// }
// else{
//     alert("Invalid Number");
// }

// Q8
// var num=+prompt("Insert Number to check if its Divisible by 3 or not","Enter Number here");
// if (num%3==0){
//     alert("Number is divisible by 3");
// }
// else{
//     alert("Number isn’t divisible by 3");
// }

// Q9
// var num=+prompt("Insert Number to check if its Even or Odd","Enter Number here");
// if (num%2==0){
//     alert("Number is Even");
// }
// else{
//     alert("Number is Odd");
// }

// Q10
// var T=+prompt("Enter the Temperature today","Enter Here");
// if (T>40){
//     alert("It is too hot outside.");
// }
// else if (T>=30 && T<=40){
//     alert("The Weather today is Normal.");
// }
// else if (T>=20 && T<=30){
//     alert("Today’s Weather is cool.");
// }
// else if (T>=10 && T<=20){
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("Invalid Temperature");
// }

// Q11
// var num1=+prompt("Enter 1st Number");
// var num2=+prompt("Enter 2nd Number");
// var op=prompt("Enter the sign of Operator you want to Perform between First and Second number (like +,-,*,/,%)");
// if (op =="+"){
//     alert("The Result is: "+(num1+num2));
// }
// else if (op =="-"){
//     alert("The Result is: "+(num1-num2));
// }
// else if (op =="*"){
//     alert("The Result is: "+(num1*num2));
// }
// else if (op =="/"){
//     alert("The Result is: "+(num1/num2));
// }
// else if (op=="%"){
//     alert("The Result is: "+(num1%num2));
// }
// else {
//     alert("You have entered invalid operator");
// }

//chp # 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

//Q1
// var x = 102;
// if (x<65){
//     document.write("It is a number");
// }else if (x>=65 && x<=96){
//     document.write("It is uppercase letter");
// }else if (x>=97 && x<=122){
//     document.write("It is lowercase letter");
// }

//Q2
// var x = 8;
// var y = 10;
// if (x===y){
//     document.write("Both numbers are equal");
// }else if (x>y){
//     document.write("Larger Number is: "+x);
// }else if (x<y){
//     document.write("Larger Number is: "+y);
// }

//Q3
// var x = prompt();
// if (x===0){
//     document.write("Number is zero");
// }else if (x>0){
//     document.write("Number is positive");
// }else if (x<0){
//     document.write("Number is negative");
// }

//Q4
// var x = "a”;
// if (x=="a" || x=="e" || x=="i" || x=="o" || x=="u" ){
//     document.write(true);
// }else{
//     document.write(false);
// }

// Q5
// var password = "shezi”;
// var userpass = prompt();
// if (userpass==""){
//     document.write("please enter your password");
// }else if(userpass==password){
//     document.write("Correct");
// }else if(userpass!=password){
//     document.write("Incorrect Password “ + userpass);
// }

// Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting);
// }
// else{
// greeting = "Good evening";
// document.write(greeting);
// }

//Q7
// var timee = +prompt();
// if (timee==1300){
//     document.write("1");
// }else if(timee==1400){
//     document.write("2");
// }else if(timee==1500){
//     document.write("3");
// }else if(timee==1600){
//     document.write("4");
// }else if(timee==1700){
//     document.write("5");
// }else if(timee==1800){
//     document.write("6");
// }else if(timee==1900){
//     document.write("7");
// }else if(timee==2000){
//     document.write("8");
// }else if(timee==2100){
//     document.write("9");
// }else if(timee==2200){
//     document.write("10");
// }else if(timee==2300){
//     document.write("11");
// }else if(timee==2400){
//     document.write("12");
// }

//chap 14-16 ARRAYS

//Q1
//var arr =  [];

//Q2
 //arr1 = new Array();

//Q3
//var str_arr = ["str1","str2","str3"];

//Q4
//var num_arr = [1,2,3,4,5];

//Q5
//var boolean_arr = [false,true];

//Q6
//var mixed_arr = ["string",2,true];

//Q7
// var education_list = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL","PHD"]
// document.write("1)"+education_list[0]+"<br>")
// document.write("2)"+education_list[1]+"<br>")
// document.write("3)"+education_list[2]+"<br>")
// document.write("4)"+education_list[3]+"<br>")
// document.write("5)"+education_list[4]+"<br>")
// document.write("6)"+education_list[5]+"<br>")
// document.write("7)"+education_list[6]+"<br>")
// document.write("8)"+education_list[7]+"<br>")
// document.write("<hr>");

//Q8
// var std = ["Michael","John","Tony"];
// var score = [320,230,480];

// per1=(score[0]*100)/500;
// per2=(score[1]*100)/500;
// per3=(score[2]*100)/500;

// document.write("Score of "+std[0]+" is "+score[0]+" Percentage: "+per1+"%"+"<br>");
// document.write(" ");
// document.write("Score of "+std[1]+" is "+score[1]+" Percentage: "+per2+"%"+"<br>");
// document.write(" ");
// document.write("Score of "+std[2]+" is "+score[2]+" Percentage: "+per3+"%"+"<br>");

// document.write("<hr>");

//Q9
//var clr = ['blue','red','green','black','white'];
// document.write("Array: "+clr+'<br>');
// var start = prompt("ADDING COLOR AT START: ");
// clr.unshift(start);
// document.write("After adding color at beginning: "+clr+'<br>');
// var endd = prompt("ADDING COLOR AT LAST: ");
// clr.unshift(end);
// document.write("After adding color at end: "+clr+'<br>');

// clr.unshift('purple');
// clr.unshift('yellow');
// document.write("After adding two colors at beginning: "+clr+'<br>');
// clr.shift();
// document.write("After deleting first color: "+clr+'<br>');
// clr.pop();
// document.write("After deleting last color: "+clr+'<br>');
// var usr_index = prompt("ADDING INDEX: ");
// var usr_color = prompt("COLOR: ");
// clr.splice(usr_index,2,usr_color);
// document.write("Updated Array after adding color: "+clr+'<br>');
// var del_index = prompt("DELETING INDEX: ");
// var del_colors = prompt("NUMBER OF COLORS WANT TO DELETE: ");
// clr.splice(del_index,del_colors);
// document.write("Updated Array after deleting colors: "+clr+'<br>');

//Q10
// var score = [320,230,480,120];
// document.write("Array: "+score);
// var sorted_arr = score.sort();
// document.write("Sorted Array: "+sorted_arr);

//Q11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities List: <br>");
// document.write(cities);
// var selected_cities = [cities[1],cities[2],cities[4]];
// document.write("Selected Cities: <br>");
// document.write(selected_cities);

// Q12
// var arr = ["This","is","my",'cat'];
// var arr_j = arr.join();
// document.write(arr_j);

// Q13
// var arrayN= [];
// arrayyy.push("Keyboard");
// arrayyy.push("Mouse");
// arrayyy.push("Printer");
// arrayyy.push("Monitor");
// document.write("Devices: <br>");
// document.write(arrayN);
// document.write("<hr>");
// document.write("Out: <br>"+ arrayN [0]+"<br>");
// document.write("Out: <br>"+ arrayN [1]+"<br>");
// document.write("Out: <br>"+ arrayN [2]+"<br>");
// document.write("Out: <br>"+ arrayN [3]+"<br>");

// Q14
// var arrayN = [];
// arrayyy.push("Keyboard");
// arrayyy.push("Mouse");
// arrayyy.push("Printer");
// arrayyy.push("Monitor");
// document.write("Devices: <br>");
// document.write(arrayN);
// document.write("<hr>");
// document.write("Out: <br>"+ arrayN [3]+"<br>");
// document.write("Out: <br>"+ arrayN [2]+"<br>");
// document.write("Out: <br>"+ arrayN [1]+"<br>");
// document.write("Out: <br>"+ arrayN [0]+"<br>");

//Q15
// var phone = ["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
// document.write("Select Option");
// document.write(phone[0]+"<br>");
// document.write(phone[1]+"<br>");
// document.write(phone[2]+"<br>");
// document.write(phone[3]+"<br>");
// document.write(phone[4]+"<br>");
// document.write(phone[5]+"<br>");

