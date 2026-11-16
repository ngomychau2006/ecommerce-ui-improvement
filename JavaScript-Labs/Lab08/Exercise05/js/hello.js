// Bước 4-7: nếu viết sai "document" thành "doccumment" thì Console báo
// "doccumment is not defined". Bản cuối đã sửa lại đúng chính tả.
document.write("this text was written from JS");
var count = 1;
document.write(" Count = " + count);

count++;
var output = "<br>Count = " + count;
document.write(output);

// Bước 8-12: thử trong Console:
//   count            -> 2
//   output           -> "<br>Count = 2"
//   var temp = count * 7;   -> undefined
//   temp             -> 14
