var students = [['A', 88], ['b', 68], ['c', 77.5], ['d', 83], ['e', 100], ['f', 95]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

if (avg < 60) {
    console.log("Grade: F");
}

else if (avg < 70) {
    console.log("Grade: D");
}

else if (avg < 80) {
    console.log("Grade: C");
}

else if (avg < 90) {
    console.log("Grade: B");
}

else if (avg < 100) {
    console.log("Grade: A");
}

else if (avg == 100) {
    console.log("Grade: S");
}