// Demo giỏ hàng nhỏ ở trang chủ (DOM + Events)
(function () {
  var price = 199000, qty = 1;
  var q = document.getElementById("qty"), t = document.getElementById("total");
  if (!q) return;
  function fmt(n) { return n.toLocaleString("vi-VN") + " ₫"; }
  function render() { q.textContent = qty; t.textContent = fmt(price * qty); }
  document.getElementById("plus").addEventListener("click", function () { qty++; render(); });
  document.getElementById("minus").addEventListener("click", function () { if (qty > 1) qty--; render(); });
  render();
})();
