document.getElementById("add").onclick = function() {
    let text = document.getElementById("input").value; 
    let cbox = document.createElement('input');
    cbox.setAttribute("type", "checkbox")
    let li = "<li>" + cbox + text + "</li>";
    document.getElementById("list").insertAdjacentHTML('beforeend', li);
    document.getElementById("input").value = "";
  }

 const check = document.createElement('input')
  li.appendChild(cbox)
  li.appendChild(text)