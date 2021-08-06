class employee{
    constructor(title,article,image){

    this.title=title;
    this.article=article;
    this.image=image;
    }
}
function adddata(){
    var a=document.getElementById("name").value;
    var b=document.getElementById("nam").value;
    var c=document.getElementById("ucs").value;
let obj=[];
let emp=new employee(a,b,c);
obj.push(emp);
localStorage.setItem("empobj",JSON.stringify(obj));
let empparse= localStorage.getItem("empobj");
let empjason=JSON.parse(empparse);

   
var tableContent=""

for(let i=0;i<empjason.length;i++){

    var myimgTag = document.createElement("img");
    myimgTag.src = empjason[i].image
    myimgTag.setAttribute("style","width:30%"); 
     

    
tableContent +=""+empjason[i].title+" "+empjason[i].article+" "
}



tableContent = tableContent
var myPTagContent = document.createTextNode(tableContent);



document.getElementById("main").appendChild(myPTagContent)

document.getElementById("main").appendChild(myimgTag);



}