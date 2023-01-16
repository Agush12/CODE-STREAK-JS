var name =prompt("what is your name" );

var firstLetter =name.slice(0,1);
 var restName = name.slice(1,name.length);
 firstLetter =firstLetter.toUpperCase();
 restName =restName.toLowerCase();
  
  alert(firstLetter+restName);
