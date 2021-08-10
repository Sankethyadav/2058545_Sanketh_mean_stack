var items = [];
var i = 0;
function add() {
    var name = document.getElementById("abc").value;
    var price = document.getElementById("xyz").value;
    i = i + 1;
    document.getElementById("cart").innerHTML = i.toString();
    var item = new shop();
    item.name = name;
    item.price = parseInt(price);
    items.push(item);
}
function Sub() {
    var name = document.getElementById("lap").value;
    console.log(name);
    var price = document.getElementById("money").value;
    console.log(price);
    i = i + 1;
    document.getElementById("cart").innerHTML = i.toString();
    var item = new shop();
    item.name = name;
    item.price = parseInt(price);
    items.push(item);
    console.log(item);
}
function mul() {
    var name = document.getElementById("eng").value;
    console.log(name);
    var price = document.getElementById("price").value;
    console.log(price);
    i = i + 1;
    document.getElementById("cart").innerHTML = i.toString();
    var item = new shop();
    item.name = name;
    item.price = parseInt(price);
    items.push(item);
}
function checkout() {
    localStorage.setItem("itemobj", JSON.stringify(items));
    window.location.href = 'checkout.html';
}
var shop = /** @class */ (function () {
    function shop() {
        this.name = '';
        this.price = 0;
    }
    return shop;
}());
