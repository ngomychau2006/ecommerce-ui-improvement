/* Exercise 8.9 - Functions as objects */

var isCanadian = true;

// Bước 1-2: bản đầu tiên (đã thay thế bằng bản cuối ở bước 6)
// function taxRate() {
//     if (isCanadian) { return 0.05; } else { return 0.0; }
// }
// function calculateTax(amount) { return amount * taxRate(); }

// Bước 3: lồng hàm taxRate() vào trong calculateTax()
// Bước 4: gán hàm cho biến (function object): var tax = function taxRate() {...};
// Bước 5: hàm ẩn danh (anonymous function): var tax = function () {...};

// Bước 6 (bản cuối): truyền hàm vào như một tham số
function calculateTax(amount, tax) {
    return amount * tax();
}

function calculateTotal(price, quantity) {
    var amount = price * quantity;
    return amount + calculateTax(amount, function () {
        if (isCanadian) {
            return 0.05;
        } else {
            return 0.0;
        }
    });
}
