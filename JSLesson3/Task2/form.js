function getFormvalue() {
    
    let fname = document.forms["form1"].elements["fname"].value;
    let lname = document.forms["form1"].elements["lname"].value;
    
    alert("First Name: " + fname + "\nLast Name: " + lname);
}