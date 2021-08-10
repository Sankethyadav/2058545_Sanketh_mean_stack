let items: Array<shop>=[] 
let i = 0;

function add(){
var name=(<HTMLInputElement> document.getElementById("abc")).value;
var price=(<HTMLInputElement> document.getElementById("xyz")).value;
i=i+1
document.getElementById("cart").innerHTML = i.toString()
let item = new shop();
item.name = name;
item.price= parseInt(price);

items.push(item);

}
function Sub(){
    var name=(<HTMLInputElement> document.getElementById("lap")).value;
console.log(name);
var price=(<HTMLInputElement> document.getElementById("money")).value;
console.log(price);
i=i+1
document.getElementById("cart").innerHTML = i.toString()
let item = new shop();
item.name = name;
item.price= parseInt(price);

items.push(item);
console.log(item);
}
function mul(){
var name=(<HTMLInputElement> document.getElementById("eng")).value;
console.log(name);
var price=(<HTMLInputElement> document.getElementById("price")).value;
console.log(price);
i=i+1
document.getElementById("cart").innerHTML = i.toString()
let item = new shop();
item.name = name;
item.price= parseInt(price);

items.push(item);
}
function checkout(){
    localStorage.setItem("itemobj",JSON.stringify(items))
    window.location.href = 'checkout.html';

}
class shop{
    name:string='';
    price:number=0;
}