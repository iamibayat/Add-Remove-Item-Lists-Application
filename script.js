function addItem()
{
    var inp = document.getElementById("input_id");
    var ul = document.getElementById("list_id");
    var li = document.createElement("li");
    li.setAttribute("id",inp.value);
    li.appendChild(document.createTextNode(inp.value));
    ul.appendChild(li);
}


function deleteItem()
{
    var inp = document.getElementById("input_id");
    var ul = document.getElementById("list_id");
    var delete_item = document.getElementById(inp.value);
    ul.removeChild(delete_item);
}