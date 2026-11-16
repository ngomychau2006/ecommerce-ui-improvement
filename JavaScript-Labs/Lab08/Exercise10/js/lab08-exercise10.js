/* Exercise 8.10 - Creating JavaScript objects */

/*
// Bước 1: new Object() và gán thuộc tính
var order = new Object();
order.product = "Self Portrait in a Straw Hat";
order.price = 15.0;
order.quantity = 2;
order.total = function() { return this.price * this.quantity; };

document.write("Product=" + order.product);
document.write("<br>Price=" + order.price);
document.write("<br>Quantity=" + order.quantity);
document.write("<br>Total=" + order.total());
// Bước 3: bỏ () sau total thì in ra nội dung hàm thay vì kết quả

// Bước 4-5: var order = {}; rồi dùng bracket notation
// order["product"] = "Self Portrait in a Straw Hat"; ...

// Bước 6: object literal notation
// var order = { product: "...", price: 15.0, quantity: 2, total: function() {...} };
*/

// Bước 7 + 10: constructor function (bản cuối, có thêm hàm output)
function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;
    this.total = function() { return this.price * this.quantity; };

    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    };
}

// Bước 8 + 11: tạo 2 đối tượng và gọi output()
var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

example1.output();
example2.output();
