/* Exercise 9.2 - DOM family relations
   Các bước 1-5 thực hiện trong Console của trình duyệt:
     document.getElementById("first")
     document.getElementById("first").firstChild
     document.getElementById("first").firstChild.nextSibling
     document.getElementById("first").parentNode
*/

// Bước 6: duyệt các child node của div#stories
var stories = document.getElementById("stories");
var i;
for (i = 0; i < stories.childNodes.length; i++) {
    console.log("child " + i + " =" + stories.childNodes[i] +
                " nodeType=" + stories.childNodes[i].nodeType);
}

// Bước 7: đổi màu nền cho các node KHÔNG phải text node
// (nodeType == 1 là element node, nodeType == 3 là text node)
for (i = 0; i < stories.childNodes.length; i++) {
    if (stories.childNodes[i].nodeType == 1) {
        stories.childNodes[i].style.backgroundColor = "#d9edf7";
    }
}
