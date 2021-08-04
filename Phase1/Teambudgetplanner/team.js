let obj =[];
function clearFields() {
    console.log("Hello")
    document.getElementById("abc").value=""
    document.getElementById("xyz").value=""
    document.getElementById("pqr").value=""
}

function clickfunction(){
     
     var a= document.getElementById("abc").value;
     var b= document.getElementById("xyz").value;
     var c= document.getElementById("pqr").value;

     let emp = new employee(a,b,c);
     obj.push(emp);
     console.log(obj);
     localStorage.setItem("empobj",JSON.stringify(obj))
    
     
}
class employee{
    constructor(clientname,projectname,budget){
    this.clientname=clientname;
    this.projectname=projectname;
    this.budget=budget;
    
    }
   
}
